import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
// export default defineConfig({
//   plugins: [react()],
//   base: "./",
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })

export default defineConfig({
  base: "./",
  plugins: [react()],
  preview: {
   port: 8080,
   strictPort: true,
  },
  server: {
   port: 8080,
   strictPort: true,
   host: true,
   origin: "http://localhost:8080",
  },
  resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
 });