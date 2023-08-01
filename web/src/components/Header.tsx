import { Heart, Menu, ShoppingBag, User } from 'lucide-react'

interface HeaderProps {
  hasLogo?: boolean
}

export function Header({ hasLogo }: HeaderProps) {
  return (
    <header
      className={`flex h-[8vh] w-full items-center ${
        hasLogo === true ? 'justify-between' : 'justify-end'
      } bg-grey-600 text-white-300 shadow-xl`}
    >
      {hasLogo === true && (
        <a href="/" className="h-[80%] px-4">
          <img src="/images/logo.png" alt="logo" className="h-full" />
        </a>
      )}
      <nav className="flex gap-8 px-4">
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
        >
          <User />
        </a>
        <a href="/favourite">
          <Heart />
        </a>
        <ShoppingBag />
        <Menu className="sm:hidden" />
      </nav>
    </header>
  )
}
