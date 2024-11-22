import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_APP_MODE, VITE_BASE_URL } = loadEnv(mode, process.cwd());
  const isDev = VITE_APP_MODE === "development";

  return {
    plugins: [react(), wasm(), topLevelAwait()],
    css: {
      modules: {
        generateScopedName: "[name]__[local]___[hash:base64:5]",
      },
    },
    base: VITE_BASE_URL,
    server: {
      https: {
        key: fs.readFileSync(".cert/server-key.pem"),
        cert: fs.readFileSync(".cert/server-cert.pem"),
      },
      // Listening on all local IPs
      host: true,
      port: 3001,
      proxy: {
        "/aiwave": {
          target: "http://node.wdabuliu.com/",
          // target: "https://node-us.wdabuliu.com/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/aiwave/, "aiwave"),
        },
        "/note": {
          target: "http://node.wdabuliu.com/",
          // target: "https://node-us.wdabuliu.com/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/note/, "note"),
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      sourcemap: isDev,
    },
  };
});
