import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the very top of the page when navigating to a new route
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
