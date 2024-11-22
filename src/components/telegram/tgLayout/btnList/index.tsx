import { useState } from "react";
import "./index.less";
import { useNavigate } from "react-router-dom";
const BtnList = () => {
  const [state, setState] = useState("1");
  const navigate = useNavigate();
  const btnData = [
    {
      path: "discovery",
      id: "1",
      icon: "https://static.wdabuliu.com/b2506713-b1ff-40cb-8994-3109984c879f1732175422003.png",
      activeIcon:
        "https://static.wdabuliu.com/1a2a950c-bc6e-4aa5-ab77-9200dce654091732175422004.png",
    },
    {
      path: "post",
      id: "2",
      icon: "https://static.wdabuliu.com/0a53af82-4a00-419d-b0a0-05a2dc64cef21732175519755.png",
      activeIcon:
        "https://static.wdabuliu.com/0a53af82-4a00-419d-b0a0-05a2dc64cef21732175519755.png",
    },
    {
      path: "avatar",
      id: "3",
      icon: "https://static.wdabuliu.com/88f9d27d-24b5-427f-a359-4ebf13001d271732175519758.png",
      activeIcon:
        "https://static.wdabuliu.com/d359c4bd-0aeb-4da3-affb-21065d19534c1732175519755.png",
    },
  ];
  const impactOccurred = () => {
    const tg = window.Telegram?.WebApp;
    tg?.HapticFeedback.selectionChanged();
  };
  return btnData.map((item) => (
    <div
      className="miniapp-btn-list"
      key={item.id}
      onClick={() => {
        impactOccurred();
        setState(item.id);
        navigate(item.path);
      }}
    >
      <img
        className="btn-list-img"
        src={item.id === state ? item.activeIcon : item.icon}
        alt=""
      />
      {/* <div
        className={
          item.id === state
            ? "btn-list-text btn-list-text-active"
            : "btn-list-text"
        }
      >
        {item.name}
      </div> */}
    </div>
  ));
};
export default BtnList;
