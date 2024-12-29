import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type SearchBarProps = {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export function SearchBar({ setKeyword, setPage }: SearchBarProps) {
  const [query, setQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setKeyword(query);
  };

  return (
    <form onSubmit={handleSearch} className='mx-auto w-full max-w-3xl'>
      <div className='flex w-full items-center rounded-full bg-white ps-4 shadow-lg'>
        <div className='text-zinc-400'>
          <Search className='h-5 w-5' />
        </div>
        <Input
          type='text'
          placeholder='Search By Title...'
          value={query}
          onChange={e => setQuery(e.target.value)}
          className='h-14 rounded-full border-0 text-xl placeholder:text-zinc-500 focus-visible:ring-0 focus-visible:ring-offset-0 max-sm:text-lg'
        />
        <div>
          <Button
            type='submit'
            size='lg'
            className='h-14 rounded-full bg-zinc-900 px-8 text-lg font-medium text-white hover:bg-zinc-800 max-sm:text-base'
          >
            <Search className='mr-2 h-5 w-5' />
            SEARCH
          </Button>
        </div>
      </div>
    </form>
  );
}
