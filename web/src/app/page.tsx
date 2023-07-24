import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Slider } from '@/components/Slider'
import { ScrollableSection } from '@/components/ScrollableSection'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Slider />
      <ScrollableSection title="NOVIDADES" />
      <ScrollableSection title="EM DESTAQUE" />
      <Link href="">
        <img
          src="/images/home-banner.png"
          alt=""
          className="mb-12 max-h-[540px] w-full bg-cover shadow-xl"
        />
      </Link>
      <section className="screen-space mb-12 font-title font-bold">
        <h2 className="mb-8 text-2xl">ESTILOS</h2>
        <nav className="flex flex-col gap-6 text-xl">
          <a href="" className="sections-link">
            CASUAL
          </a>
          <a href="" className="sections-link">
            ESPORTIVO
          </a>
          <a href="" className="sections-link">
            BASQUETEIRA
          </a>
        </nav>
      </section>
      <Footer />
    </main>
  )
}
