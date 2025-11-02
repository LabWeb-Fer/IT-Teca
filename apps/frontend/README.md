
#  Arquitectura y Desarrollo

Este proyecto sigue una **arquitectura Hexagonal (o Limpia)**, utilizando **TDD (Desarrollo Guiado por Pruebas)** en ambos extremos para asegurar la **robustez** y el **mantenimiento**.


![Estructura del proyecto IT-Teca](Estructura-IT-Teca.png)

---

##  Stack Tecnológico

| Componente | Tecnología | Propósito |
|-------------|-------------|------------|
| **Backend** | Fastify, TypeScript | Servidor REST . |
| **Base de Datos** | MySQL | Almacenamiento persistente de datos. |
| **ORM** | Sequelize | Mapeo Objeto-Relacional y gestión de la BD. |
| **Frontend** | React, TypeScript, Vite | Interfaz de usuario modular. |
| **Testing** | Vitest, Storybook | Ejecución de pruebas unitarias, de integración y visuales. |

---
## Backend
El proyecto está estructurado en el backend siguiendo los principios de **Clean Architecture**, con una clara separación de responsabilidades en capas :

| Capa                  | Ubicación                                            | Tecnologías / Descripción                                                  |
|-----------------------|------------------------------------------------------|-----------------------------------------------------------------------------|
| **Entidades**         | `domain/src/entities/`                               | Modelos de dominio puros (`User`, `Book`, `Loan`)                          |
| **Use Cases**         | `domain/src/use-cases/`                              | Lógica de negocio desacoplada por caso (`AddBook`, `LoanBook`, etc.)       |
| **Repositorios**      | `use-cases/*Repository.ts` + `apps/backend/src/repositories/` | Interfaces en el dominio, implementaciones con Sequelize y memoria         |
| **Rutas HTTP**        | `apps/backend/src/routes/`                           | Controladores construidos con **Fastify**, invocando casos de uso          |
| **Infraestructura DB**| `apps/backend/src/models/`                           | Modelos **Sequelize** conectados a **MySQL**                                |

## Frontend

##  Enfoque TDD y Arquitectura Limpia

Se implementó el patrón de **Arquitectura Limpia (Clean Architecture)** con los siguientes principios:

- **Dominio (Core):** Contiene Entidades y Casos de Uso (Interactores) independientes de framework.  
- **Inversión de Dependencias (DIP):** El Frontend utiliza un patrón *Factory* para inyectar Repositorios, permitiendo alternar fácilmente la capa de infraestructura.

---

##  Control de Entorno (`VITE_USE_API`)

La variable de entorno `VITE_USE_API` en el **frontend** actúa como un **interruptor global** para la capa de datos:

| `VITE_USE_API` | Modo | Repositorio Utilizado | Objetivo |
|----------------|------|------------------------|-----------|
| `true` | API Real (Producción/Desarrollo) | `ApiUserRepository`, `ApiBookRepository`, etc. | Conecta a **MySQL** a través del **Backend de Fastify**. |
| `false` | Mock en Memoria (Testing/Storybook) | `InMemoryUserRepository`, `InMemoryBookRepository`, etc. | Usa datos volátiles en memoria, funciona sin el Backend. |

---

##  Estado de Pruebas

Las pruebas de la aplicación (Frontend con **Vitest/Storybook** y Backend) han pasado satisfactoriamente, validando la **lógica de negocio** y la **integración de las diferentes capas**.

---

##  Configuración del Entorno (`.env`)

Es nesesario configurar las variables de entorno para el **Backend** y el **Frontend**.
Define la conexión a la base de datos, el puerto del servidor y los orígenes CORS permitidos para desarrollo.

```bash
### .env (en backend)

DB_URL=mysql://[USUARIO]:[CLAVE]@localhost:3306/It-Teca_base

### Puerto donde corre el backend
PORT=3000

### Orígenes CORS permitidos (Frontend y Storybook)
CORS_ORIGINS="http://localhost:5173,http://localhost:6006"

### (Opcional)
NODE_ENV=development
```

```bash

# .env (en frontend) true :conexion mysql, false: conexion Mocks 

VITE_USE_API=true
VITE_API_URL=http://localhost:3000


```