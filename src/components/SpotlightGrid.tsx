import React, { useEffect, useRef, useState } from "react";
import { useThemeManager } from "./useThemeManager";

export const SpotlightGrid: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { themeColors } = useThemeManager();
  const hex2rgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
  };

  const gridRgbColor = hex2rgb(themeColors["--primary-color"] as string);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Early return if canvas is null

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Early return if context is null

    const gridSize = 20;
    const spotlightRadius = 70;

    const drawGrid = () => {
      if (!canvas || !ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.strokeStyle = `rgba(${gridRgbColor.r}, ${gridRgbColor.g}, ${gridRgbColor.b}, 0.05)`;
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw spotlight effect
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
          );

          if (distance <= spotlightRadius) {
            // Use a smooth transition function for opacity
            const opacity = Math.cos(
              (distance / spotlightRadius) * (Math.PI / 2)
            );
            ctx.strokeStyle = `rgba(${gridRgbColor.r}, ${gridRgbColor.g}, ${
              gridRgbColor.b
            }, ${opacity * 0.5})`;

            if (x % gridSize === 0) {
              ctx.beginPath();
              ctx.moveTo(x, Math.max(0, y - gridSize));
              ctx.lineTo(x, Math.min(canvas.height, y + gridSize));
              ctx.stroke();
            }

            if (y % gridSize === 0) {
              ctx.beginPath();
              ctx.moveTo(Math.max(0, x - gridSize), y);
              ctx.lineTo(Math.min(canvas.width, x + gridSize), y);
              ctx.stroke();
            }
          }
        }
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleResize = () => {
      drawGrid();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    drawGrid();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mousePosition, gridRgbColor]);

  return (
    <div style={{ position: "absolute", top: 0, left: 0 }}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};
