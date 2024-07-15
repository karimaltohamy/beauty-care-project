import { createBrowserRouter } from "react-router-dom";

import {
  Application,
  Atelier,
  Beauty,
  Home,
  Login,
  Packages,
  Profile,
  Shein,
} from "../pages";

import Loading from "../components/loading/Loading.jsx";
import { Suspense } from "react";
import SignUpAsHostinger from "../pages/signAs/SignUpAsHostinger.jsx";
import SignUser from "../pages/signUser/SignUser.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Application />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/beauty",
        element: (
          <Suspense fallback={<Loading />}>
            <Beauty />
          </Suspense>
        ),
      },
      {
        path: "/packages",
        element: (
          <Suspense fallback={<Loading />}>
            <Packages />
          </Suspense>
        ),
      },
      {
        path: "/shein",
        element: (
          <Suspense fallback={<Loading />}>
            <Shein />
          </Suspense>
        ),
      },
      {
        path: "/atelier",
        element: (
          <Suspense fallback={<Loading />}>
            <Atelier />
          </Suspense>
        ),
      },
      {
        path: "/signUpAsHostinger",
        element: (
          <Suspense fallback={<Loading />}>
            <SignUpAsHostinger />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signUpUser",
    element: (
      <Suspense fallback={<Loading />}>
        <SignUser />
      </Suspense>
    ),
  },
]);
