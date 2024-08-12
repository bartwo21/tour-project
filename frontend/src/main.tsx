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
import SearchQueryPage from "./pages/SearchQueryPage/SearchQueryPage.tsx";
import ScrollToTop from "./constants/scrollToTop/scrollToTop.tsx";
import Register from "./pages/Register/Register.tsx";
import Profile from "./pages/profile/Profile.tsx";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="/travel-deals" element={<TravelDeals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/travelstyles" element={<TravelDeals />} />
          {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          {/* Private Route */}
          <Route path="" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path=":url" element={<SearchQueryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);
