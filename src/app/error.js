"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error caught on the frontend:", error);
  }, [error]);

  return (
    <>
      <div className="relative overflow-hidden py-24 lg:py-32">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r dark:from-black/50 dark:to-black from-slate-100/50 to-slate-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem]  from-slate-200/50 to-slate-200 dark:from-[#1f1f1f] dark:to-slate-900" />
        </div>
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="container mx-auto py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="text-muted-foreground">Oops! We hit a snag...</p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Something Went Wrong
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-muted-foreground">
                  An unexpected error occurred. The error gremlin got a bit too
                  excited. Don't worry, we're on it!
                </p>
                <p className="mt-2 text-sm text-muted-foreground italic">
                  Error details: {error?.message || "Unknown error"}
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <Button size={"lg"} onClick={reset}>
                  Try Again
                </Button>
                <Button size={"lg"} variant="bordered">
                  <Link
                    href="/"
                    className="size-full flex justify-center items-center text-center"
                  >
                    Go Home
                  </Link>
                </Button>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}