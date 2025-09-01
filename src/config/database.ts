import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME || "mydb",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: process.env.NODE_ENV === "development" ? console.log : false,
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log(`Successfully connected to MySQL (${process.env.NODE_ENV?.toUpperCase()})`);
  } catch (error) {
    console.error(`Failed to connect to MySQL (${process.env.NODE_ENV?.toUpperCase()})`);
    console.error("Error details:", error);

    if (error instanceof Error) {
      console.error(error.stack);
    }

    process.exit(1);
  }
}

// Graceful shutdown
async function shutdown() {
  console.log("Shutting down gracefully...");
  await sequelize.close();
  console.log("Disconnected from MySQL");
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

export default connectDB;
export { sequelize };
