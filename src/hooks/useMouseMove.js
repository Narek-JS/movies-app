import { useRef } from "react";


const useMouseMove = (options) => {
    const ref = useRef(null);

    const animate = (animationKeyframes, callback) => {
        const element = ref.current;

        if (!element) return false;
        const animation = element.animate(animationKeyframes, options);

        if (callback) {
            animation.finished.then((res) => callback(res));
        };

        return true;
    };

    return [ ref, animate ];

};

export { useMouseMove };