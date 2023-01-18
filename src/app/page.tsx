import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import './globals.css'
import Head from './head'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects';
function Home() {
  return (
    <div>
      <Head />
      <Navbar/>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>   

  )
}

export default Home;
