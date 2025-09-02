src/
├── config/                   # Environment-based configs (DB, SMTP, etc.)
│    └── database.ts
|
├── models/                   # Sequelize models
│   └── cust_nid_tel_src.ts               # Example User model
│   └── index.ts              # Central model loader & associations
|
├── controllers/
│   └── auth/
│       └── AuthController.ts
│
├── dtos/
│   └── auth/
│       ├── sendOtpDTO.ts
│       └── VerifyOtpDto.ts         # Exports all DTOs
│
├── interfaces/
│   └── user/
│       └── IUser.ts
│
├── middlewares/
│   └── user/
│       └── UserMiddleware.ts
│
├── resources/
│   └── user/
│       └── UserResource.ts
│
├── routes/
│   └── user.routes.ts
│   └── index.ts             # Combines all routes (for cleaner import in app.ts)
│
├── services/
│   └── user/
│       └── UserService.ts
│
├── utils/
│   └── logger.ts            # or helpers, response formatter, etc.
│
├── validators/              # Request validation middleware
│   └── validateRequest.ts   # Generic validator using class-validator
│
├── app.ts                   # Initializes express app and middlewares
├── server.ts                # App entry point (port, logs)
├── index.ts                 # Optional: single import/export hub
