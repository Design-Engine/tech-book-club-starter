import localFont from "next/font/local";

export const Inter = localFont({
  src: "../../public/fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "300 400 500 600 700",
});

export const MartianMono = localFont({
  src: "../../public/fonts/MartianMono-VF.woff2",
  variable: "--font-martian-mono",
  weight: "100 200 300 400 500 600 700 800",
});
