import { Router } from "express";
import { MyServiceRoutes } from "../modules/myServices/myServices.route";
import { EndorsementRoutes } from "../modules/endorsments/endorsment.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/services",
    route: MyServiceRoutes,
  },
  {
    path: "/endorsements",
    route: EndorsementRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
