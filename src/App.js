import { Route, Routes } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout'
import Home from './components/Home'
import Country from './components/Country'
import About from './components/About'
import Missing from './components/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path=":id" element={<Country />} />
        <Route path="/about" element={<About />} />
        <Route path="/missing" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
