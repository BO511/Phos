import  express  from "express";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ Incompleto */

router.get("/:id", verifyToken);

export default router;