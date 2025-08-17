import React, { useState, useEffect, useRef } from "react";

// Reusable Animation Component
const AnimatedSection = ({
  children,
  className = "",
  animationType = "fadeInUp",
  delay = 0,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000 ease-out";

    switch (animationType) {
      case "fadeInUp":
        return `${baseClass} ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`;
      case "fadeInLeft":
        return `${baseClass} ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`;
      case "fadeInRight":
        return `${baseClass} ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`;
      case "scaleIn":
        return `${baseClass} ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`;
      case "slideInUp":
        return `${baseClass} ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`;
      default:
        return baseClass;
    }
  };

  return (
    <div ref={sectionRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
