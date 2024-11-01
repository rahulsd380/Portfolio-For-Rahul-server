import { Router } from "express";
import { MyServiceRoutes } from "../modules/myServices/myServices.route";
import { EndorsementRoutes } from "../modules/endorsments/endorsment.route";
import { AboutMeRoutes } from "../modules/aboutMe/aboutMe.route";

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
  {
    path: "/about-me",
    route: AboutMeRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
