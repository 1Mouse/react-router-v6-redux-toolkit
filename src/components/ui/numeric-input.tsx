import { cn } from "@/lib/utils";
import * as React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

export type NumericInputProps = NumericFormatProps;

const NumericInput = React.forwardRef<HTMLInputElement, NumericInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <NumericFormat
        className={cn(
          "block h-[50px] w-full appearance-none rounded border border-slate-300 bg-white px-5 py-3.5 text-slate-500 shadow-none focus:border focus:border-zinc-950 focus:shadow-none focus:outline-none focus:outline-0 focus:ring-0 focus:ring-transparent",
          className
        )}
        getInputRef={ref}
        {...props}
      />
    );
  }
);
NumericInput.displayName = "numeric-input";

export { NumericInput };
