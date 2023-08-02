import React from "react";

export interface IRoute {
  path: string;
}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/'
}

export const publicRoutes: IRoute[] = [
  {path: RouteNames.LOGIN },
  //{ path: '*', element: <Navigate to=RouteNames.LOGIN replace />}
];

export const privateRoutes: IRoute[] = [
  {path: RouteNames.EVENT },
  //{ path: '*', element: <Navigate to=RouteNames.EVENT replace />}
]