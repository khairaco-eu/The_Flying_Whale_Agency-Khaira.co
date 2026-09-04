import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop ensures that:
 * 1. Every page opens from the top when navigating.
 * 2. Any internal link click scrolls up to the top.
 * 3. Browser automatic scroll restoration doesn't cause pages to open midway down.
 */
const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  // Prevent browser from trying to restore previous scroll position on navigation
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Reset scroll to top immediately whenever the route changes
  useLayoutEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    const resetToTop = () => {
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
      });
    };

    resetToTop();

    // Additional fallback frame to handle deferred rendering / height changes
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 60);

    return () => clearTimeout(timer);
  }, [pathname, search, hash]);

  // Global click interception: when any page link is clicked (including current page), scroll up
  useEffect(() => {
    const handleGlobalLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      // If it is an internal route or anchor link
      if (href && (href.startsWith('/') || href.startsWith('#') || !href.includes('://'))) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleGlobalLinkClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalLinkClick, { capture: true });
    };
  }, []);

  return null;
};

export default ScrollToTop;
