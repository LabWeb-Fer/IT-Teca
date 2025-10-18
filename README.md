# IT-Teca
Biblioteca



# 🧱 Clean Architecture y 🧪 TDD en `biblioteca-system`

Este proyecto fue desarrollado aplicando **TDD (Test Driven Development)** y **Clean Architecture**. A continuación, se detalla cómo están implementados ambos enfoques en la estructura del sistema.

---

## 🧪 Test-Driven Development (TDD)

Se siguió un flujo TDD clásico:

1. ✍️ Escribir primero las pruebas (`.spec.ts`)
2. 🔧 Implementar el código justo para que pasen
3. 🧹 Refactorizar si es necesario

### Ejemplo de TDD aplicado

📁 `domain/src/use-cases/add-book/`

- ✅ [`AddBook.spec.ts`](domain/src/use-cases/add-book/AddBook.spec.ts): define los comportamientos esperados (crear libro, evitar duplicados).
- ✅ [`AddBook.ts`](domain/src/use-cases/add-book/AddBook.ts): implementación guiada por las pruebas.
- ✅ [`BookRepository.ts`](domain/src/use-cases/add-book/BookRepository.ts): interfaz desacoplada de infraestructura.

> Las pruebas se ejecutan con [`Vitest`](https://vitest.dev/), usando `npm run test` dentro de la carpeta `domain/`.

---

## 🧱 Clean Architecture

El proyecto sigue la **Arquitectura Limpia** separando responsabilidades en capas:

| Capa / Responsabilidad       | Ubicación                                                               | Detalle                                                                 |
|-----------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------|
| **Entidades (Entities)**    | `domain/src/entities/`                                                  | Modelos puros de negocio (`Book`, `Loan`, `User`)                      |
| **Casos de uso (Use Cases)**| `domain/src/use-cases/`                                                | Lógica de negocio (`AddBook`, `RegisterUser`, etc.)                    |
| **Interfaces (Repositorios)**| `domain/src/use-cases/*Repository.ts` + `apps/backend/src/repositories/`| Interfaces puras e implementaciones (InMemory y Sequelize)             |
| **Adaptadores (HTTP)**      | `apps/backend/src/routes/`                                              | Rutas Fastify que conectan el mundo externo con los casos de uso       |
| **Infraestructura (DB)**    | `apps/backend/src/models/`                                              | Modelos Sequelize para conexión con MySQL                              |

### Beneficios

- ✅ Independencia del framework (Fastify puede ser reemplazado)
- ✅ Independencia de la base de datos (Sequelize o incluso Mongo podrían usarse)
- ✅ Fácil de testear y mantener

---

## 📦 Tecnologías usadas

- **Lenguaje:** TypeScript con soporte para ESModules (`tsx`, `tsconfig.base.json`)
- **Framework web:** Fastify
- **Base de datos:** MySQL + Sequelize ORM
- **Testing:** Vitest + Bruno IDE (para pruebas manuales de endpoints)
- **Gestión de claves únicas:** `crypto.randomUUID()`
- **Monorepo:** Estructura organizada por dominios y aplicaciones

---

## 📁 Estructura del proyecto



Implementar esta app con Clean Architecture y TDD me permitio separar muy bien las responsabilidades, lo cual hizo que fuera fácil probar cada componente individualmente. Aunque al principio la estructura parecía compleja, una vez que todo encajó, fue mucho más mantenible y clara. Noté la importancia de escribir los tests primero: me ayudaron a descubrir errores de diseño antes de implementar. Lo más desafiante fue la coordinación entre los repositorios y los casos de uso. Aprendí que la arquitectura limpia no es solo una “moda”, sino una herramienta real para evitar caos en proyectos medianos y grandes.

