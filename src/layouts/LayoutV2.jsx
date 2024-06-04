import Footer from "../components/Footer";
import NavV2 from "../components/nav/NavV2";
import ScrollToTop from "../components/ScrollToTop";

const LayoutV2 = ({ children }) => {
    return (
        <div>
            <NavV2 />
            {children}
            <Footer />
            <ScrollToTop />
        </div>
    )
};

export default LayoutV2;