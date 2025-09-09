import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    const yOffset = 60;
                    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
                    window.scrollTo({ top: y, left: 0, behavior: "smooth" });
                    return;
                }
            }, 0);
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);


    return (
        <div className="bg-background-dark bg-dots">
            <Header />
            <Outlet />
            <ScrollToTop />
            <Footer />
        </div>

    )
}

export default MainLayout