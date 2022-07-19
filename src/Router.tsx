import React, { lazy, Suspense } from "react"
import { BrowserRouter, useRoutes, RouteObject, Outlet } from "react-router-dom"

const Home = lazy(() => import("@/routes/Home"))

const routeObjects: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<p>...loading</p>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]

export const Router = () => {
  const routes = useRoutes(routeObjects)
  return routes
}
