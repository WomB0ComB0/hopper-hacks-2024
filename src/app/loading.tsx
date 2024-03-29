"use client"
import { motion } from "framer-motion";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
export default function Loading(){
  const text = "Loading HelpLine";
  const characters = text.toUpperCase().split("");

  const radius = 80;
  const fontSize = "18px";
  const letterSpacing = 12.5;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async (): Promise<any> => {
      const letterAnimation: any[] = [];
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 0 },
          { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" }
        ]);
      });
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 1 },
          { duration: 0.3, at: i === 0 ? "+0.8" : "-0.28" }
        ]);
      });
      animate(letterAnimation, {
        repeat: Infinity,
      });
      animate(
        scope.current,
        { rotate: 360 },
        { duration: 4, ease: "linear", repeat: Infinity }
      );
    };
    animateLoader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // Test this out
    <>
      <motion.div ref={scope} className="circle" style={{ width: radius * 2 }}>
        <p aria-label={text} />
        <p aria-hidden="true" className="text">
          {characters.map((ch, i) => (
            <motion.span
              key={i}
              className={`letter letter-${i}`}
              style={{
                transformOrigin: `0 ${radius}px`,
                transform: `rotate(${i * letterSpacing}deg)`,
                fontSize
              }}
            >
              {ch}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </>
  )
}