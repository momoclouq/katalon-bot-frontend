import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomizePage from './pages/customize/CustomizePage';
import MainPage from './pages/main/MainPage';
import { store } from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container mx-auto">
          <Routes>
            <Route path="/katalon-bot-frontend" element={<MainPage />} />
            <Route path="/katalon-bot-frontend/customize" element={<CustomizePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
