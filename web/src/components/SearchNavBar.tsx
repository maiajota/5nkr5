import { Header } from '@/components/Header'
import { ChevronsLeft, Search, SlidersHorizontal } from 'lucide-react'

interface SearchNavBarProps {
  hasGoBack?: boolean
}

export function SearchNavBar({ hasGoBack }: SearchNavBarProps) {
  return (
    <nav className="mb-8">
      <Header hasLogo={true} />
      <div className="flex h-[8vh] w-full items-center justify-center bg-grey-600 text-white-300 shadow-xl">
        {hasGoBack === true ? (
          <a href="/nav" className="px-2">
            <ChevronsLeft />
          </a>
        ) : (
          ''
        )}
        <form action="" className="flex h-full w-[80%] items-center">
          <Search size={14} className="absolute px-2 text-grey-400" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Buscar"
            className="h-[70%] w-full rounded-2xl text-sm placeholder:px-8"
          />
        </form>
        <button className="px-2">
          <SlidersHorizontal />
        </button>
      </div>
    </nav>
  )
}
