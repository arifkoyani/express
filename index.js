import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
const PORT = process.env.PORT || 3030;
app.listen(PORT, (error) => {
  if (error) {
    console.log("error is happens: ", error);
    return;
  }
  console.log("Server is running duo...");
});
