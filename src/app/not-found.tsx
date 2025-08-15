import Link from "next/link";

import { buttonVariants } from "@/components/ui/shadcn/button";
import { cn } from "@/utils/shadcn-utils";

export const metadata = {
  title: "404 – Game Not Found",
  description: "Oops! Someone forgot to code this game.",
};

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 text-center">
      <p className="text-primary relative text-7xl font-bold md:text-9xl">
        404
        {[1, 2, 3].map((number) => (
          <span key={number} className="glitch" aria-hidden="true">
            404
          </span>
        ))}
      </p>
      <h1 className="text-secondary [font-family:var(--font-orbitron)] text-2xl font-bold md:text-3xl">
        GAME NOT FOUND
      </h1>
      <h2 className="font-bold md:text-2xl">Oops! Someone Forgot to Code this Game.</h2>
      <div className="space-x-3">
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: "outline",
              effect: "glow",
              animation: "scale",
              border: "double",
            })
          )}
        >
          Return to Lobby
        </Link>
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: "invert",
              effect: "glow",
              animation: "scale",
              color: "secondary",
              border: "double",
            })
          )}
        >
          Start a New Quest
        </Link>
      </div>
    </div>
  );
}
