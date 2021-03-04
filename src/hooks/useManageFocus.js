import { useEffect } from "react";
import { moveFocusToTop, moveFocusToBottom } from '../functions/functions';

export function useManageFocus(show, first, last) {
    // first and last are react ref elements
    useEffect(() => {

      if(show) {
        // set focus to first elemenet
        first.current.focus();
        // create functions for manage focus
        const toBottom = moveFocusToBottom(last);
        const toTop = moveFocusToTop(first);
        // add event listeners to first and last element
        first.current.addEventListener('keydown', toBottom);
        last.current.addEventListener('keydown', toTop);

        return () => {
          // remove event listeners from elements
          first.current.removeEventListener('keydown', toBottom);
          last.current.removeEventListener('keydown', toTop);
        }
      }

    }, [show]);

}