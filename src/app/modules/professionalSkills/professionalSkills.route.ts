import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../config/multer.config";
import { ProfessionalSkillControllers } from "./professionalSkills.controller";

const router = express.Router();


router.post(
    "/add-skill",
    multerUpload.single("file"),
    (req: Request, res: Response, next: NextFunction) => {
      req.body = JSON.parse(req.body.data);
      next();
    },
    ProfessionalSkillControllers.addNewSkill
  );


router.get("/", ProfessionalSkillControllers.getAllSkills);
router.delete("/:id", ProfessionalSkillControllers.deleteSkill);


export const ProfessionalSkillRoutes = router;
