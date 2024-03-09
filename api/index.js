import express from "express";
import mongoose from "mongoose";

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/real-state").then(() => {
  console.log("connetced to mongo");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
