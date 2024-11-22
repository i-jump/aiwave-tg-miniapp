import { useEffect, useState } from "react";
import "./index.less";
import BtnList from "./components/btnList";
import Avatar from "./components/avatar";
import Memory from "./components/memory";
import Earn from "./components/earn";
import { loadTelegramScript } from "@/utils";
import miniAppStore from "@/store/miniapp";
const MiniappHome = () => {
  const [activeMenu, setActiveMenu] = useState("1");
  const getTgData = async () => {
    // 加载 Telegram Web App 脚本并初始化
    await loadTelegramScript();
    console.log("log");
    const tg = window.Telegram.WebApp;
    tg.ready(); // 初始化 Web App 对象
    // 获取用户信息
    const user = tg.initDataUnsafe?.user;
    console.log(tg);
    if (user) {
      console.log("用户信息:", user);
      miniAppStore.updateUser(user);
    } else {
      console.error("无法获取用户信息");
    }
    // 设置背景颜色
    tg.setBackgroundColor("#212121");
    tg.setHeaderColor("#212121");
    tg.expand(); // 展开 Web App 到全屏
    tg.disableVerticalSwipes();
  };
  useEffect(() => {
    getTgData();
  }, []);

  return (
    <div className="miniapp-container">
      {activeMenu === "1" && <Avatar />}
      {activeMenu === "2" && <Memory />}
      {activeMenu === "3" && <Earn />}

      <div className="miniapp-footer">
        <BtnList onChange={(menu: string) => setActiveMenu(menu)} />
      </div>
    </div>
  );
};
export default MiniappHome;
