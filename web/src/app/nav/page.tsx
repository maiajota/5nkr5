import { Header } from '@/components/Header'
import { Search, SlidersHorizontal } from 'lucide-react'

export default function NavPage() {
  return (
    <div>
      <nav>
        <Header hasLogo={true} />
        <div className="flex h-[8vh] w-full items-center justify-center gap-4 bg-grey-600 shadow-xl">
          <form action="" className="flex h-full w-[80%] items-center">
            <Search size={14} className="absolute px-2" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Buscar"
              className="h-[70%] w-full rounded-2xl text-sm placeholder:px-8"
            />
          </form>
          <SlidersHorizontal className="text-white-300" />
        </div>
      </nav>
    </div>
  )
}
