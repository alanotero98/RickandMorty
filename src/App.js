
import './App.css';

import NavBar from './components/NavBar/NavBar';

// import TextoAnimado from './components/TextoAnimado.jsx/TextoAnimado';

import { Route, Routes } from 'react-router-dom';
import Pagina from './components/Pagina/Pagina';
import NotFound from './components/NotFound/NotFound';
import Detail from './components/Detail/Detail';









function App() {

   
    
   return (

      <div className='App'>
            
            <div className='app2'> 
               <NavBar/> 
                  <Routes>
                     <Route path='*' element={<NotFound />}/>
                     <Route path='/' element={<Pagina />} />
                     <Route path="/detail/:detailID" element={<Detail />} />
                  </Routes>
            </div>
   
      </div>

     
            );
      
}

export default App;
