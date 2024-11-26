import { IAppRouteInterface } from "../interfaces/RouteInterface/IAppRouteInterface";

import MainLayout from "../views/layout/MainLayout";

export const RouteNavigation: IAppRouteInterface[] = [
  {
    path: "/myportfolio/",
    element: <MainLayout />,
    errorElement: null,
    isHeader: true,
    name: "Home",
  },
];
