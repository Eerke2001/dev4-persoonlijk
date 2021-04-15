import styles from "./Sparkles.module.css";
import React, { useRef, useEffect } from 'react';
import Bol from "./classes/Bol.js";

const Sparkles = props => {

    const { draw, ...rest } = props
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        let frameCount = 0
        let animationFrameId

        let bollen = [];

        const createBols = () => {
            for (let i = 0; i < 10; i++) {
                const bol = new Bol(canvas, Math.random() * canvas.width, Math.random() * canvas.height);
                bollen.push(bol);
            }
        };

        //Our draw came here
        const render = () => {
            frameCount++
            draw(context, frameCount, bollen)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render();
        createBols();

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }

    }, [draw])

    const colorArray = [`#9cffbe`, `#ff85ad`, `#f4b5ff`, `#9cf3ff`, `#96b6ff`];

    return (
        <>
            <canvas style={{ position: "absolute", top: 0, zIndex: 1 }} ref={canvasRef}></canvas>
        </>
    );
};

export default Sparkles;