import Image from 'next/image';

const About = () => {
  return (
    <section className="min-w-screen px-10 py-8 text-center sm:grid sm:grid-cols-2">
      <h2 className="text-5xl text-left font-bold py-3">Who I am</h2>
      <p className="text-3xl font-medium bg-green-400 text-left py-2 sm:col-start-1">Fullstack developer based out of Oakland, CA</p>

      <div className="text-left sm:col-start-1 pr-2 ">
        <p className="text-lg lg:text-xl py-3">From personal trainer to software developer! I started coding in hopes of building some of the applications I felt were needed by coaches and wellness professionals. I attended Galvanizes immersive program for fullstack developement. Where I was trained and able to further develope my skills. </p>
        <p className="text-lg lg:text-xl py-3"> I am passionate about contributing to open source projects, empowering others, teaching and community building. I would love to collaborate with you on making a positive difference in one of those sectors!</p>
      </div>
      <img src="/about_me.jpeg" className="rounded-lg pl-2  max-w-md sm:relative  sm:bottom-36 sm:pt-10 w-[90%]" alt="Picture of the author"></img>
    </section>
  )
}

export default About;
