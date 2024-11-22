import { useRoutes } from "react-router-dom";
import pcRoutes from "./pc/routes";
import mobileRoutes from "./mobile/routes";
import { isMobile } from "@/utils";
const routes = isMobile() ? mobileRoutes : pcRoutes;
const Router = () => {
  const element = useRoutes(routes);
  return element;
};

export default Router;
