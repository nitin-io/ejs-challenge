import { Router } from "express";
import { verifySignIn } from "../utils/auth.js";
import {
  fetchImage,
  fetchPostController,
  newPostController,
} from "../controllers/postControllers.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
const router = Router();

// Add new post
router.post(
  "/new",
  verifySignIn,
  upload.single("coverImage"),
  newPostController
);

// Read all posts
router.get("/posts", fetchPostController);

// Read Image
router.get("/image/:pid", fetchImage);

export default router;
