import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "@/ui/organisms/Header";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  ),
});
