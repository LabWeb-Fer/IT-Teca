// apps/backend/src/scripts/test-db.ts
import { sequelize } from '../db.js';
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log(' Conexión a la base de datos exitosa');
        process.exit(0);
    }
    catch (error) {
        console.error(' Error al conectar a la base de datos:', error);
        process.exit(1);
    }
}
testConnection();
//# sourceMappingURL=test-db.js.map