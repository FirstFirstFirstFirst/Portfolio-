import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
import './globals.css'
import Head from './head'
import About from '../../components/About'
import Skills from '../../components/Skills'

function Home() {
  return (
    <div>
      <Head />
      <Navbar/>
      <Main />
      <About />
      <Skills />
    </div>   

  )
}

export default Home;
