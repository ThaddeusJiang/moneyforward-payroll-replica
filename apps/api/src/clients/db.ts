import Surreal from "surrealdb.js";

let db: Surreal;

declare global {
  var __db: Surreal | undefined;
}

if (process.env.NODE_ENV === "production") {
  db = new Surreal("http://127.0.0.1:8000/rpc");
} else {
  if (!global.__db) {
    global.__db = new Surreal("http://127.0.0.1:8000/rpc");
  }
  db = global.__db;
}

const DB = async () => {
  try {
    // Signin as a namespace, database, or root user
    await db.signin({
      user: "root",
      pass: "root",
    });

    // Select a specific namespace / database
    await db.use("test", "test");
    return db;
  } catch (e) {
    console.error("ERROR", e);
    return undefined;
  }
};

DB();

export { db };
