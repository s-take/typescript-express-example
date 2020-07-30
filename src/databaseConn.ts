import { createConnection, getConnectionOptions, getConnection } from "typeorm";

export default async () => {
// 環境毎に分けるとき
//   let name = "default";
//   if (process.env.NODE_ENV === "test") {
//     name = process.env.NODE_ENV;
//   }

//   const connectionOptions = await getConnectionOptions(name);
//   await createConnection({ ...connectionOptions, name: "default" });

// sample
  const connectionOptions = await getConnectionOptions();
  await createConnection(connectionOptions);
};

export const closeDatabaseConn = async () => {
  getConnection().close();
};