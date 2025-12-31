import { Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import hero from './components/hero.jsx';
import HomeCards from './components/HomeCards.jsx';
import JobListings from './components/JobListings.jsx';
import ViewAll from './components/ViewAll.jsx';
const App = () => {
  return (
    <>
    <Navbar/>
    <hero/>
    <HomeCards/>
    <JobListings/>
    <ViewAll/>

    </>
  )

}


export default App;