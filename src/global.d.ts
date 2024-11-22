export {};

declare global {
  interface Window {
    app_token: string;
    app_buy_energy_id: string;
    webkit: any;
    cardano: any;
    AppleID: any;
    Telegram: any;
  }
}

declare const window: any;
