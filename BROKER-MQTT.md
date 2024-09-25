# Configuración de un Broker MQTT Seguro con Docker y Mosquitto en DigitalOcean

Este tutorial te guía a través de la configuración de un broker MQTT seguro utilizando **Eclipse Mosquitto**, Docker y un certificado SSL autofirmado. Utilizaremos un **droplet de DigitalOcean** basado en **Ubuntu** y configuraremos Docker para manejar el servicio de Mosquitto.

## Requisitos
- Cuenta en DigitalOcean
- Acceso a un droplet basado en Ubuntu
- Conocimientos básicos de Docker y Docker Compose

### Paso 1: Crear un Droplet en DigitalOcean
1. Ve al dashboard de DigitalOcean.
2. Crea un nuevo **droplet** basado en **Ubuntu**.
3. Asigna un nombre y selecciona un tamaño adecuado (por ejemplo, 1 GB de RAM).
4. Genera una clave SSH y asóciala al droplet para acceder de forma segura.

### Paso 2: Acceder al Droplet e Instalar Docker y Docker Compose
1. Accede al droplet por SSH:
   ```bash
   ssh root@<IP_DEL_DROPLET>
   ```
2. Actualiza el sistema:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```
3. Instala Docker:
   ```bash
   sudo apt install docker.io -y
   ```
4. Instala Docker Compose:
   ```bash
   sudo apt install docker-compose -y
   ```

### Paso 3: Configurar el Proyecto Mosquitto
1. Crea una carpeta para tu proyecto:
   ```bash
   mkdir mosquitto
   cd mosquitto
   ```
2. Dentro de esta carpeta, crea un archivo `docker-compose.yml`:
   ```bash
   nano docker-compose.yml
   ```
   **Contenido del archivo `docker-compose.yml`:**
   ```yaml
   version: "3"
   services:
     mosquitto:
       image: eclipse-mosquitto:latest
       container_name: mosquitto
       environment:
         - TZ=America/Mexico_City
       volumes:
         - ./config:/mosquitto/config
         - ./data:/mosquitto/data
         - ./log:/mosquitto/log
       ports:
         - 8883:8883
       user: "1883:1883"
       restart: unless-stopped
   ```

### Paso 4: Crear el archivo de configuración de Mosquitto
1. Crea la carpeta `config` y dentro de ella el archivo `mosquitto.conf`:
   ```bash
   mkdir config
   nano config/mosquitto.conf
   ```
2. **Contenido del archivo `mosquitto.conf`:**
   ```bash
   persistence true
   persistence_location /mosquitto/data/
   log_dest file /mosquitto/log/mosquitto.log

   # Configurar puerto para conexiones seguras
   listener 8883
   cafile /mosquitto/config/mosquitto.crt
   certfile /mosquitto/config/mosquitto.crt
   keyfile /mosquitto/config/mosquitto.key
   require_certificate false

   # Configurar IPv4
   socket_domain ipv4

   # Deshabilitar conexiones anónimas
   allow_anonymous false
   password_file /mosquitto/config/mosquitto.passwd

   # Tipos de log
   log_type error
   log_type warning
   log_type notice
   log_type information
   log_type subscribe
   ```

### Paso 5: Generar un Certificado SSL Autofirmado
Para garantizar una conexión segura, genera un certificado SSL autofirmado:
```bash
openssl req -x509 -newkey rsa:2048 -keyout config/mosquitto.key -out config/mosquitto.crt -days 365 -nodes
```
Completa la información solicitada para el certificado (puedes usar valores por defecto si es un entorno de pruebas).

### Paso 6: Configurar Autenticación
1. Crea un archivo de contraseñas:
   ```bash
   mosquitto_passwd -c config/mosquitto.passwd <nombre_de_usuario>
   ```
2. Define una contraseña segura cuando se te solicite.

### Paso 7: Levantar el Contenedor con Docker Compose
1. Inicia el servicio Mosquitto:
   ```bash
   docker-compose up -d
   ```
2. Verifica que Mosquitto esté corriendo:
   ```bash
   docker ps
   ```

### Paso 8: Verificar la Configuración del Broker MQTT
1. Asegúrate de que Mosquitto esté escuchando en el puerto 8883:
   ```bash
   netstat -tuln | grep 8883
   ```
   Deberías ver algo como:
   ```bash
   tcp   0   0 0.0.0.0:8883   0.0.0.0:*   LISTEN
   ```

2. Para monitorear las conexiones y los mensajes, revisa los logs:
   ```bash
   docker logs mosquitto
   ```

### Paso 9: Probar la Conexión MQTT
- Puedes probar la conexión MQTT usando un cliente como **MQTT Explorer** o **mosquitto_pub/mosquitto_sub**.
- Asegúrate de conectarte a tu servidor usando la IP del droplet y el puerto 8883 con TLS habilitado.

### Paso 10: Configuración Adicional de Logs
Si deseas monitorear los logs de mensajes de ciertos *topics*, puedes suscribirte desde dentro del contenedor:
```bash
docker exec -it mosquitto mosquitto_sub -h localhost -t "topic/de/interes" -v
```

### Conclusión
Con esta configuración, tienes un broker MQTT seguro corriendo en Docker en tu droplet de DigitalOcean. El servicio está protegido por SSL y autenticación de usuario. Puedes continuar monitoreando, ajustando los *topics* y expandiendo el uso del broker según tus necesidades.

