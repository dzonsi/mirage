import { useEffect } from "react";
import { closeOnEsc } from '../functions/functions';

export function useCloseEsc(show, close) {
    useEffect(() => {

      if(show) {

        const esc = closeOnEsc(close);

        document.addEventListener("keydown", esc);

        return () => {
          document.removeEventListener('keydown', esc);
        };
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);
}