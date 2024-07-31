import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { createEmail, deleteEmail, getAllEmailById } from "../controllers/email.controller.js";

const router = express.Router();

router.route("/create").post(isAuthenticated,createEmail);
router.route("/:id").delete(isAuthenticated,deleteEmail);
router.route("/getallemails").get(isAuthenticated,getAllEmailById);


export default router;