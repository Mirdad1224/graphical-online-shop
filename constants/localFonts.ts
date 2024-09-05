import localFont from "next/font/local";

const iransansFont = localFont({
  src: [
    {
      path: "../public/fonts/IranSans/IRANSansWeb.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../public/fonts/IranSans/IRANSansWeb_UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/IranSans/IRANSansWeb_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/IranSans/IRANSansWeb_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/IranSans/IRANSansWeb_Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../public/fonts/IranSans/IRANSansWeb_Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
  style: "normal",
  display: "block",
});

export default iransansFont;
