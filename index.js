import express from "express";
import mongoose from "mongoose";
import {} from "dotenv/config";
import registerRoute from "./routes/registerRoute.js";
import loginRoute from "./routes/loginRoute.js";
import transactionRoute from "./routes/transaction.js";
import cors from "cors";
const PORT = process.env.PORT;
const mongoDBURL = process.env.mongoDBURL;
const app = express();
app.use(express.urlencoded({ extended: false }));

// Middleware for parsing request body
app.use(express.json());

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
});
app.use(cors());
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/transaction", transactionRoute);
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => console.log(error));
