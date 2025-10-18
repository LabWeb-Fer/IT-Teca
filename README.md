# 📌 Resumen técnico: `biblioteca-system`

## 🧱 Arquitectura: Clean Architecture

El proyecto está estructurado siguiendo los principios de **Clean Architecture**, con una clara separación de responsabilidades en capas:

| Capa                  | Ubicación                                            | Tecnologías / Descripción                                                  |
|-----------------------|------------------------------------------------------|-----------------------------------------------------------------------------|
| **Entidades**         | `domain/src/entities/`                               | Modelos de dominio puros (`User`, `Book`, `Loan`)                          |
| **Use Cases**         | `domain/src/use-cases/`                              | Lógica de negocio desacoplada por caso (`AddBook`, `LoanBook`, etc.)       |
| **Repositorios**      | `use-cases/*Repository.ts` + `apps/backend/src/repositories/` | Interfaces en el dominio, implementaciones con Sequelize y memoria         |
| **Rutas HTTP**        | `apps/backend/src/routes/`                           | Controladores construidos con **Fastify**, invocando casos de uso          |
| **Infraestructura DB**| `apps/backend/src/models/`                           | Modelos **Sequelize** conectados a **MySQL**                                |

---

## 🧪 Testing: Test-Driven Development (TDD)

El proyecto aplica **TDD** en el dominio, siguiendo este flujo:

1. Se escriben pruebas con [`Vitest`](https://vitest.dev/)
2. Se implementa el mínimo código necesario
3. Se refactoriza después de que las pruebas pasen

📁 Cada caso de uso tiene su prueba en `*.spec.ts` y su implementación asociada (`AddBook`, `RegisterUser`, etc.).

✅ Ejecutar pruebas:

```bash
cd domain
npm run test

### Refleccion final
	Implementar esta app con Clean Architecture y TDD me permitio separar muy bien las responsabilidades, lo cual hizo que fuera fácil probar cada componente individualmente. Aunque al principio la estructura parecía compleja, una vez que todo encajó, fue mucho más mantenible y clara. Noté la importancia de escribir los tests primero: me ayudaron a descubrir errores de diseño antes de implementar. Lo más desafiante fue la coordinación entre los repositorios y los casos de uso. Aprendí que la arquitectura limpia no es solo una “moda”, sino una herramienta real para evitar caos en proyectos medianos y grandes.

