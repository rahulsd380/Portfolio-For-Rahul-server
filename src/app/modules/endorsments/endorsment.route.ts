import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../config/multer.config";
import { EndorsementControllers } from "./endorsment.controller";

const router = express.Router();

router.post(
  "/make-endorsement",
  multerUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  EndorsementControllers.makeEndorsement
);

router.get("/", EndorsementControllers.getAllEndorsements);
router.get("/:id", EndorsementControllers.getSingleEndorsementById);
router.delete("/:id", EndorsementControllers.deleteEndorsement);


export const EndorsementRoutes = router;
