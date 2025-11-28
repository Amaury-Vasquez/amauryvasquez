import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "amvasdev-ui/dist/index.css";
import "./globals.css";
import { cookies } from "next/headers";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { THEME_COOKIE } from "@/constants/cookies";
import { BASE_DESCRIPTION, BASE_TITLE } from "@/constants/metadata";
import Provider from "@/context/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: BASE_TITLE,
  description: BASE_DESCRIPTION,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStorage = await cookies();
  const userCookies = cookieStorage.getAll();
  const themeCookie = cookieStorage.get(THEME_COOKIE)?.value;

  return (
    <Provider cookieList={userCookies}>
      <html lang="en" data-theme={themeCookie}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar className="fixed top-0 z-50" />
          <main className="mt-16 mb-14">{children}</main>
          <Footer className="fixed bottom-0 z-50 w-full" />
        </body>
      </html>
    </Provider>
  );
}
