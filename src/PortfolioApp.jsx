import Header from "./layouts/Header/Header.jsx"
import Footer from "./layouts/Footer.jsx"
import AppWrapper from "./layouts/AppWrapper.jsx";
import { Outlet } from "react-router-dom";
import ContentWrapper from "./layouts/ContentWrapper.jsx";
import ScrollToTop from "../src/shared/ScrollToTop.jsx"

export default function PortfolioApp() {

  return (
    <AppWrapper>
        <Header />
        <ContentWrapper>
          <ScrollToTop />
          <Outlet />
        </ContentWrapper>
        <Footer />
    </AppWrapper>
  )
}