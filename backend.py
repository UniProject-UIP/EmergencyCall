from flask import Flask, jsonify, request, session
from flask_cors import CORS
from pymongo import MongoClient
from phonenumbers import is_valid_number
from bcrypt import hashpw, gensalt, checkpw
import requests
import googlemaps
from twilio.rest import Client
from flask_jwt_extended import jwt_required, get_jwt_identity 

# Mi api key de Google Maps 
API_KEY = "AIzaSyBJD_rpcuQnplSLj65unp9lh9UiAyV24iQ"
gmaps = googlemaps.Client(key=API_KEY) 

app = Flask(__name__)    
app.secret_key = 'llaveultrasecreta'  # Clave secrseta necesaria para usar sesiones
CORS(app) 

def conectar_db(uri="mongodb://localhost:27017", db_name="Emergency"):
    try:
        usuarios = MongoClient(uri) 
        db = usuarios[db_name]
        return db
    except Exception as e:
        print("Error al conectar a la base de datos: " + str(e))
        return None

codigos_postales = {
    '507': 'PA',  # Panamá
    '90210': 'US',  # EE. UU.
    '1010': 'VE',  # Venezuela
    '110111': 'CO',  # Colombia
    '100000': 'CN',  # China
    '28001': 'ES',  # España
    '2000': 'CR',  # Costa Rica
    '10000': 'NI',  # Nicaragua 
    '1101': 'SV',  # El Salvador
    '8320000': 'CL'  # Chile
}
# Función para obtener el país basado en el código postal
def obtener_pais_por_codigo_postal(zip_code):
    pais = codigos_postales.get(zip_code)
    if pais:
        return pais
    
    # Si el código postal no está en el diccionario, consultar la API externa
    url = f"http://api.zippopotam.us/us/{zip_code}"  # Cambiar 'us' según sea necesario
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            pais = data.get('country', None)
            return pais
        else:
            print(f"Error en la API: {response.status_code}")
    except requests.RequestException as e:
        print(f"Error en la solicitud a la API: {e}")
    return None

# Función para validar números de teléfono según el país
def validar_telefono(numero, pais):
    if pais == 'PA' and len(numero) == 8 and numero.isdigit():
        return True
    elif pais == 'US' and len(numero) == 10 and numero.isdigit():
        return True
    # Agregar más validaciones según otros países
    return False

# Ruta para validar números de teléfono
@app.route('/numero_telefono', methods=['POST'])
def numero_telefono():
    data = request.get_json()
    zip_code = data.get('zip_code')
    numero = data.get('telefono')

    if not zip_code or not numero:
        return jsonify({"error": "Faltan parámetros: zip_code o telefono"}), 400

    pais = obtener_pais_por_codigo_postal(zip_code)
    if not pais:
        return jsonify({"error": "Código postal no válido"}), 400

    if validar_telefono(numero, pais):
        return jsonify({"message": "Número de teléfono válido"}), 200
    else:
        return jsonify({"error": "Número de teléfono no válido"}), 400

# Ruta para crear un usuario
@app.route('/Crear_usuarios', methods=['POST'])
def Crear_usuarios():
    try:
        db = conectar_db()
        if db is None:  # Modificación aquí
            return jsonify({"error": "No se pudo conectar a la base de datos"}), 500
        
        data = request.get_json() 
        nombre = data.get('nombre')
        apellido = data.get('apellido')
        cedula = data.get('cedula')
        genero = data.get('genero')
        zip_code = data.get('zip_code')
        telefono = data.get('telefono')


        # Validaciones
        if not all([nombre, apellido, cedula, genero, zip_code, telefono]):
            return jsonify({"error": "Todos los campos son obligatorios"}), 400

        pais = obtener_pais_por_codigo_postal(zip_code)
        if not pais:
            return jsonify({"error": "Código postal no válido"}), 400

        if not validar_telefono(telefono, pais):
            return jsonify({"error": "El número de teléfono no es válido para el país especificado"}), 400

        # Crear usuario en la base de datos
        usu = {
            "nombre": nombre,
            "apellido": apellido,
            "cedula": cedula,
            "genero": genero,
            "telefono": telefono,
            "zip_code": zip_code,
        }
        
        # Insertar usuario
        crearUsu = db.usuarios.insert_one(usu)
        return jsonify({"message": "Usuario creado con éxito", "usuario_id": str(crearUsu.inserted_id)}), 201

    except Exception as e:
        app.logger.error("Error al crear usuario: %s", str(e))
        return jsonify({"error": "Error al crear usuario. Intente nuevamente."}), 500
    
