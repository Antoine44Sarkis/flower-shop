import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Ensure these paths cover your components
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("daisyui"), // Must be included here
  ],
  // Optional: Add DaisyUI themes if you want
  //   daisyui: {
  //     themes: ["light", "dark", "cupcake"],
  //   },
};

export default config;
