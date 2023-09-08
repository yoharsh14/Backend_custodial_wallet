import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  publicKey: {
    type: String,
    required: true,
  },
  privateKey: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});
export const Account = mongoose.model("Account", accountSchema);
