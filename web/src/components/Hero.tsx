export function Hero() {
  return (
    <div className="mb-24">
      <div className="mb-16 flex items-center justify-center">
        <img
          src="/images/header-blob.png"
          className="max-h-[40vh] w-full"
          alt=""
        />
        <img src="/images/logo.png" className="absolute max-h-[15vh]" alt="" />
      </div>
      <div className="screen-space">
        <h1 className="mb-4 w-[90%] font-title text-3xl font-black">
          QUEBRE OS RECORDES{' '}
        </h1>
        <p className="mb-12 w-[90%]">
          Ande com um sneaker que mostre toda a sua personalidade!
        </p>
        <a href="">
          <button className="rounded-lg bg-grey-300 p-4 font-semibold text-white-100">
            QUERO ENCONTRAR O MEU ESTILO
          </button>
        </a>
      </div>
    </div>
  )
}
