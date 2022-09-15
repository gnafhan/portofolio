import foto from '../foto.png'

const Home = () => {
    return (
    <section id="home" className="pt-36">
    <div className="container">
      <div className="flex flex-wrap">
        <div className="w-full self-center px-4 lg:w-1/2">
          <h1 className="text-base font-semibold text-primary md:text-xl">Halo Semua👋, saya<span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl ">Ghifari Nafhan</span></h1>
          <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Student & <span className="text-dark">Back-End Developer</span></h2>
          <p className="font-medium text-secondary mb-10 leading-relaxed">Duduk di kelas 12 dan sedang mempelajari <span className="text-dark font-bold">programming!</span></p>
          <a href="/" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya</a>
        </div>  
        <div className="w-full self-end px-4 lg:w-1/2">
          <div className="mt-10 relative lg:mt-0 lg:right-0">
            <img src={foto} alt="Nafhan" className="max-w-full mx-auto" />
            <span className="absolute -bottom-9 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
              <svg className="scale-100 lg:scale-75" width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#22d3ee" d="M41.1,-67.2C50.8,-57.8,54.5,-42.2,58.1,-28.3C61.7,-14.4,65.1,-2.3,67,12.2C68.9,26.7,69.3,43.5,60.9,52.4C52.6,61.3,35.6,62.3,19.9,66.3C4.1,70.2,-10.3,77.2,-24.5,76.3C-38.7,75.4,-52.8,66.6,-64.5,54.9C-76.3,43.2,-85.8,28.4,-84.8,14.2C-83.7,-0.1,-72.2,-13.9,-63.5,-27.4C-54.8,-40.9,-49,-54,-38.9,-63.2C-28.8,-72.4,-14.4,-77.7,0.7,-78.7C15.7,-79.7,31.4,-76.6,41.1,-67.2Z" transform="translate(100 100)" />
              </svg>
            </span>
          </div>
        </div> 
      </div>
      
    </div>
  </section>

    )
}

export default Home;