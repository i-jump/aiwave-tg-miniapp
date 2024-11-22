import { createCountdown } from "@/utils";
import { useEffect, useState } from "react";
import "./index.less";
const CountdownComponent = ({ initialSeconds }: { initialSeconds: number }) => {
  const [timeText, setTimeText] = useState("00:00:00");

  useEffect(() => {
    // 启动倒计时，并传入初始秒数（来自 props）
    const stopCountdown = createCountdown(
      initialSeconds,
      (formattedTime: string) => setTimeText(formattedTime),
      () => console.log("Countdown finished!")
    );

    // 在组件卸载时清除倒计时，防止内存泄漏
    return () => stopCountdown();
  }, [initialSeconds]);

  return <span className="time-text">{timeText}</span>;
};

export default CountdownComponent;
