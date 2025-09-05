import { useEffect, useState } from "react";
import { HiOutlineArrowLongUp } from "react-icons/hi2";

const ScrollToTop: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.pageYOffset > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-8 right-8 p-3 text-lg rounded-full group cursor-pointer border border-border-light text-dark-dark bg-primary-light hover: z-50 transform transition-transform duration-100 ease-in-out hover:scale-110">
                    <HiOutlineArrowLongUp className="" />
                    <div className="absolute inset-0 flex justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className={`relative w-4 bg-background-dark/70`}></div></div>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
