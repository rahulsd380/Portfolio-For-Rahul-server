"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const myServices_route_1 = require("../modules/myServices/myServices.route");
const endorsment_route_1 = require("../modules/endorsments/endorsment.route");
const aboutMe_route_1 = require("../modules/aboutMe/aboutMe.route");
const professionalSkills_route_1 = require("../modules/professionalSkills/professionalSkills.route");
const achievements_route_1 = require("../modules/achievements/achievements.route");
const education_route_1 = require("../modules/education/education.route");
const experience_route_1 = require("../modules/expericence/experience.route");
const project_route_1 = require("../modules/projects/project.route");
const auth_route_1 = require("../modules/auth/auth.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/services",
        route: myServices_route_1.MyServiceRoutes,
    },
    {
        path: "/endorsements",
        route: endorsment_route_1.EndorsementRoutes,
    },
    {
        path: "/about-me",
        route: aboutMe_route_1.AboutMeRoutes,
    },
    {
        path: "/professional-skills",
        route: professionalSkills_route_1.ProfessionalSkillRoutes,
    },
    {
        path: "/achievements",
        route: achievements_route_1.AchievementRoutes,
    },
    {
        path: "/education",
        route: education_route_1.EducationRoutes,
    },
    {
        path: "/experience",
        route: experience_route_1.ExperienceRoutes,
    },
    {
        path: "/projects",
        route: project_route_1.ProjectRoutes,
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
