import { useContext } from "react";
import { UserContext } from "../context/User";
import PublicRoutes from "./Public";
import PrivateClientRoutes from "./Private/Client";
import PrivateAdminRoutes from "./Private/Admin";

export default function Navigation() {
  const user = useContext(UserContext);

  switch (user) {
    case 0:
      return <PublicRoutes />;
    case 1:
      return <PrivateClientRoutes />;
    case 2:
      return <PrivateAdminRoutes />;

    default:
      return <PublicRoutes />;
  }
}
