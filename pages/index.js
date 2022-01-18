import Intro from './intro.js';
import Services from './services.js';
import About from './about.js';
import Work from './work.js';
import Footer from './footer.js';

export default function Home() {
  return (
   <div className="min-h-screen">
    <Intro />
    <Services />
    <About />
    <Work />
    <Footer />
   </div>
  )
}
