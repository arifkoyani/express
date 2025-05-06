import express from "express";
const app = express();
import cors from "cors";
import RRouter from "./routes/user.route.js";
// const WhiteListOrigins = ["http://localhost:5173"];
// const corsOptions = {
//   origin: function (origin, cb) {
//     if (WhiteListOrigins.includes(origin) || !origin) {
//       cb(null, true);
//     } else {
//       new throwerror("not allow");
//     }
//   },
// };

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use("/", RRouter);
export default app;
