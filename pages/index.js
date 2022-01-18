import Intro from './intro.js';
import Services from './services.js';
import About from './about.js';
import Work from './work.js';

export default function Home() {
  return (
   <div className="min-h-screen">
    <Intro />
    <Services />
    <About />
    <Work />
    <footer>call me beep me if ya wanna reach me</footer>
   </div>
  )
}
