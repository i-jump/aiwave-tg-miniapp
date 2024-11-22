import {
  getMiniappAvatar,
  telegramSign,
  telegramTaskReward,
} from "@/api/miniapp";
import "./index.less";
import { observer } from "mobx-react";
import miniAppStore from "@/store/miniapp";
import { useEffect, useState } from "react";
import Countdown from "../countdown";
const linkMap: any = {
  "2": {
    btnName: "Join Now",
    url: "https://t.me/aiwavechain",
    type: "tg",
  },
  "3": {
    btnName: "Follow",
    url: "https://x.com/AIWave_AI",
    type: "x",
  },
  "4": {
    btnName: "Dowland",
    url: "https://static.wdabuliu.com/9802423app.html",
    type: "aiwave",
  },
  "5": {
    btnName: "Link",
    url: "https://www.aiwaves.tech",
    type: "aiwave",
  },
};
const Avatar = observer(() => {
  const [avatarData, setAvatarData] = useState<any>({});
  const getMiniappAvatarFun = async () => {
    const res = await getMiniappAvatar({ telegram_id: miniAppStore.user.id });
    console.log("res", res);
    setAvatarData(res.data);
  };
  useEffect(() => {
    if (miniAppStore.user.id) {
      getMiniappAvatarFun();
    }
  }, [miniAppStore.user.id]);
  const handleTelegramSign = async () => {
    const tg = window.Telegram.WebApp;
    await telegramSign({ telegram_id: miniAppStore.user.id });
    tg.HapticFeedback.notificationOccurred("success");
    getMiniappAvatarFun();
  };
  const handleLink = async (item: any) => {
    if (item.done) {
      return;
    }
    const tg = window.Telegram.WebApp;
    await telegramTaskReward({
      telegram_id: miniAppStore.user.id,
      task_id: item.id,
    });
    getMiniappAvatarFun();
    tg.HapticFeedback.notificationOccurred("success");
    const linkData = linkMap[item.id];
    if (linkData.type === "tg") {
      tg.openTelegramLink(linkData.url);
    } else {
      tg.openLink(linkData.url);
    }
  };
  return (
    <div className="miniapp-avatar">
      <div className="avatar-wrap">
        <img
          src="https://static.wdabuliu.com/a3aefba9-1c12-4387-a4b4-d1f5cb7b16861731572021085.png"
          alt=""
        />
        {avatarData.countdown === "0" ? (
          <div className="avatar-giveme" onClick={handleTelegramSign}></div>
        ) : (
          <div className="avatar-giveme-time">
            <Countdown initialSeconds={Number(avatarData.countdown || 0)} />
          </div>
        )}
      </div>
      <div className="miniapp-link-list">
        <div className="total-wrap">
          <div className="total-user-wrap">
            <img
              className="user-head"
              src={miniAppStore.user.photo_url}
              alt=""
            />
            <div className="user-desc">
              <div className="user-desc-name">
                {miniAppStore.user.first_name +
                  " " +
                  miniAppStore.user.last_name}
              </div>
              <div className="user-desc-text">Start exploring Eva</div>
            </div>
          </div>
          <div className="total-coin-wrap">
            <img
              className="coin-img"
              src="https://static.wdabuliu.com/86818d50-8363-4c9a-aa2e-bf0e6d5fddf91731575470662.png"
              alt=""
            />
            <div className="coin-num">
              {Number(avatarData.balance || 0).toLocaleString("en-US")}
            </div>
          </div>
        </div>
        <div className="miniapp-card-list">
          {avatarData.task_list?.map((item: any) => (
            <div className="miniaoo-card-item" key={item.id}>
              <div className="card-title">{item.title} </div>
              <div className="card-desc">{item.describe}</div>
              <div className="coin-item">
                <img
                  src="https://static.wdabuliu.com/86818d50-8363-4c9a-aa2e-bf0e6d5fddf91731575470662.png"
                  alt=""
                />
                <span className="coin-num">+{item.reward_value}</span>
              </div>
              <div
                className={item.done ? "coin-btn coin-btn-ed" : "coin-btn"}
                onClick={() => handleLink(item)}
              >
                {item.done && (
                  <img
                    src="https://static.wdabuliu.com/56a4963c-9d7d-4726-8edc-b4c2eaa950841731645438699.png"
                    alt=""
                  />
                )}
                {linkMap[item.id].btnName}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 预加载css图片，不做展示 */}
      <div className="preload-images"></div>
      {/* ---------------------------------------- */}
    </div>
  );
});
export default Avatar;
