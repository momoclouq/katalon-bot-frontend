import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomizePage from './pages/customize/CustomizePage';
import MainPage from './pages/main/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/customize" element={<CustomizePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
