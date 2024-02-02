import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2">
      <h1 className="text-lg md:text-2xl items-center font-bold text-gray-900 dark:text-white">
        notmycode blog
      </h1>
      <nav className="flex gap-4 sm:gap-6">
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
