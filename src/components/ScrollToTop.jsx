import { useCallback, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  const resetScroll = useCallback(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [hash]);

  useLayoutEffect(() => {
    resetScroll();
  }, [pathname, search, resetScroll]);

  useEffect(() => {
    resetScroll();
  }, [pathname, search, resetScroll]);

  return null;
}

export default ScrollToTop;
