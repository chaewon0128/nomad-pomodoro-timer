import { useEffect, useRef } from "react";

interface IUseInterval {
    (callback: () => void, delay: number | null): void;
}

export const useInterval: IUseInterval = (callback, delay) => {
    const savedCallback = useRef<(() => void) | null>(null);

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        } if (!delay && delay !== 0) {
            return
        }

        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
};