import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@rsbuild/core";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginVue } from "@rsbuild/plugin-vue";
import AutoImport from "unplugin-auto-import/rspack";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/rspack";

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
    tools: {
        rspack: {
            plugins: [
                AutoImport({
                    dts: "./src/auto-import.d.ts",
                    resolvers: [
                        ElementPlusResolver({
                            importStyle: "sass",
                        }),
                    ],
                }),
                Components({
                    dts: "./src/components.d.ts",
                    resolvers: [
                        ElementPlusResolver({
                            importStyle: "sass",
                        }),
                    ],
                }),
            ],
        },
    },
    plugins: [pluginVue(), pluginSass()],
});
