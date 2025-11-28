import clsx, { ClassValue } from "clsx";
import { GithubIcon, Mail } from "lucide-react";
import { DEV_NAME, EMAIL } from "@/constants/data";
import { GITHUB_URL } from "@/data/contact";
import IconLink from "../IconLink";

interface FooterProps {
  className?: ClassValue;
}

const Footer = ({ className }: FooterProps) => (
  <footer
    className={clsx(
      "bg-base-100 min-h-14 w-full grid sm:grid-cols-3 grid-cols-4 justify-center items-center gap-4 p-2",
      className
    )}
  >
    <div className="w-full sm:col-start-2 text-left sm:text-center col-span-3 sm:col-span-1">
      <p className="text-base-content/60">
        © 2025 {DEV_NAME}. Powered by{" "}
        <a
          href="https://daisyui.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-semibold"
          aria-label="Visit DaisyUI website"
        >
          daisyUI
        </a>
      </p>
    </div>
    <div className="flex justify-end items-center w-full gap-4">
      <IconLink
        icon={<GithubIcon size="16" />}
        href={GITHUB_URL}
        aria-label="Visit GitHub profile"
        target="_blank"
        rel="noopener noreferrer"
      />
      <IconLink
        icon={<Mail size="16" />}
        href={`mailto:${EMAIL}`}
        aria-label="Send email"
      />
    </div>
  </footer>
);

export default Footer;
