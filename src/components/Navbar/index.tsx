"use client";
import { HamburgerMenu, useThemeChange } from "amvasdev-ui";
import clsx, { ClassValue } from "clsx";
import { Brush, Menu, Check } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCookies } from "react-cookie";
import { THEME_COOKIE } from "@/constants/cookies";
import { THEME_LIST } from "@/constants/themes";

interface NavbarProps {
  className?: ClassValue;
}

interface NavItem {
  label: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export default function Navbar({ className }: NavbarProps) {
  const { changeTheme } = useThemeChange();
  const [cookie, setCookie] = useCookies([THEME_COOKIE]);
  const pathname = usePathname();

  const handleThemeChange = (theme: string) => {
    changeTheme(theme);
    setCookie(THEME_COOKIE, theme);
  };

  const isHomePage = pathname === "/";

  return (
    <header className={clsx("navbar bg-base-100 shadow-lg", className)}>
      <div className="navbar-start">
        {/* Left HamburgerMenu for Navigation */}
        <HamburgerMenu icon={Menu}>
          <ul className="flex flex-col gap-2 min-w-64 max-w-full">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="w-full"
                  aria-label={`Navigate to ${item.label} page`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </HamburgerMenu>
      </div>
      {!isHomePage ? (
        <div className="navbar-center">
          {/* Centered Brand Text */}
          <Link
            href="/"
            className="btn btn-ghost rounded-field text-xl font-bold"
            aria-label="Navigate to home page"
          >
            Amaury Vasquez
          </Link>
        </div>
      ) : null}

      <div className="navbar-end">
        {/* Right HamburgerMenu for Theme Selector */}
        <HamburgerMenu icon={Brush} position="right">
          <ul className="flex flex-col gap-2 min-w-64 max-w-full max-h-80 overflow-y-auto">
            <li className="menu-title text-xs">
              <span>Theme</span>
            </li>
            {THEME_LIST.map((theme) => (
              <li key={theme}>
                <button
                  id={`theme-selector-${theme}`}
                  className="gap-3 px-2 [&_svg]:visible"
                  onClick={() => handleThemeChange(theme)}
                  aria-label={`Select ${theme} theme`}
                >
                  <div
                    data-theme={theme}
                    className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
                  >
                    <span className="bg-base-content size-1 rounded-full" />
                    <span className="bg-primary size-1 rounded-full" />
                    <span className="bg-secondary size-1 rounded-full" />
                    <span className="bg-accent size-1 rounded-full" />
                  </div>
                  <div className="w-32 truncate">{theme}</div>
                  {cookie.theme === theme ? (
                    <Check className="h-3 w-3 shrink-0" />
                  ) : null}
                </button>
              </li>
            ))}
          </ul>
        </HamburgerMenu>
      </div>
    </header>
  );
}
