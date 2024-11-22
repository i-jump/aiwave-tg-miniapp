import { useState } from "react";
import "./index.less";
const BtnList = ({ onChange }: { onChange: any }) => {
  const [state, setState] = useState("1");
  const btnData = [
    {
      name: "Avatar",
      id: "1",
      icon: "https://static.wdabuliu.com/8a537694-bedb-430b-8179-eba8207b99361731645185062.png",
      activeIcon:
        "https://static.wdabuliu.com/4b412958-1ab4-4cc0-9f67-473ff001726e1731570634449.png",
    },
    {
      name: "Memory",
      id: "2",
      icon: "https://static.wdabuliu.com/8ffc9d2b-59e6-4e9c-89cc-d83d2e6e9b421731571166830.png",
      activeIcon:
        "https://static.wdabuliu.com/00ca02b3-f42c-4c50-86af-9e3f9478a0081731645185063.png",
    },
    {
      name: "Earn",
      id: "3",
      icon: "https://static.wdabuliu.com/064b2dd5-6d19-4c11-a0f3-683f7d4774ad1731571166829.png",
      activeIcon:
        "https://static.wdabuliu.com/6a40b321-11f1-49b7-8f57-a573c03cde891731645185063.png",
    },
  ];
  const impactOccurred = () => {
    const tg = window.Telegram.WebApp;
    tg.HapticFeedback.selectionChanged();
  };
  return btnData.map((item) => (
    <div
      className="miniapp-btn-list"
      key={item.id}
      onClick={() => {
        impactOccurred();
        setState(item.id);
        onChange(item.id);
      }}
    >
      <img
        className="btn-list-img"
        src={item.id === state ? item.activeIcon : item.icon}
        alt=""
      />
      <div
        className={
          item.id === state
            ? "btn-list-text btn-list-text-active"
            : "btn-list-text"
        }
      >
        {item.name}
      </div>
    </div>
  ));
};
export default BtnList;
