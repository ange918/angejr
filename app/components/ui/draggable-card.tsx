"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/app/utils/cn";

interface DraggableCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const DraggableCard = ({
  children,
  className,
  containerClassName,
}: DraggableCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (isDragging) return;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xVal = (clientX - left - width / 2) / 5;
    const yVal = (clientY - top - height / 2) / 5;
    x.set(xVal);
    y.set(yVal);
  }

  function onMouseLeave() {
    if (isDragging) return;
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center justify-center",
        containerClassName
      )}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        drag
        dragConstraints={containerRef}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false);
          x.set(0);
          y.set(0);
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          x: mouseX,
          y: mouseY,
          rotateX: useTransform(mouseY, [-50, 50], [15, -15]),
          rotateY: useTransform(mouseX, [-50, 50], [-15, 15]),
          zIndex: isDragging ? 100 : 1,
        }}
        className={cn(
          "relative cursor-grab active:cursor-grabbing transition-shadow",
          isDragging ? "shadow-2xl" : "shadow-xl",
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  );
};
