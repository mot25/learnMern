import './App.scss';
import Navbar from './components/Navbar/Navbar';
import AuthPages from './pages/AuthPages/AuthPages';

function App() {
  return (
    <div className="app">
      <Navbar />
      <AuthPages />
    </div>
  );
}

export default App;
