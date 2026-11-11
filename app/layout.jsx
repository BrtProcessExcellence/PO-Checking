import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Transport PO Sorting Tool",
  description: "ระบบตรวจสอบใบสั่งซื้อสินค้ากับข้อมูลปลายทาง",
  icons: {
    icon: "/po-checking-favicon.svg",
    apple: "/po-checking-favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <Analytics/>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}