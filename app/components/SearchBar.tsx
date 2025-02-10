import { redirect } from "next/navigation";

export function SearchBar() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = event.currentTarget.elements.namedItem(
      "q"
    ) as HTMLInputElement;
    if (!query.value) {
      redirect(`/`);
    }
    redirect(`/search/${query.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-2">
        <input
          type="search"
          name="q"
          defaultValue={""}
          placeholder={"Search"}
          className="w-full p-2 text-sm text-gray-700 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
        />
        <button
          type="submit"
          className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </form>
  );
}
