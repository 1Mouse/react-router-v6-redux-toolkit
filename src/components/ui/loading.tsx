import { cn } from "@/lib/utils";

export function Loading({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex h-[80dvh] items-center justify-center", className)}
    >
      <div className='flex h-[160px] w-[160px] items-center justify-center rounded-full bg-white bg-[url("../src/assets/loader.svg")] bg-cover text-[14px] focus-visible:border-0 focus-visible:outline-0'>
        {"please_wait"}
      </div>
    </div>
  );
}
