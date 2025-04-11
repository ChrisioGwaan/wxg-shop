import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-zinc-900 dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-black dark:text-white">
          Wxg Shop
        </Link>
        <div className="space-x-4">
          <Link
            href="/products"
            className="text-gray-700 dark:text-gray-300 hover:underline"
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="text-gray-700 dark:text-gray-300 hover:underline"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
