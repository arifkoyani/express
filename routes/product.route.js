import { Router } from "express";
import {
  getProducts,
  productAdd,
  productDelete,
  productUpdate,
} from "../controllers/product.controllers.js";
const productsRoute = Router();
productsRoute.route("/get").get(getProducts);
productsRoute.route("/productAdd").patch(productAdd);
productsRoute.route("/productDelete").delete(productDelete);
productsRoute.route("/productUpdate").put(productUpdate);
export default productsRoute;
