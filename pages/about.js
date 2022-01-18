
const About = () => {
  return (
    <section className="border-4 min-w-screen px-10 py-8  text-center sm:grid sm:grid-cols-2">
      <h2 className="text-5xl text-left  font-bold py-3">Who I am</h2>
      <p className="text-3xl font-medium bg-green-400 text-left py-2 sm:col-start-1">Fullstack developer based out of Oakland, CA</p>

      <div className="text-left sm:col-start-1 ">
        <p className="text-lg lg:text-xl py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p className="text-lg lg:text-xl py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <img src="about_me.jpeg" className="max-w-md sm:relative sm:left-5 sm:bottom-36 sm:pt-10 " alt="Picture of the author"></img>
    </section>
  )
}

export default About;
