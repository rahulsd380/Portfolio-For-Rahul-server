import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../config/multer.config";
import { ProjectControllers } from "./project.controller";

const router = express.Router();

router.post(
  "/create-project",
  multerUpload.fields([{ name: "images", maxCount: 20 }, { name: "logos", maxCount: 50 }]),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  ProjectControllers.createProject
);

router.get("/", ProjectControllers.getAllProjects);
router.get("/:id", ProjectControllers.getSingleProject);

router.put(
  "/:id",
  multerUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    if (req?.body?.data) {
      req.body = JSON.parse(req?.body?.data);
    }
    next();
  },
  ProjectControllers.updateProjectDetails
);

export const ProjectRoutes = router;
