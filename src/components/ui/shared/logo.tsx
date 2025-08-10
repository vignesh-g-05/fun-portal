import Image from "next/image";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type LogoProps = {
  variant?: "full" | "image" | "text";
  className?: string;
};

export default function Page({ variant = "full", className }: LogoProps) {
  return (
    <div
      className={`flex items-center gap-3 ${orbitron.className} ${className} `}
    >
      {variant !== "text" && (
        <Image
          src="/logo/logo.svg"
          alt="fun portal logo: a portal with blue entry"
          height={50}
          width={50}
          className="pointer-events-none"
        />
      )}
      {variant !== "image" && (
        <p className="text-primary text-3xl font-bold">Fun&nbsp;Portal</p>
      )}
    </div>
  );
}
