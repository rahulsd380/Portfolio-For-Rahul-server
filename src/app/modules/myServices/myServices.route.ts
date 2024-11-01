import express, { NextFunction, Request, Response } from "express";
import { MyServiceControllers } from "./myServices.controller";
import { multerUpload } from "../../config/multer.config";

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

router.get('/', MyServiceControllers.getAllServices);
router.get('/:id', MyServiceControllers.getSingleServiceById);

router.put('/update-service/:id',
  multerUpload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    if(req?.body?.data){
      req.body = JSON.parse(req?.body?.data);
    }
    next();
  },
  MyServiceControllers.updateService);

  
// router.post('/', auth(UserRole.admin), validateRequest(bikeValidation), MyServiceControllers.createBike);
// router.put('/:id', auth(UserRole.admin), MyServiceControllers.updateBike);
// router.delete('/:id', auth(UserRole.admin), MyServiceControllers.deleteBike);

export const MyServiceRoutes = router;
