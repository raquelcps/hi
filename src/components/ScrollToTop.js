import React from "react";
// Router
import { useLocation, useNavigate } from "react-router-dom";

// #region component
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // https://reactjs.org/docs/hooks-reference.html#uselayouteffect
  React.useLayoutEffect(() => {
    // If not a hash link scroll to top
    if (hash === "") {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
    // Else scroll to id
    else {
      const id = hash.replace("#", "");

      // Wait for the element to be rendered in the DOM
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        } else {
          navigate("404", { replace: false });
        }
      }, 100);
      // The above code is now handled inside the setTimeout to wait for the element to be rendered in the DOM.
    }
  }, [pathname, hash, navigate]);

  return null;
};
// #endregion

export default ScrollToTop;
