import Intro from './intro.js';
import Services from './services.js';

export default function Home() {
  return (
   <div className="bg-slate-500 min-h-screen">
    <Intro />
    <Services />
    <section className=" border-yellow-500 border-4 min-w-screen">About Me</section>
    <footer>call me beep me if ya wanna reach me</footer>
   </div>
  )
}
