import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { NumericInput } from "@/components/ui/numeric-input";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

type PaginationProps = {
  meta: {
    page: number;
    total: number;
    from: number;
    to: number;
    numberOfPages: number;
  };
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export function Pagination({ meta, setPage }: PaginationProps) {
  const [goToPage, setGoToPage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePageChange("goTo");
  };

  const handlePageChange = (mode: "next" | "prev" | "goTo") => {
    setPage(getDestinationPage(mode));
    window.scrollTo(0, 0);
  };

  const getDestinationPage = (mode: "next" | "prev" | "goTo") => {
    if (mode === "next") return meta.page + 1;
    if (mode === "prev") return meta.page - 1;
    return +goToPage!;
  };

  useEffect(() => {
    setGoToPage("");
  }, [meta.total]);

  return (
    <div className='my-8 mb-10 flex flex-wrap items-center justify-end gap-4'>
      <Button
        aria-label='previous page'
        type='button'
        onClick={() => handlePageChange("prev")}
        disabled={meta.page === 1}
        variant='outline'
        className='min-w-0 rounded-full'
      >
        <MoveLeftIcon />
      </Button>
      <span>
        Page {meta.page} of {meta.numberOfPages}
      </span>
      <Button
        aria-label='next page'
        type='button'
        onClick={() => handlePageChange("next")}
        disabled={meta.page === meta.numberOfPages}
        variant='outline'
        className='min-w-0 rounded-full'
      >
        <MoveRightIcon />
      </Button>
      <form className='flex items-center max-sm:mb-2' onSubmit={handleSubmit}>
        <Label>Go to page</Label>
        <NumericInput
          value={goToPage}
          aria-label='enter page number to go to'
          decimalScale={0}
          allowNegative={false}
          inputMode='numeric'
          autoComplete='off'
          className='mx-2 h-10 w-24 px-3'
          isAllowed={values => {
            const { floatValue } = values;
            console.log(values);
            // to handle the case of empty input
            if (floatValue === undefined) return true;
            return floatValue <= meta.numberOfPages && floatValue > 0;
          }}
          onChange={e => setGoToPage(e.target.value)}
        />
        <Button type='submit' disabled={!goToPage} aria-labelledby='go-to-page'>
          Go
        </Button>
      </form>
    </div>
  );
}
