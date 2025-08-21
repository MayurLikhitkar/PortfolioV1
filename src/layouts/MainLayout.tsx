import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop';

const MainLayout: React.FC = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
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
        </div>

    )
}

export default MainLayout