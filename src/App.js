import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Navbar from './View/Navbar.js/index.js';
import { useSelector } from 'react-redux';
import Loader from './Components/Atoms/Loader';
import RootRouter from './Route/RootRouter';

function App() {
  const data = useSelector(state => state)
  console.log(data, "data")
  return (
    <div className="App">
      <BrowserRouter>
        <Loader show={useSelector(state => state?.loaderStateReducer)} />
     
        <div className='main'>
          {/* <PublicRoutes /> */}
          <RootRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
