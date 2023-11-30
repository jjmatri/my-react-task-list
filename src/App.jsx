
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TareasPage } from './pages/TareasPage';
import { SobreNosotrosPage } from './pages/SobreNosotrosPage';
import { Menu } from './components/Menu';


function App() {

  
  return(
    <>
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<HomePage />}>Home Page</Route>
      <Route path="/TaskPage" element={<TareasPage />}>Home Page</Route>
      <Route path="/AboutUs" element={<SobreNosotrosPage />}>Home Page</Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
};

export default App;
