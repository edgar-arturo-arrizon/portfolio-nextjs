import Intro from './intro.js';
import Services from './services.js';
import About from './About.js';

export default function Home() {
  return (
   <div className="bg-slate-500 min-h-screen">
    <Intro />
    <Services />
    <About />
    <footer>call me beep me if ya wanna reach me</footer>
   </div>
  )
}
