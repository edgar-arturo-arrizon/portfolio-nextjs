const Work = () => {
  return (
    <section className="bg-stone-800 border-4 min-w-screen px-10 py-8  text-center">
      <h2 className=" text-white text-5xl font-bold py-3">My Work</h2>
      <p className="text-3xl font-medium text-green-400 py-2 sm:col-start-1">In progress..</p>

      <div className="grid grid-flow-row gap-8  lg:grid-flow-col">
        <a href="">
          <img src="portfolio-01.jpg" />
        </a>
        <a className="overflow-hidden" href="">
          <img src="portfolio-02.jpg" />
        </a>
        <a className="overflow-hidden" href="">
          <img src="portfolio-03.jpg" />
        </a>
        <a className="overflow-hidden" href="">
          <img src="portfolio-04.jpg" />
        </a>
      </div>

    </section>
  )
}

export default Work;
