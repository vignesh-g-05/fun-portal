import Image from "next/image";

type LogoProps = {
  variant?: "full" | "image" | "text";
  className?: string;
};

export default function Page({ variant = "full", className }: LogoProps) {
  return (
    <div
      className={`flex items-center gap-3 [font-family:var(--font-orbitron)] ${className}`}
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
