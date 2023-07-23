import { Hero } from '@/components/Hero'
import { ScrollableSection } from '@/components/ScrollableSection'
import { Slider } from '@/components/Slider'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Hero />
      <Slider />
      <ScrollableSection title='NOVIDADES'/>
      <ScrollableSection title='EM DESTAQUE'/>
      <Link href=''>
      <img src="/images/home-banner.png" alt="" className='w-full bg-cover max-h-[540px] mb-12 shadow-xl'/>
      </Link>
      
    </main>
  )
}
