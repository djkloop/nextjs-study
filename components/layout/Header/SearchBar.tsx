export function SearchBar() {
  return (
    <div className="flex-1 max-w-xl">
      <input
        type="search"
        placeholder="大秦打更人"
        className="w-full bg-gray-100 dark:bg-black/20 px-4 py-1.5 rounded-full text-sm 
          text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
          focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-white/30"
      />
    </div>
  );
} 