import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@rsbuild/core";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginVue } from "@rsbuild/plugin-vue";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
    html: {
        template: path.resolve(__dirname, "./index.html"),
    },
    source: {
        entry: {
            index: path.resolve(__dirname, "./src/main.js"),
        },
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    plugins: [pluginVue(), pluginSass()],
});