@app.route("/CredencialesUsuarios", methods=['POST'])
def usucredeciales():
    try:
        db = conectar_db()
        if db is None:
            return jsonify({"error": "Error: no se pudo conectar a la base de datos."}), 500
        
        data = request.get_json()

        nombre_usuario = data.get("nombre_usuario")
        contrasena = data.get("contrasena")

        if not all([nombre_usuario, contrasena]):
            return jsonify({"error": "Usuario y contraseña son obligatorios"}), 400
        
        # Verificar si el usuario ya existe
        if db.usuarios.find_one({"nombre_usuario": nombre_usuario}):
            return jsonify({"error": "El nombre de usuario ya está en uso"}), 400
        
        hashed_password = hashpw(contrasena.encode('utf-8'), gensalt()).decode('utf-8')

        cuenta = {
            "nombre_usuario": nombre_usuario,
            "contrasena": hashed_password
        }

        # Insertar credenciales en la base de datos
        db.usuarios.insert_one(cuenta)
        
        return jsonify({"message": "Cuenta creada con éxito"}), 201

    except Exception as e:
        app.logger.error("Error al crear credenciales: %s", str(e))
        return jsonify({"error": "Error al crear credenciales. Intente nuevamente."}), 500


    
@app.route("/perfilusuarios/", methods={'GET'})
@jwt_required()
def perfilusuarios():
    # Obtener el nombre de usuario del token JWT
    username = get_jwt_identity()

    # Conectar a la base de datos
    db = conectar_db()
    if not db:
        return jsonify({"error": "No se pudo conectar a la base de datos"}), 500

    # Buscar el usuario en la base de datos
    usuario = db.usuarios.find_one({"nombre_usuario": username})

    if not usuario:
        return jsonify({"error": "Usuario no encontrado"}), 404

    # Filtrar solo los campos necesarios
    perfil = {
        "nombre": usuario["nombre"],
        "apellido": usuario["apellido"],
        "telefono": usuario["telefono"],
        "nombre_usuario": usuario["nombre_usuario"]
    }

    return jsonify(perfil), 200

    

# Ruta para cerrar sesión
@app.route('/CerrarSesion', methods=['POST'])
def CerrarSesion():
    if 'usuario_id' in session:
        session.pop('usuario_id', None)  # Eliminar el 'usuario_id' de la sesión
        return jsonify({"message": "Sesión cerrada correctamente"}), 200
    else:
        return jsonify({"error": "No hay usuario autenticado"}), 400

@app.route("/login/", methods=["POST"])
def login():
    if request.method == "POST":
        data = request.get_json() 
        nombre_usuario = data.get('nombre_usuario')
        contrasena = data.get('contrasena')

        if not nombre_usuario or not contrasena:
            return jsonify({"error": "Falta de informacion: nombre_usuario o contrasena"}), 400

        db = conectar_db()  # Conectar a la base de datos
        if db is not None:  # Comprobar si la conexión a la base de datos es exitosa
            usuario = db.usuarios.find_one({"nombre_usuario": nombre_usuario})
            if not usuario:
                return jsonify({"error": "Usuario no encontrado"}), 404

            # Verificar la contraseña con bcrypt
            if checkpw(contrasena.encode('utf-8'), usuario['contrasena'].encode('utf-8')):
                session['usuario_id'] = str(usuario["_id"])
                return jsonify({"message": "Inicio de sesión exitoso", "usuario_id": session['usuario_id']}), 200
            else:
                return jsonify({"error": "Credenciales incorrectas"}), 401
        else:
            return jsonify({"error": "No se pudo conectar a la base de datos"}), 500
        

@app.route("/VerHospitales/", methods=["GET"])
def ver_hospitales():
    # Obtener lat y lng desde la query string de la URL
    lat = request.args.get('lat')
    lng = request.args.get('lng')

    # Verificar que lat y lng no sean None
    if not lat or not lng:
        return jsonify({"error": "Faltan parámetros de ubicación"}), 400

    try:
        # Realiza la búsqueda de hospitales cercanos
        places_result = gmaps.places_nearby(
            location=(float(lat), float(lng)),
            radius=5000,  # Radio de búsqueda en metros
            type="hospital"
        )

        if places_result["status"] != "OK":
            return jsonify({"error": "No se encontraron hospitales cercanos"}), 404

        hospitales = []
        for place in places_result["results"]:
            hospital = {
                "nombre": place["name"],
                "direccion": place.get("vicinity", "Dirección no disponible"),
                "telefono": place.get("formatted_phone_number", "No disponible"),
                "horarios": place.get("opening_hours", {}).get("weekday_text", "No disponible")
            }
            hospitales.append(hospital)

        return jsonify({"hospitales": hospitales}), 200

    except Exception as e:
        print(f"Error al obtener hospitales: {e}")
        return jsonify({"error": "Error interno al buscar hospitales"}), 500


# SECCION DE SOLICITUD DE LLAMADA 
ACCOUNT_SID = "AC564f6bf822cbe9f77a2309f6fad356c3"
AUTH_TOKEN = "e90f48e92ebb90a29caff285095c700f"
TWILIO_PHONE_NUMBER = "+50764597499"

# Inicializar cliente de Twilio
client = Client(ACCOUNT_SID, AUTH_TOKEN)

@app.route("/LlamarAmbulancia", methods=["POST"])
def LlamarAmbulancia(): 
    try:
        data = request.get_json()
        numero = data.get("numero")

        if not numero:
            return jsonify({"error": "El número de destino es obligatorio"}), 400

        # Realiza la llamada
        call = client.calls.create(
            to=numero,  # Número del usuario
            from_=TWILIO_PHONE_NUMBER,  # Tu número de Twilio
            twiml='<Response><Say>Esta es una llamada de prueba para emergencias. Por favor, toma acción.</Say></Response>'
        )

        return jsonify({
            "message": "Llamada realizada exitosamente",
            "call_sid": call.sid
        }), 200

    except Exception as e:
        return jsonify({"error": f"Error al realizar la llamada: {str(e)}"}), 500
    
