import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../config/multer.config";
import { AboutMeControllers } from "./aboutMe.controller";

const router = express.Router();


router.post(
    "/add-details",
    multerUpload.single("file"),
    (req: Request, res: Response, next: NextFunction) => {
      req.body = JSON.parse(req.body.data);
      next();
    },
    AboutMeControllers.addAboutMeDetails
  );


router.get("/", AboutMeControllers.getAboutMeDetails);

router.put(
  "/:id",
  multerUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    if (req?.body?.data) {
      req.body = JSON.parse(req?.body?.data);
    }
    next();
  },
  AboutMeControllers.updateAboutMeDetails
);


export const AboutMeRoutes = router;
