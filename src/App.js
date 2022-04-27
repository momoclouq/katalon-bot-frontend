import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomizePage from './pages/customize/CustomizePage';
import MainPage from './pages/main/MainPage';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/customize" element={<CustomizePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
