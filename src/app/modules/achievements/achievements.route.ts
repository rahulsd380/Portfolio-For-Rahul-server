import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../config/multer.config";
import { AchievementControllers } from "./achievements.controller";

const router = express.Router();

router.post(
  "/add-achievement",
  multerUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  AchievementControllers.addNewAchievement
);

router.get("/", AchievementControllers.getAllAchievements);
router.delete("/:id", AchievementControllers.deleteAchievement);

export const AchievementRoutes = router;
