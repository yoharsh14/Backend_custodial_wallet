import express from "express";
import { Account } from "../Models/AccountModel.js";
import { createAccount } from "../wallet/miniWallet.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (req.body.account1 || req.body.account2) {
      console.log("please provide account1 and account2");
    }
    await createAccount(req.body.account1, req.body.account2);
    res.status(200).send("Transaction is done");
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
