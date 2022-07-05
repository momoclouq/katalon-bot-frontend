import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/main/MainPage';
import 'tw-elements';

function App() {
  return (
    <BrowserRouter>
      <div className="max-h-screen">
        <Routes>
          <Route path="/katalon-bot-frontend" element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
