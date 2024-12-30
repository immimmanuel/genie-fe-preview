import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        preserveSymlinks: true,
    },
    build: {
        outDir: "../backend/static",
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: id => {
                    if (id.includes("@fluentui/react-icons")) {
                        return "fluentui-icons";
                    } else if (id.includes("@fluentui/react")) {
                        return "fluentui-react";
                    } else if (id.includes("node_modules")) {
                        return "vendor";
                    }
                }
            }
        },
        target: "esnext"
    },
    server: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8000",
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ""),
            },
            "/chat": {
                target: "http://127.0.0.1:8000",
                changeOrigin: true,
            }
        },
        host: "127.0.0.1",
    }
});
