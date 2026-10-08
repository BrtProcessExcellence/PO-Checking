import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PO Check",
  description: "ระบบตรวจสอบใบสั่งซื้อสินค้ากับข้อมูลปลายทาง",
  icons: {
    icon: "/po-checking-favicon.svg",
    apple: "/po-checking-favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}