import { useEffect, useState } from "react";
import { HiOutlineArrowLongUp } from "react-icons/hi2";
import Button from "../templates/Button";

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
                <Button className="!fixed bottom-8 right-8 !p-3" onClick={scrollToTop}>
                    <HiOutlineArrowLongUp className="" />
                </Button>
            )}
        </>
    );
};

export default ScrollToTop;
