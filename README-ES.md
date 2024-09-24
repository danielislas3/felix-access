# FelixAccess

**FelixAccess** es un sistema de control de acceso que permite gestionar de manera remota una puerta y un portón mediante una aplicación web. El proyecto combina un **backend** basado en Firebase y una **aplicación web** (frontend) que puede usarse tanto desde computadoras como desde dispositivos móviles.

## Descripción General del Proyecto

El propósito de **FelixAccess** es ofrecer una solución sencilla y eficiente para controlar el acceso a una propiedad. Los usuarios autorizados pueden abrir y cerrar la puerta y el portón de forma remota a través de la web, sin necesidad de estar físicamente presentes. Este sistema puede gestionarse desde cualquier lugar con conexión a Internet, brindando comodidad y seguridad.

### Backend

El **backend** está desarrollado con **Firebase**, un servicio en la nube que permite gestionar usuarios, realizar operaciones de control sobre la puerta y el portón, y mantener un registro de los accesos. Además, el backend se encarga de procesar las solicitudes de apertura y cierre que se envían desde la aplicación web.

El sistema utiliza el protocolo **MQTT** para comunicarse con los dispositivos de acceso (la puerta y el portón). **MQTT** es un protocolo ligero de mensajería que permite la comunicación en tiempo real entre el backend y los dispositivos, garantizando una respuesta rápida y eficiente al momento de abrir o cerrar los accesos.

### Frontend

El **frontend** es una aplicación web construida con **Vue.js**, que ofrece una interfaz fácil de usar para los usuarios. A través de esta interfaz, los usuarios pueden:
- Ver el estado actual de la puerta y el portón.
- Abrir o cerrar ambos accesos con un solo clic.
- Acceder desde cualquier dispositivo, ya que la aplicación está optimizada para ser utilizada en dispositivos móviles y de escritorio.

## Funcionalidades Principales

1. **Control Remoto del Acceso**: Los usuarios pueden abrir y cerrar la puerta y el portón desde la aplicación web, sin estar presentes en la propiedad.
2. **Seguridad y Gestión de Usuarios**: La gestión de usuarios permite que solo personas autorizadas puedan realizar operaciones en el sistema.
3. **Accesibilidad en Tiempo Real**: El estado de la puerta y el portón se actualiza en tiempo real, ofreciendo a los usuarios una visión precisa del estado de cada acceso.
4. **Protocolo MQTT**: Utiliza **MQTT** para enviar comandos de apertura y cierre a los dispositivos de acceso, lo que garantiza una comunicación eficiente y rápida.

## Objetivo

El objetivo de **FelixAccess** es proporcionar un sistema confiable y accesible para el control de accesos, mejorando la seguridad y la comodidad al eliminar la necesidad de realizar estas operaciones de manera física.
