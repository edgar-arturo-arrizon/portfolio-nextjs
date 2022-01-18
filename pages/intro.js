import Image from 'next/image'
import introPic from '../public/intro.jpeg'

const Intro = () => {
  return (
    <section className="border-white-500 border-4 px-20 py-8 md:bg-white sm:bg-white flex flex-row  justify-center">
      <div className="relative top-20 mx-7">
        <h1 className="text-5xl">
          Hi, I am <strong>Edgar Arrizon</strong>
        </h1>
        <p className="text-3xl bg-green-400 md:w-[400px] md:inline">Fullstack developer</p>
      </div>
      <img src="intro.jpeg" className="w-80" alt="Picture of the author"></img>
    </section>
  )
}

export default Intro;