ambulance_location = {
    "latitude": 0.0,
    "longitude": 0.0
}

@app.route('/update_location', methods=['POST'])
def update_location():
    global ambulance_location
    data = request.get_json()
    # Actualizar la ubicación de la ambulancia
    ambulance_location = {
        "latitude": data['latitude'],
        "longitude": data['longitude']
    }
    return 'Location updated', 200

@app.route('/Verambulancia', methods=['GET'])
def Verambulancia():
    # Devuelve la ubicación actual de la ambulancia
    return jsonify(ambulance_location)
    
# BACK DE PARAMEDICO 

@app.route("/LoginParamedico/", methods=['POST']) 
def LoginParamedico():
    if request.method == "POST":
        data = request.get_json() 
        usuario_paramedico = data.get('usuario_paramedico')
        contrasena = data.get('contrasena')

        if not usuario_paramedico or not contrasena:
            return jsonify({"error": "Falta de informacion: nombre_usuario o contrasena"}), 400

        db = conectar_db()  # Conectar a la base de datos
        if db is not None:  # Comprobar si la conexión a la base de datos es exitosa
            usuario_p = db.usuarios.find_one({"usuario_paramedico": usuario_paramedico})
            if not usuario_p:
                return jsonify({"error": "Usuario no encontrado"}), 404

            # Verificar la contraseña con bcrypt
            if checkpw(contrasena.encode('utf-8'), usuario_p['contrasena'].encode('utf-8')):
                session['usuario_id'] = str(usuario_p["_id"])
                return jsonify({"message": "Inicio de sesión exitoso", "usuario_id": session['usuario_id']}), 200
            else:
                return jsonify({"error": "Credenciales incorrectas"}), 401
        else:
            return jsonify({"error": "No se pudo conectar a la base de datos"}), 500
        

@app.route('/CrearCredenciales', methods=['POST'])
def Crearcredenciales():
    try:
        db = conectar_db()
        if db is None:
            return jsonify({"error": "Error: no se pudo conectar a la base de datos."}), 500
        
        data = request.get_json()

        usuario_paramedico = data.get("usuario_paramedico")
        contrasena = data.get("contrasena")

        if not all([usuario_paramedico, contrasena]):
            return jsonify({"error": "Usuario y contraseña son obligatorios"}), 400
        
        # Verificar si el usuario ya existe
        if db.usuarios.find_one({"usuario_paramedico": usuario_paramedico}):
            return jsonify({"error": "El nombre de usuario ya está en uso"}), 400
        
        hashed_password = hashpw(contrasena.encode('utf-8'), gensalt()).decode('utf-8')

        credenciales = {
            "usuario_paramedico": usuario_paramedico,
            "contrasena": hashed_password
        }

        # Insertar credenciales en la base de datos
        db.usuarios.insert_one(credenciales)
        
        return jsonify({"message": "Credenciales creadas con éxito"}), 201

    except Exception as e:
        app.logger.error("Error al crear credenciales: %s", str(e))
        return jsonify({"error": "Error al crear credenciales. Intente nuevamente."}), 500


@app.route("/Crearparamedico/", methods=['POST'])
def crearparamedico():
    try:
        db = conectar_db()
        if db is None:
            return jsonify({"error": "Error: no se pudo conectar a la base de datos."}), 500
        
        data = request.get_json()

        # Validaciones de datos
        nombre_completo = data.get("nombre_completo")
        hospital = data.get("hospital")
        cedula = data.get("cedula")
        telefono = data.get("telefono")
        zip_code = data.get("zip_code")
        genero = data.get("genero")

        if not all([nombre_completo, hospital, cedula, telefono, genero, zip_code]):
            return jsonify({"error": "Todos los campos son obligatorios"}), 400

        # Validaciones específicas
        pais = obtener_pais_por_codigo_postal(zip_code)
        if not pais:
            return jsonify({"error": "Código postal no válido"}), 400

        if not validar_telefono(telefono, pais):
            return jsonify({"error": "El número de teléfono no es válido para el país especificado"}), 400

        # Crear el objeto paramédico
        paramedico = {
            "nombre_completo": nombre_completo,
            "hospital": hospital,
            "cedula": cedula,
            "zip_code": zip_code,
            "telefono": telefono,
            "genero": genero
        }

        # Insertar usuario en la base de datos
        Crearp = db.usuarios.insert_one(paramedico)
        return jsonify({"message": "Usuario paramédico creado con éxito", "usuario_id": str(Crearp.inserted_id)}), 201

    except Exception as e:
        app.logger.error("Error al crear usuario: %s", str(e))
        return jsonify({"error": "Error al crear usuario. Intente nuevamente."}), 500


@app.route("/VerPaciente", methods=['GET'])
def verpaciente():
    print

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True) 

