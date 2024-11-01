import express, { NextFunction, Request, Response } from "express";
import { EducationControllers } from "./education.controller";
import { multerUpload } from "../../config/multer.config";

const router = express.Router();

router.post(
  "/add-degree",
  multerUpload.none(),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  EducationControllers.addNewDegree
);
router.get("/", EducationControllers.getAllDegrees);
router.delete("/:id", EducationControllers.deleteDegree);
router.put(
  "/:id",
  multerUpload.none(),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  EducationControllers.updateDegree
);

export const EducationRoutes = router;
