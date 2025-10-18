

Un sistema de gestión de biblioteca. estructura del proyecto:


biblioteca-system/
├── node_modules/
├── .gitignore
├── package.json
├── tsconfig.base.json
├── README.md
├── Collection-Postman/
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
|       |           loan-book/
|       |             ├── LoanBook.spec.ts
|       |             ├── LoanBook.ts
|       |             └── LoanRepository.ts  
|       |           return-book/
|       |             ├── ReturnBook.spec.ts
|       |             └── ReturnBook.ts  
|       └── index.ts
└── apps/
    ├── backend/
    │       ├── dist/
    │       |    └── repositories/
    |       |         └── InMemoryUserRepository.js
    │       ├── IT-Teca Api/
    │       └── node_modules/
    │       ├── src/
    │       |    ├── models/
    |       |    |    ├── BookModel.ts
    |       |    |    ├── LoanModel.ts
    |       |    |    └── UserModel.ts
    │       |    ├── repositories/
    |       |    |    ├── InMemoryUserRepository.ts
    |       |    |    ├── InMemoryLoanRepository.ts
    |       |    |    ├── InMemoryBookRepository.ts
    |       |    |    ├── SequelizeBookRepository.ts
    |       |    |    ├── SequelizeloanRepository.ts
    |       |    |    └── SequelizeUserRepository.ts
    │       |    ├── routes/
    |       |    |    ├── bookRoutes.ts
    |       |    |    ├── loanRoutes.ts
    |       |    |    └── userRoutes.ts
    │       |    ├── scripts/
    |       |    |    └── test-db.ts
    │       |    ├── seeders/
    |       |    |    └── seed.ts
    │       |    └── db.ts
    |       ├── .env
    |       ├── index.ts
    |       ├── package.json
    │       └── tsconfig.json 
    └── frontend/ # React se hace más adelante


Buenas Practicas TDD,Clean Arquetecture,use EsModule,uso mysql con sequelize ,y Fastify, con uui como creador de claves unicas en base ,Pruebas con Bruno ide

Agrege tsx para poder usar archivos ts en el backend 03/10/2025



Elegí alguno de los siguientes dominios de negocio y desarrollará un sistema simple que lo implementará. 

Un sistema de gestión de biblioteca.

Estructura del proyecto
Para esto, cree un repositorio nuevo y en la raíz inicializará un proyecto de NodeJS con Typescript. En este monorepo vas a implementar el dominio, y (luego) el backend y el frontend, así asegurate de separarlo adecuadamente. 
Y usá el manejador de paquetes que quieras (npm) Nuestra recomendación es que utilice hilo v2 o superior.

Funcionalidades
En el sistema que elijas, utilizando arquitectura limpia, TDD, Typescript y todo lo que ves hasta ahora, implementará todas las funcionalidades necesarias para que el dominio funcione correctamente. Asegurate de incluir:

Registro y autenticación de usuarios, incluyendo políticas de acceso, roles y permisos como prefieras plantearlos.
Gestión de los recursos (libros).
Funcionalidades específicas del dominio (préstamo de libros etc).
Primero plantea el modelo de dominio y las entidades necesarias. Luego lista las funcionalidades que vas a implementar y cómo se relacionan entre sí. Y luego implementará cada caso de uso siguiendo las prácticas de TDD.

Una vez considera que todo el dominio está listo, implementa un backend simple que construye una API basada en la funcionalidad expuesta en el dominio. Usá algún framework de tu preferencia (Express, Fastify, NestJS, etc) y probalo usando algo como Postman o Insomnia.

Reflexioná sobre el proceso de desarrollo y cómo la arquitectura limpia y TDD te ayudarán a mantener un código limpio y fácil de entender. 





