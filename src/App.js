import React, { useEffect ,useState}  from 'react'
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/footer";
import Animation from "./components/Animation";
import Load from "./components/Load";

function App() {
  const[IsLoading ,setIsLoading]=useState(true)
  useEffect(()=>{
    const fetchPageData=()=>{

      setTimeout(()=>{
        setIsLoading(false);
      },4000)
    }
    fetchPageData();
  },[]);

  return IsLoading ? (<Load/>):(

    <div className="App"> 
    <Animation/>
    <Navbar/> 
    <Home/> 
    <About/> 
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App;
