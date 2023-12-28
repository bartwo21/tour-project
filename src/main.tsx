import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import Home from "./pages/home/home.tsx";
import TravelDeals from "./pages/travelDeals/TravelDeals.tsx";
import NotFoundPage from "./pages/notFound/NotFoundPage.tsx";
import Login from "./pages/Login/Login.tsx";
import AboutUs from "./pages/aboutUs/AboutUs.tsx";
import SearchQueryPage from "./pages/SearchQueryPage/SearchQueryPage.tsx";
import ScrollToTop from "./constants/scrollToTop/scrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="/travel-deals" element={<TravelDeals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/travelstyles" element={<TravelDeals />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path=":url" element={<SearchQueryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);
