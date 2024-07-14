import { lazy } from "react";

export const Application = lazy(() => import("./Application"));
export const Home = lazy(() => import("./home/Home"));
export const Login = lazy(() => import("./login/Login"));
export const Profile = lazy(() => import("./profile/Profile"));
export const Beauty = lazy(() => import("./Beauty/Beauty.route"));
export const Atelier = lazy(() => import("./atelier/Atelier.route"));
export const Packages = lazy(() => import("./packages/Packages.route"));
export const Shein = lazy(() => import("./shein/Shein.route"));
