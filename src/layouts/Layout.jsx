import Footer from "../components/Footer";
import Nav from "../components/nav/Nav";
import ScrollToTop from "../components/ScrollToTop";

const Layout = ({ children }) => {
    return (
        <div className="relative">
            <Nav />
            {children}
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Layout;