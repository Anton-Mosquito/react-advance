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
];

export const privateRoutes: IRoute[] = [
  {path: RouteNames.EVENT },
]