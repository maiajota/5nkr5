export function Hero() {
  return (
    <div className="mb-24">
      <div className="flex items-center justify-center mb-16">
        <img
          src="/images/header-blob.png"
          className="w-full max-h-[40vh]"
          alt=""
        />
        <img
          src="/images/header-image.png"
          className="absolute top-0 max-h-[40vh] rotate-[-18deg]"
          alt=""
        />
      </div>
      <div className="max-w-[80vw] mx-auto">
        <h1 className="text-3xl w-[90%] font-black mb-4 font-title">
          QUEBRE OS RECORDES{' '}
        </h1>
        <p className="w-[90%] mb-12">
          Ande com um sneaker que mostre toda a sua personalidade!
        </p>
        <a href="">
          <button className="bg-red-300 p-4 rounded-lg text-white-100 font-semibold">
            QUERO ENCONTRAR O MEU ESTILO
          </button>
        </a>
      </div>
    </div>
  )
}
