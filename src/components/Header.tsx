import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-2 py-2">
      <h1 className="text-md md:text-2xl items-center font-bold text-gray-900 dark:text-white">
        notmycode
      </h1>
      <nav className="flex gap-4 sm:gap-6 text-sm md:text-lg">
        <Link className="text-gray-900 dark:text-white" href="/">
          Home
        </Link>
        <Link className="text-gray-900 dark:text-white" href="/about">
          About
        </Link>
        <Link
          className="text-gray-900 dark:text-white"
          href="https://discord.notmycode.dev/"
        >
          Discord
        </Link>
      </nav>
    </header>
  )
}
