import { useState } from "react";
import "./index.less";
const TgDiscovery = () => {
  const [menuState, setMenuState] = useState(1);
  const menuList = [
    {
      name: "Popular",
      id: 1,
    },
    {
      name: "Friends",
      id: 2,
    },
  ];
  return (
    <div className="tg-discovery-container">
      <div className="discovery-menu">
        {menuList.map((item) => (
          <div
            className={
              menuState === item.id ? "menu-item menu-item-active" : "menu-item"
            }
            key={item.id}
            onClick={() => setMenuState(item.id)}
          >
            {item.name} {item.id === 2 && `(5)`}
          </div>
        ))}
      </div>
      <div className="discovery-list">
        <div className="discovery-item">
          <div className="discovery-content">
            <div className="discovery-head">
              <img
                src="https://static.wdabuliu.com/1ba7a4fa-84e2-4596-aa95-d25ce0724edf1732179454175.png"
                alt=""
              />
            </div>
            <div className="discovery-desc">
              <div className="discovery-text-img">
                <div className="discovery-text">
                  <div className="discovery-user-set">
                    <div className="username">Jenny Chen</div>
                    <div className="discovery-set">
                      <span className="dis-time">33m</span>
                      <img
                        src="https://static.wdabuliu.com/eae9eb56-767b-48b5-886b-c7069fb970fa1732181398916.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-content">
                    Starting a business recently has been so stressful, but it
                    feels like the breakthrough is right around the corner.
                  </div>
                </div>
                <img
                  className="discovery-img"
                  src="https://static.wdabuliu.com/30acbd5c-b0d8-454b-bff3-a23d00cd673b1732181786086.png"
                  alt=""
                />
              </div>
              <div className="discovery-operate">
                <div className="operate-item">
                  <img
                    src="https://static.wdabuliu.com/c3ff4866-cb52-48ef-b1c9-9859095f48ca1732182184809.png"
                    alt=""
                  />
                  <img
                    src="https://static.wdabuliu.com/2625290b-3f55-4995-a024-dde6c98dc4e71732182184806.png"
                    alt=""
                  />
                  <span className="like-num">1100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TgDiscovery;
