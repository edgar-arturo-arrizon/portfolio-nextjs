import Intro from './intro.js';

export default function Home() {
  return (
   <div className="bg-slate-500 min-h-screen flex-col">
     <Intro />
    <section className="border-rose-500 border-4 min-w-screen">What I do</section>
    <section className=" border-yellow-500 border-4 min-w-screen">About Me</section>
   </div>
  )
}
