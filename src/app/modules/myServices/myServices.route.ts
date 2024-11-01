import express, { NextFunction, Request, Response } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { MyServiceControllers } from "./myServices.controller";
import { multerUpload } from "../../config/multer.config";
import myServiceValidationSchema from "./bikes.validation";

const router = express.Router();

router.post(
  "/create-service",
  multerUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  MyServiceControllers.createService
);

// router.post('/', auth(UserRole.admin), validateRequest(bikeValidation), MyServiceControllers.createBike);
// router.get('/', MyServiceControllers.getAllBikes);
// router.put('/:id', auth(UserRole.admin), MyServiceControllers.updateBike);
// router.delete('/:id', auth(UserRole.admin), MyServiceControllers.deleteBike);
// router.get('/:bikeId', MyServiceControllers.getSingleBikeById);

export const MyServiceRoutes = router;
