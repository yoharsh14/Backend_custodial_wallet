import express from "express";
import { Account } from "../Models/AccountModel.js";
import { createAccount } from "../wallet/miniWallet.js";
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    if (req.body.username || req.body.password) {
      console.log("please provide username and passowrd");
    }
    const newAccount = await createAccount();
    const newUserAccount = {
      username: req.body.username,
      password: req.body.password,
      publicKey: newAccount.address,
      privateKey: newAccount.privateKey,
      balance: 0,
    };
    const account = await Account.create(newUserAccount);
    res.status(200).send(account);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
