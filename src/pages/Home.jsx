import bgImage from "../assets/bgImage.png";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from '../components/Hero'
import Project from '../components/Project'
import ServeYou from '../components/ServeYou'
import Skills from '../components/Skills'

function Home() {
  return (

    <div className="flex flex-col gap-3 mx-3 lg:mx-28 md:mx-10 pb-5">
      <Hero />
      <Skills />
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Project />
      </div>
      <ServeYou />
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default Home