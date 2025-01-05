import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../config/multer.config";
import { BlogControllers } from "./blogs.contoller";

const router = express.Router();

router.post(
  "/create",
  multerUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  BlogControllers.createBlog
);

router.get("/", BlogControllers.getAllBlogs);
router.get("/:id", BlogControllers.getSingleBlog);
router.delete("/:id", BlogControllers.deleteBlog);

router.put(
  "/:id",
  multerUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    if (req?.body?.data) {
      req.body = JSON.parse(req?.body?.data);
    }
    next();
  },
  BlogControllers.updateBlog
);

export const BlogRoutes = router;
