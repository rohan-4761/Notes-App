
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Create from './pages/Create';
import Notes from './pages/Notes';
import Layout from './components/Layout';


function App() {
  return (
    <BrowserRouter>
     <Layout>
     <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/create' element={<Create />} />
      </Routes>
     </Layout>
    </BrowserRouter>
  );
}

export default App;
