export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <div className="flex space-x-2">
      {categories.map((category) => (
        <span
          key={category}
          className="bg-blue-100 border border-2 border-black rounded-full px-2 py-2 text-sm dark:text-black dark:bg-white"
        >
          {category}
        </span>
      ))}
    </div>
  );
}

