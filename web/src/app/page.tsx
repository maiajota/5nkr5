import { Hero } from '@/components/Hero'
import { Slider } from '@/components/Slider'

export default function Home() {
  return (
    <main>
      <Hero />
      <section>
        <h2 className="font-title font-bold text-xl w-[80vw] mx-auto mb-8">
          SEJA VOCÊ MESMO
        </h2>
      <Slider />
      </section>
    </main>
  )
}
