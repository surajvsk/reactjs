import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import mHome from './componets/Home'; // Import Button component
import mComments from './componets/Comments'; // Import Button component
import Sidebar from './componets/side-menu';  
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
            <Route path="/" element={<mHome />} />
            <Route path="/comments" element={<mComments />} />
        </Routes>
    </div>
  );
}

export default App;
