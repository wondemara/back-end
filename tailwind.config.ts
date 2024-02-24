import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0dWRlbnQlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D')",
        contact:
          "url('https://plus.unsplash.com/premium_photo-1661775481040-032f49ba34aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3R1ZGVudCUyMGhvdXNlfGVufDB8fDB8fHww')",
        biens:
          "url('https://images.unsplash.com/photo-1555962414-5c1a20592432?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnQlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D')",
      },
      colors: {
        primary: "#9a3412",
        secondary: "#ea580c",
      },
    },
  },
  plugins: [],
};
export default config;
