import React, { useEffect, useRef, useState } from "react";
import Button from "../templates/Button";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
    const [glitchActive, setGlitchActive] = useState(false);
    const navigate = useNavigate();

    const glitchText = useGlitchText("PAGE NOT FOUND", glitchActive);

    /* ─── Glitch Text ───────────────────────────────────────────────── */
    const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    function useGlitchText(original: string, active: boolean) {
        const [display, setDisplay] = useState(original);
        const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

        useEffect(() => {
            if (!active) {
                setDisplay(original);
                return;
            }

            let iteration = 0;
            const maxIterations = original.length * 3;

            const scramble = () => {
                setDisplay(
                    original
                        .split("")
                        .map((char, idx) => {
                            if (char === " ") return " ";
                            if (idx < Math.floor(iteration / 3)) return char;
                            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
                        })
                        .join("")
                );

                iteration++;
                if (iteration < maxIterations) {
                    frameRef.current = setTimeout(scramble, 40);
                } else {
                    setDisplay(original);
                }
            };

            scramble();
            return () => {
                if (frameRef.current) clearTimeout(frameRef.current);
            };
        }, [active, original]);

        return display;
    }

    /* auto glitch every few seconds */
    useEffect(() => {
        const trigger = () => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 1200);
        };
        trigger();
        const interval = setInterval(trigger, 4500);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="relative min-h-screen px-6 pb-20 pt-40 lg:pb-30 lg:pt-50">
            <div className="container mx-auto max-w-screen-xl">
                <div className="flex flex-col items-center justify-center gap-5 overflow-hidden text-center">

                    {/* 404 with glitch effect */}
                    <h1
                        className="relative flex items-center justify-center lg:text-9xl text-6xl sm:text-7xl font-black leading-none text-primary-main">
                        404
                    </h1>

                    {/* Glitch subtitle */}
                    <div className="relative mb-3">
                        <p className="text-sm xs:text-lg font-bold text-primary-dark tracking-[5px]"
                            style={{ textShadow: glitchActive ? "" : "" }}>
                            {glitchText}
                        </p>
                    </div>
                    <p className="max-w-lg text-lg text-text-main">
                        The page you're looking for doesn't exist or has been moved. <br className="hidden xs:block" />
                        Let's get you back on track.
                    </p>

                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <Button
                            variant="contained"
                            target="_self"
                            to="/"
                            link>
                            <FaHouse className='inline-block mr-2' /> Go Home
                        </Button>
                        <Button
                            variant="outline"
                            target="_self"
                            link
                            onClick={() => navigate(-1)}>
                            <FaArrowLeft className='inline-block mr-2' /> Go Back
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NotFound;