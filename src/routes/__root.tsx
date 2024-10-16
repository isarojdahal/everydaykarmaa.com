import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "@/ui/organisms/Header";
import { Footer } from "@/ui/organisms/Footer";
import Preloader from "@/ui/organisms/Preloader";

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Preloader />
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  ),
});
