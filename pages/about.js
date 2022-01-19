import Image from 'next/image';

const About = () => {
  return (
    <section className="border-4 min-w-screen px-10 py-8  text-center sm:grid sm:grid-cols-2">
      <h2 className="text-5xl text-left  font-bold py-3">Who I am</h2>
      <p className="text-3xl font-medium bg-green-400 text-left py-2 sm:col-start-1">Fullstack developer based out of Oakland, CA</p>

      <div className="text-left sm:col-start-1 ">
        <p className="text-lg lg:text-xl py-3">From personal trainer to software developer! I started coding in hopes of building some of the applications I felt were needed by coaches and wellness professionals. I&apos;m currently using Next.js, Tailwind and MongoDB to bring my ideas to life!</p>
        <p className="text-lg lg:text-xl py-3">Having attended an immersive program for fullstack developement. Where I was trained and able to develope my skills further I feel ready to become a member of a professional team.</p>
      </div>
      <img src="/about_me.jpeg"  className="max-w-md sm:relative sm:left-5 sm:bottom-36 sm:pt-10 " alt="Picture of the author"></img>
    </section>
  )
}

export default About;
