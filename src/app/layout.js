import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stream application",
  description: "Create and join parties with your friends!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 mx-auto p-4 container`}
      >
        {children}
      </body>
    </html>
  );
}
