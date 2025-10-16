biblioteca-system/
├── package.json
├── tsconfig.base.json
├── README.md
├── domain/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vitest.tsconfig.json
│   └── src/
│       ├── entities/
|       │           ├── Book.ts
|       │           ├── Loan.ts
|       |           └── User.ts
│       ├── services/
│       ├── use-cases/
|       |           add-book/
|       |             ├── AddBook.spec.ts
|       |             ├── AddBook.ts
|       |             └── BookRepository.ts  
|       |           register-user/
|       |             ├── RegisterUser.spec.ts
|       |             ├── RegisterUser.ts
|       |             └── UserRepository.ts  
|       └── index.ts
├── apps/
│   ├── backend/
│   │       └── dist/
|   │       |    └── repositories/
|   |       |         └── InMemoryUserRepository.js
│   │       └── src/
|   │       |    └── repositories/
|   |       |         └── InMemoryUserRepository.ts
|   |       ├── package.json
|   |       ├── index.ts
│   │       └── tsconfig.json 
│   └── frontend/ # React se hace más adelante





Elegí alguno de los siguientes dominios de negocio y desarrollará un sistema simple que lo implementará. Podés elegir entre:

Un sistema de gestión de biblioteca.
Un sistema de gestión de reservas de hotel.
Un sistema de gestión de pedidos de comida.
Un sistema de e-commerce.
Alguna otra cosa que tengas en mente.
Estructura del proyecto
Para esto, cree un repositorio nuevo y en la raíz inicializará un proyecto de NodeJS con Typescript. En este monorepo vas a implementar el dominio, y (luego) el backend y el frontend, así asegurate de separarlo adecuadamente. Podés usar la estructura de carpetas que quieras, pero asegúrate de que sea clara y fácil de entender. Nuestra recomendación es que utiliza la siguiente estructura:

mi-proyecto/
├── README.md
├── package.json
├── tsconfig.json
├── domain/
│   ├── package.json
│   ├── src/
│   │   ├── entities/
│   │   ├── use-cases/
│   │   └── services/
├── apps/
│   ├── backend/
│   │   ├── package.json
│   │   └── src/
│   └── frontend/ #Lo haremos más adelante
Y usá el manejador de paquetes que quieras (npm, Yarn, pnpm, etc). Nuestra recomendación es que utilice hilo v2 o superior.

Funcionalidades
En el sistema que elijas, utilizando arquitectura limpia, TDD, Typescript y todo lo que ves hasta ahora, implementará todas las funcionalidades necesarias para que el dominio funcione correctamente. Asegurate de incluir:

Registro y autenticación de usuarios, incluyendo políticas de acceso, roles y permisos como prefieras plantearlos.
Gestión de los recursos (libros, habitaciones, pedidos, productos).
Funcionalidades específicas del dominio (préstamo de libros, reservas de hotel, seguimiento de pedidos, carrito de compras).
Primero plantea el modelo de dominio y las entidades necesarias. Luego lista las funcionalidades que vas a implementar y cómo se relacionan entre sí. Y luego implementará cada caso de uso siguiendo las prácticas de TDD.

Una vez considera que todo el dominio está listo, implementa un backend simple que construye una API basada en la funcionalidad expuesta en el dominio. Usá algún framework de tu preferencia (Express, Fastify, NestJS, etc) y probalo usando algo como Postman o Insomnia.

Reflexioná sobre el proceso de desarrollo y cómo la arquitectura limpia y TDD te ayudarán a mantener un código limpio y fácil de entender. ¿Hubo alguna parte del proceso que te resultó más difícil o confusa? ¿Cómo lo resolvió? ¿Qué aprendiste sobre la importancia de la arquitectura limpia y TDD en el desarrollo de software? Cuando pensaste que habías terminado, ¿te diste cuenta de que había algo más que debías implementar? ¿Cómo lo resolvió? ¿Qué aprendiste sobre la importancia de la arquitectura limpia y TDD en el desarrollo de software?

La interfaz gráfica la vamos a implementar más adelante.

Cualquier duda que tengas, no dudes en preguntar en los canales de Discord


Buenas Practicas
use EsModule
Agrege Esnext
Agrege tsx para poder usar archivos ts en el backend 03/10/2025
