import express, { NextFunction, Request, Response } from "express";
import { ExperienceControllers } from "./experience.controller";
import { multerUpload } from "../../config/multer.config";

const router = express.Router();

router.post(
  "/add-experience",
  multerUpload.none(),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  ExperienceControllers.addNewExperience
);

router.get("/", ExperienceControllers.getAllExperiences);

router.delete("/:id", ExperienceControllers.deleteExperience);

router.put(
  "/:id",
  multerUpload.none(),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  ExperienceControllers.updateExperience
);

export const ExperienceRoutes = router;
