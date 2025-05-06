import { Router } from "express";
import {
  getProducts,
  productAdd,
  productDelete,
  productUpdate,
} from "../controllers/product.controllers.js";
const productsRoute = Router();
productsRoute.route("/get").get(getProducts);
productsRoute.route("/productAdd").get(productAdd);
productsRoute.route("/productDelete").get(productDelete);
productsRoute.route("/productUpdate").get(productUpdate);
export default productsRoute;
