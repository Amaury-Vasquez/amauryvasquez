"use client";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { Cookies, CookiesProvider } from "react-cookie";
import PostHogProvider from "@/context/PostHogProvider";

interface ProviderProps {
  children: React.ReactNode;
  cookieList?: RequestCookie[];
}

export default function Provider({ children, cookieList }: ProviderProps) {
  const cookies = new Cookies(cookieList);

  return (
    <CookiesProvider cookies={cookies}>
      <PostHogProvider>{children}</PostHogProvider>
    </CookiesProvider>
  );
}
