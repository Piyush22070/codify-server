import { problem } from "../controllers/problem.controller.js";
import { Router } from "express";

const problemRouter = Router()
problemRouter.route("/:index").get(problem)

export default problemRouter