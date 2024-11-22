import request from "../utils/request";

enum Api {
  GetMiniappAvatar = "/note/wallet/telegram/get/avatar",
  TelegramSign = "/note/wallet/telegram/sign",
  TelegramTaskReward = "/note/wallet/telegram/task/reward",
}
export const getMiniappAvatar = (params: any) => {
  return request.get(Api.GetMiniappAvatar, params);
};
export const telegramSign = (params: any) => {
  return request.post(Api.TelegramSign, params);
};
export const telegramTaskReward = (params: any) => {
  return request.post(Api.TelegramTaskReward, params);
};
