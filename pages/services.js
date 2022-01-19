
const Services = () => {
  return (
    <section className="min-w-screen px-20 py-8 bg-imag bg-services text-center">
      <h2 className="text-green-400 py-8 text-6xl font-semibold">What I Do</h2>
      <div className="text-white mb-16 lg:flex lg:min-w-1000px lg:mx-auto">
        <div className="py-4 lg:px-20 lg:min-w-[30%]">
          <h3 className="text-2xl py-4 font-bold">Frontend Developement</h3>
          <p className="text-lg lg:text-xl"> Building and styling websites with HTML5, CSS, React, Next.js, Tailwind, Styled Components, Bootstrap</p>
        </div>
        <div className="py-4 lg:px-10 lg:min-w-[30%]">
          <h3 className="text-2xl py-4 font-bold">Backend Technologies</h3>
          <p className="text-lg lg:text-xl"> Experience building servers, databases, setting up user authentication and creating REST API&apos;s. Node.js, Python, Express, FastAPI, MongoDB, Postgres</p>
        </div>
        <div className="py-4 lg:px-20 lg:min-w-[30%]">
          <h3 className="text-2xl py-4 font-bold">Rest API Developement</h3>
          <p className="text-lg lg:text-xl">Replacing outdated backend services, setting up ETL piplines, scaling horizontally with with AWS instances</p>
        </div>
      </div>
    </section>
  )
}

export default Services;