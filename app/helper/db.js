import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "new_database",
    });
    console.log("Connected to database");
    console.log(connection);
  } catch (error) {
    console.log("Error connecting to the database", error);
    console.log(error);
  }
};
