"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type ContainerScrollProps = {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
};

export const ContainerScroll = ({
  titleComponent,
  children,
}: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  /* -------------------------------
     Detect desktop vs tablet/mobile
  -------------------------------- */
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  /* -------------------------------
     Hooks MUST always run
  -------------------------------- */
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={containerRef}
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={isDesktop ? { perspective: "1000px" } : undefined}
      >
        {/* Header → ONLY rendered on desktop */}
        {isDesktop && (
          <Header translate={translate} titleComponent={titleComponent} />
        )}

        {/* Desktop → animated card */}
        {isDesktop ? (
          <Card rotate={rotate} scale={scale}>
            {children}
          </Card>
        ) : (
          /* Tablet + Mobile → static dashboard */
          <div className="max-w-5xl mx-auto w-full rounded-2xl shadow-2xl overflow-hidden bg-black dark:bg-zinc-900">
            <div className="aspect-video w-full">{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};

/* -------------------------------
   Header (DESKTOP ONLY)
-------------------------------- */
const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="max-w-5xl mx-auto text-center mb-12"
    >
      {titleComponent}
    </motion.div>
  );
};

/* -------------------------------
   Animated Card (DESKTOP ONLY)
-------------------------------- */
const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full rounded-[30px]"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-black dark:bg-zinc-900 md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
