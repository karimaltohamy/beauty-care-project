import { lazy } from "react";

export const Application = lazy(() => import("./Application"));
export const Home = lazy(() => import("./home/Home"));

export const Profile = lazy(() => import("./profile/Profile"));
export const Beauty = lazy(() => import("./Beauty/Beauty.route"));
export const BeautyProfile = lazy(() =>
  import("./beautyProfile/BeautyProfile.route")
);
export const Atelier = lazy(() => import("./atelier/Atelier.route"));
export const Packages = lazy(() => import("./packages/Packages.route"));
export const Shein = lazy(() => import("./shein/Shein.route"));
export const Clinics = lazy(() => import("./clinics/Clinics.route"));
export const SheinItemProfile = lazy(() =>
  import("./sheinItemProfile/SheinItemProfile.route")
);


export const NewTicket = lazy(() => import("./profile/support/Newticket"));
export const MyTickets = lazy(() => import("./profile/support/MyTickets"));
export const AllServices = lazy(() => import("./profile/brandSettings/AllServices"));
export const AllPackages = lazy(() => import("./profile/brandSettings/AllPackages"));
export const Business_gallery= lazy(() => import("./profile/brandSettings/Business_gallery"));

export const Auth = lazy(() => import("./Auth/Auth"));
export const Login = lazy(() => import("./Auth/login"));
export const SignUser = lazy(() => import("./Auth/SignUser"));


