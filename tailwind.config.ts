const plugin = require("tailwindcss/plugin");

const createTypography = (type: any) => {
  const baseStyles = {
    lineHeight: "145%",
    letterSpacing: "-0.01em",
  };

  const sizes = {
    bold: [
      "30",
      "27",
      "25",
      "24",
      "22",
      "20",
      "18",
      "16",
      "15",
      "14",
      "13",
      "12",
      "11",
      "10",
    ],
    medium: [
      "30",
      "27",
      "25",
      "24",
      "22",
      "20",
      "18",
      "16",
      "15",
      "14",
      "13",
      "12",
      "11",
      "10",
    ],
    regular: [
      "30",
      "27",
      "25",
      "24",
      "22",
      "20",
      "18",
      "16",
      "15",
      "14",
      "13",
      "12",
      "11",
      "10",
    ],
    light: ["30", "27", "25", "24", "22", "20"],
  };

  const weights = {
    bold: "700",
    medium: "500",
    regular: "400",
    light: "300",
  };

  return Object.fromEntries(
    (sizes as Record<any, any>)[type].map((size: any) => [
      `${size}-${type}`,
      [
        `${size}px`,
        { ...baseStyles, fontWeight: (weights as Record<any, any>)[type] },
      ],
    ])
  );
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/grinda/**/*.{jsx,tsx,ts,mdx}",
  ],
  safelist: [
    {
      pattern:
        /bg-(pink|green|red|indigo|beige|light-green|aqua|blue)-(95|70|60|50|40|30|20|10)/,
    },
    {
      pattern: /text-(red|indigo)-(95)/,
    },
  ],
  theme: {
    borderRadius: {
      DEFAULT: "0.25rem",
      none: "0",
      xs: "0.125rem",
      sm: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
    },
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        22: "5.5rem",
        23: "5.75rem",
        30: "7.5rem",
        "pc-form": "430px",
        pc: "1200px",
      },
      maxWidth: ({ theme }: any) => ({
        ...theme("spacing"),
      }),
      minWidth: ({ theme }: any) => ({
        ...theme("spacing"),
      }),
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      transitionDuration: {
        240: "240ms",
        400: "400ms",
        600: "600ms",
      },
      fontSize: {
        ...createTypography("bold"),
        ...createTypography("regular"),
        ...createTypography("medium"),
        ...createTypography("light"),
      },
      zIndex: {
        1: "1",
        modal: "995",
        full: "5000",
      },
    },
    screens: {
      sm: {
        max: "360px",
      },
      md: {
        max: "768px",
      },
      lg: {
        min: "768px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: any) {
      addUtilities(
        {
          ".scrollbar-hide": {
            /* IE and Edge */
            "-ms-overflow-style": "none",

            /* Firefox */
            "scrollbar-width": "none",

            /* Safari and Chrome */
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },

          ".scrollbar-default": {
            /* IE and Edge */
            "-ms-overflow-style": "auto",

            /* Firefox */
            "scrollbar-width": "auto",

            /* Safari and Chrome */
            "&::-webkit-scrollbar": {
              display: "block",
            },
          },
          ".my-safe": {
            marginTop: "env(safe-area-inset-top)",
            marginBottom: "env(safe-area-inset-bottom)",
          },
          ".mb-safe": {
            marginBottom: "env(safe-area-inset-bottom)",
          },
          ".py-safe": {
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          },
          ".pb-safe": {
            paddingBottom: "env(safe-area-inset-bottom)",
          },
          ".bottom-safe": {
            bottom: "env(safe-area-inset-bottom)",
          },
          ".min-h-screen-safe": {
            minHeight: [
              "calc(100vh - (env(safe-area-inset-top) + env(safe-area-inset-bottom)))",
              "-webkit-fill-available",
            ],
          },
          ".h-screen-safe": {
            height: [
              "calc(100vh - (env(safe-area-inset-top) + env(safe-area-inset-bottom)))",
              "-webkit-fill-available",
            ],
          },
        },
        ["responsive"]
      );
    }),
  ],
};
