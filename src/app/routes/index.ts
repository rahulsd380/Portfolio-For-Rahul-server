import { Router } from "express";
import { MyServiceRoutes } from "../modules/myServices/myServices.route";
import { EndorsementRoutes } from "../modules/endorsments/endorsment.route";
import { AboutMeRoutes } from "../modules/aboutMe/aboutMe.route";
import { ProfessionalSkillRoutes } from "../modules/professionalSkills/professionalSkills.route";
import { AchievementRoutes } from "../modules/achievements/achievements.route";
import { EducationRoutes } from "../modules/education/education.route";
import { ExperienceRoutes } from "../modules/expericence/experience.route";
import { ProjectRoutes } from "../modules/projects/project.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BlogRoutes } from "../modules/blogs/blogs.route";

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
  {
    path: "/professional-skills",
    route: ProfessionalSkillRoutes,
  },
  {
    path: "/achievements",
    route: AchievementRoutes,
  },
  {
    path: "/education",
    route: EducationRoutes,
  },
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
  {
    path: "/projects",
    route: ProjectRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/blog",
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
