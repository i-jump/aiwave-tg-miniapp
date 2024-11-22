import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
const TgLayout = lazy(() => import("@/components/telegram/tgLayout"));
const MiniappHome = lazy(() => import("@/pages/mobile/miniappHome"));
const Discovery = lazy(() => import("@/pages/telegram/discovery"));
const TgAvatar = lazy(() => import("@/pages/telegram/avatar"));
const TgPost = lazy(() => import("@/pages/telegram/post"));
const routes: RouteObject[] = [

  {
    path: "/miniapp",
    children: [
      {
        path: "home",
        element: <MiniappHome />,
      },
    ],
  },
  {
    path: "/telegram",
    element: <TgLayout />,
    children: [
      {
        path: "discovery",
        element: <Discovery />,
      },
      {
        path: "avatar",
        element: <TgAvatar />,
      },
      {
        path: "post",
        element: <TgPost />,
      },
    ],
  },
];

export default routes;
