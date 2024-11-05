# Sistema de Gestión de Tickets

Este proyecto es un trabajo práctico de programación que implementa una arquitectura **Microkernel** para el backend. En este sistema, se gestionan eventos y la venta de tickets, con plugins adicionales para reservas, descuentos y ventas. La interfaz de usuario fue desarrollada en **React** y utiliza **Docker** para facilitar el despliegue.

## 🗂 Estructura del Proyecto

- **kernel**: Maneja la persistencia de datos y la interacción con la base de datos.
- **plugins**: Contiene los modulos que extienden las distintas funcionalidades de la aplicacion.
- **controllers**: Gestiona las solicitudes HTTP y media la interacción entre el cliente y los servicios del sistema.
- **services**: Contiene la lógica de negocio para procesar datos antes de su almacenamiento o retorno.
- **models**: Define las interfaces y modelos de datos en el sistema.

### Arquitectura Microkernel

Este sistema está basado en una arquitectura **Microkernel**, donde el núcleo proporciona las funcionalidades esenciales, y los plugins aportan extensiones específicas. Se han implementado los siguientes plugins:

- **Plugin de Reservas**: Administra las reservas de tickets para eventos.
- **Plugin de Descuento**: Aplica descuentos a los tickets seleccionados.
- **Plugin de Venta**: Permite la venta de tickets y actualiza su estado en el sistema.

## 🚀 Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/MauriBarrientos/tlp4-tp-microkernel
    ```
   
2. Navega al directorio del proyecto:
    ```bash
    cd tlp4-tp-microkernel
    ```


## 💻 Uso

1. Inicia el servidor mediante docker, recuerda instalar la imagen con este comando en la carpeta que contenga el 'docker-compose.yml':
    ```bash
    docker compose up -d
    ```

2. El servidor estará disponible en `http://localhost:4000`.

## 📑 Endpoints

### Rutas de Eventos

- **GET** `/events`: Recupera la lista de todos los eventos.
- **GET** `/event/:id`: Recupera un evento específico junto con sus tickets asociados.
- **POST** `/event`: Crea un nuevo evento junto con sus tickets.

### Rutas de Descuento

- **POST** `/apply-discount/:id`: Aplica un descuento a un ticket específico.

### Rutas de Tickets

- **POST** `/sell/:id`: Realiza la venta de un ticket específico.
- **GET** `/tickets`: Recupera la lista de todos los tickets.

## 🛠️ Tecnologías Utilizadas

- **Backend**
  - **Node.js**: Entorno de ejecución para JavaScript en el servidor.
  - **Express**: Framework para el desarrollo de aplicaciones web en Node.js.
  - **TypeScript**: Superset de JavaScript que añade tipado estático.
  - **Docker**: Facilita el despliegue y administración de los servicios del backend.
  - **Arquitectura Microkernel**: Organización modular y extensible para la gestión de funcionalidades.
  
- **Frontend**
  - **React**: Biblioteca de JavaScript para la construcción de interfaces de usuario.
  - **Docker**: Utilizado para virtualizar un contenedor y desplegar el frontend.

