import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Services from './components/Services/Services'
import Experience from './components/Experience/Experience'
import Works from './components/Works/Works'

function App() {
  let pStart = '<p>'
  let pEnd = '</p>'
  return (
    <div className="App">
      <Navbar />
      <Intro pStart={pStart} pEnd = {pEnd} />
      <Services />
      <Experience />
      <Works />
    </div>
  );
}

export default App;
