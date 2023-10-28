import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.tsx'
import Home from './pages/home/home.tsx'
import TravelDeals from './pages/travelDeals/TravelDeals.tsx'
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage.tsx'
import NotFoundPage from './pages/notFound/NotFoundPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path="" element={<Home />} />
          <Route path='/travel-deals' element={<TravelDeals />} />
          <Route path='/destinations' element={<h1>Destinations</h1>} />
          <Route path='/travelstyles' element={<TravelDeals />} />
          <Route path='/aboutus' element={<h1>About Us</h1>} />
          <Route path="/sr" element={<SearchResultsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
