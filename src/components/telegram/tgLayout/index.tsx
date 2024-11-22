import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import "./index.less";
import BtnList from "./btnList";

const Fallback = () => {
  return <div>loadding...</div>;
};

const Layout = () => {
  return (
    <div className="tg-layout-mobile">
      <main className="tg-container">
        <Suspense fallback={<Fallback />}>
          <Outlet />
        </Suspense>
      </main>
      <div className="miniapp-footer">
        <BtnList />
      </div>
    </div>
  );
};

export default Layout;
