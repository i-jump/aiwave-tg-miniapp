import { makeAutoObservable } from "mobx";

export interface MiniAppStore {
  user: any;
}

class MiniappStore implements MiniAppStore {
  public user: any = {
    id: 6832278578,
    first_name: "",
    last_name: "Biss",
    language_code: "zh-hans",
    allows_write_to_pm: true,
    photo_url:
      "https://static.wdabuliu.com/3f53961f-4ccf-41df-acd4-4e5df9877c8f1731574526126.png",
  };

  constructor() {
    makeAutoObservable(this);
  }

  public updateUser = (user: any) => {
    this.user = user;
  };
}

const miniAppStore = new MiniappStore();

export default miniAppStore;
