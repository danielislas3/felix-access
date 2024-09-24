# FelixAccess

**FelixAccess** is a remote access control system that allows users to manage a door and gate via a web application. The project combines a **Firebase-based backend** and a **Vue.js frontend** that can be used on both desktop and mobile devices.

## Project Overview

The purpose of **FelixAccess** is to provide a simple and efficient solution for controlling access to a property. Authorized users can open and close the door and gate remotely through the web, eliminating the need to be physically present. The system can be managed from anywhere with an internet connection, offering both convenience and security.

### Backend

The **backend** is built using **Firebase**, a cloud service that manages user authentication, handles the operations to control the door and gate, and logs access records. Additionally, the backend processes requests to open and close the access points that are sent from the web application.

The system uses the **MQTT protocol** to communicate with the access devices (the door and gate). **MQTT** is a lightweight messaging protocol that allows real-time communication between the backend and the devices, ensuring a fast and efficient response when opening or closing the access points.

### Frontend

The **frontend** is a web application built with **Vue.js** that offers a user-friendly interface. Through this interface, users can:
- View the current status of the door and gate.
- Open or close both access points with a single click.
- Access the system from any device, as the application is optimized for both mobile and desktop use.

## Main Features

1. **Remote Access Control**: Users can open and close the door and gate remotely through the web application, without being physically present.
2. **User Security and Management**: User management ensures that only authorized individuals can perform operations within the system.
3. **Real-Time Accessibility**: The status of the door and gate is updated in real-time, providing users with accurate information about each access point.
4. **MQTT Protocol**: The system utilizes **MQTT** to send commands to open and close the devices, ensuring efficient and fast communication.

## Objective

The goal of **FelixAccess** is to provide a reliable and accessible access control system that enhances security and convenience by eliminating the need for physical operations.

---

## [Ver este documento en español](README-ES.md)
