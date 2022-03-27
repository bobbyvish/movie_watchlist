import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Watched } from './components/Watched';
import { Watchlist } from './components/Watchlist';
import { Add } from './components/Add';
import "./lib/font-awesome/css/all.min.css"
import {GlobalProvider} from "./context/GlobalState"

function App() {
  return (
    <GlobalProvider>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      
      <Routes>
        <Route path="/" element={<Watchlist />}/>
        <Route path="/add" element={<Add />}/>
        <Route path="/watched" element={<Watched />}/>
       
      </Routes>
      </Router>
      </GlobalProvider>
  );
}

export default App;
