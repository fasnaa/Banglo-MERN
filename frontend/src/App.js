import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlannerForm from './pages/PlannerForm';
import AttractionsPage from './pages/explore';
import Layout from "./components/Layout";  
import Itinerary from './pages/Itinerary';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="PlannerForm" element={<PlannerForm />} />
          <Route path="explore" element={<AttractionsPage />} />
          <Route path='Itinerary' element={<Itinerary></Itinerary>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
