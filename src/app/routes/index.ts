import { Router } from "express";
import { MyServiceRoutes } from "../modules/myServices/myServices.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/services",
    route: MyServiceRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
