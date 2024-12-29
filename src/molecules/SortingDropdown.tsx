import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

type SortingDropdownProps = {
  sortingMode?: "asc" | "desc";
  setSortingMode: React.Dispatch<
    React.SetStateAction<"asc" | "desc" | undefined>
  >;
};

export function SortingDropdown({
  sortingMode,
  setSortingMode,
}: SortingDropdownProps) {
  const [sortingState, setSortingState] = useState<string>(
    sortingMode ?? "none"
  );
  useEffect(() => {
    setSortingMode(
      sortingState !== "none" ? (sortingState as "asc" | "desc") : undefined
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortingState]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ArrowUpDownIcon className='h-5 w-5' />
      </DropdownMenuTrigger>
      <DropdownMenuContent alignOffset={2} align='end'>
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={sortingState}
          onValueChange={setSortingState}
        >
          <DropdownMenuRadioItem value='asc'>title (Asc)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='desc'>
            title (Desc)
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='none'>
            disable sorting
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
