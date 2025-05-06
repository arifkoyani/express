import express from "express";
const app = express();
import cors from "cors";
import RRouter from "./routes/user.route.js";
import productsRoute from "./routes/product.route.js";
const whiteListOrigins = ["http://localhost:5173"];
const corsOptions = {
  origin: function (origin, cb) {
    if (whiteListOrigins.includes(origin) || !origin) {
      cb(null, true); // error success
    } else {
      cb(new Error("not allowed by cors"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE"],
};

// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", RRouter);
app.use("/products", productsRoute);
export default app;
