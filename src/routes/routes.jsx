import { createBrowserRouter } from "react-router-dom";

import {
  Application,
  Atelier,
  Auth,
  Beauty,
  BeautyProfile,
  Clinics,
  Home,
  Login,
  MyTickets,
  NewTicket,
  Packages,
  Profile,
  Shein,
  SheinItemProfile,
  SignUser,
} from "../pages";
import { Suspense } from "react";

import Loading from "../components/loading/Loading.jsx";
import SignUpAsHostinger from "../pages/signAs/SignUpAsHostinger.jsx";

import AccountData from "../pages/profile/accountData/AccountData.jsx";
import Orders from "../pages/profile/orders/Orders.jsx";
import My_Branding from "../pages/profile/myBrand/My_Branding.jsx";


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
        children: [
          {
            path: "accounts",
            element: (
              <Suspense fallback={<Loading />}>
                <AccountData />
              </Suspense>
            ),
          },
          {
            path: "ordersFull",
            element: (
              <Suspense fallback={<Loading />}>
                <Orders />
              </Suspense>
            ),
          },
          {
            path: "ordersCompleted",
            element: (
              <Suspense fallback={<Loading />}>
                <Orders />
              </Suspense>
            ),
          },
          {
            path: "ordersPending",
            element: (
              <Suspense fallback={<Loading />}>
                <Orders />
              </Suspense>
            ),
          },
          {
            path: "ordersCanceld",
            element: (
              <Suspense fallback={<Loading />}>
                <Orders />
              </Suspense>
            ),
          },
          {
            path: "my_Branding",
            element: (
              <Suspense fallback={<Loading />}>
                <My_Branding />
              </Suspense>
            ),
          },
          {
            path: "newTicket",
            element: (
              <Suspense fallback={<Loading />}>
                <NewTicket />
              </Suspense>
            ),
          },
          {
            path: "MyTickets",
            element: (
              <Suspense fallback={<Loading />}>
                <MyTickets />
              </Suspense>
            ),
          },
        ],
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
        path: "/beauty/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <BeautyProfile />
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
        path: "/shein/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <SheinItemProfile />
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
        path: "/clinics",
        element: (
          <Suspense fallback={<Loading />}>
            <Clinics />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <Suspense fallback={<Loading />}>
        <Auth />
      </Suspense>
    ),
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
  {
    path: "/signUpAsHostinger",
    element: (
      <Suspense fallback={<Loading />}>
        <SignUpAsHostinger />
      </Suspense>
    ),
  },
]);
