import express from "express";
import { Account } from "../Models/AccountModel.js";
const router = express.Router();

// get all the accounts
router.post("/", async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      console.log("enter your username and password");
    }
    let username = req.body.username;
    let passowrd = req.body.password;
    const currAccount = await Account.find({ username });
    let data = currAccount.filter((item) => item.password == passowrd);
    res.status(200).json({
      account: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});
router.get("/all", async (req, res) => {
  try {
    let data = await Account.find({});
    res.status(200).json({
      count: data.length,
      accounts: data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// get account  by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let data = await Account.findById(id);
    res.status(200).json({
      account: data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Account.findByIdAndDelete(id);
    res.status(200).send("Account deleted");
  } catch (error) {
    console.log(error);
    res.status(404).send({ message: "Account not found" });
  }
});

export default router;
