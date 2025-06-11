import { Router } from "express";
import { solve } from "../controllers/solve/solve.controllers.js";

const solveRouter = Router()
solveRouter.route("/solve").post(solve)


export default solveRouter