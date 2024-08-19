import logo from './logo.svg';
import './App.css';
import mButton from './componets/Button'; // Import Button component
import ResponsiveDrawer from './componets/Navbar';  

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <mButton />
    </div>
  );
}

export default App;
