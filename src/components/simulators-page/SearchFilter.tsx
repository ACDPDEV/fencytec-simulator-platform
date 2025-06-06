import { IconSearch } from "@tabler/icons-preact";
import type { JSX } from "preact";

function SearchFilter({ getInput, setInput }: {
    getInput: string;
    setInput: (value: string) => void;
}) {
    const handleInput = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
        setInput(e.currentTarget.value);
    };

    return (
        <form className="flex flex-row items-center gap-2 rounded-md bg-stone-900 focus-visible:ring-stone-800 focus-visible:border-stone-700 px-4 py-2">
            <IconSearch className="stroke-stone-400 hover:stroke-white hover:scale-110 transition-all" />
            <input
                placeholder="Buscar simuladores..."
                name="search"
                type="text"
                value={getInput}
                onInput={handleInput}
                className="border-0 rounded-md focus-visible:ring-0 focus-visible:border-0 bg-transparent w-full px-2 py-1 focus:outline-none"
            />
        </form>
    );
}

export { SearchFilter };