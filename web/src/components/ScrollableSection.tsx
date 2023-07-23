interface ScrollableSectionProps {
    title: string
}

const newsImages = [
    "/images/products/clear_jade.png", 
    "/images/products/forest_green.png", 
    "/images/products/mica_green.png", 
    "/images/products/panda.png"
]

const trendsImages = [
    "/images/products/pure_platinum.png", 
    "/images/products/rose_whisper.png", 
    "/images/products/sundial.png", 
    "/images/products/university_blue.png"
]

export function ScrollableSection({ title }: ScrollableSectionProps){
    return(
        <section className="mb-12">
        <h2 className='font-title font-bold text-lg w-[80vw] mx-auto mb-8'>{title}</h2>
        <div className='flex gap-4 overflow-x-auto home-scroll-section'>
            {title == 'NOVIDADES' ?
            newsImages.map((imageURL) =>  //NOVIDADES
                <img src={imageURL} alt="" className='w-[40%] max-w-[160px] bg-grey-100'/>
            ) :
            trendsImages.map((imageURL) => //EM DESTAQUE
                <img src={imageURL} alt="" className='w-[40%] max-w-[160px] bg-grey-100'/>
            )
            }
          </div>
      </section>

    )
}