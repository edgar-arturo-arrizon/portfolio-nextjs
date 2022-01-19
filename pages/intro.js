import Image from 'next/image'
import introPic from '../public/intro.jpeg'

const Intro = () => {
  return (
    <section className="px-20 py-8 flex flex-row justify-center">
      <div className="relative ">
        <h1 className="text-5xl">
          Hi, I am <strong>Edgar Arrizon</strong>
        </h1>
        <p className="text-3xl bg-green-400 md:w-[400px] md:inline">Fullstack developer</p>
      </div>
      <img src="/intro.jpeg"  className=" object-contain w-80  rounded-full" alt="Picture of the author"></img>
    </section>
  )
}

export default Intro;
