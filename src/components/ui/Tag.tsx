interface TagProps {
  children: string;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
      {children}
    </span>
  );
}
