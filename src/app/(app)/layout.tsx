"use client";

import { SiteHeader } from "@/components/site-header";
import { PageLoader } from "@/components/page-loader";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// A temporary solution to listen to router events
// This will be replaced by a built-in solution in Next.js
// https://github.com/vercel/next.js/issues/49279
function usePageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // This is a bit of a hack to detect when a navigation starts.
    // We can't use routeChangeStart because it doesn't trigger on first load.
    // Instead we use a combination of the pathname changing and a timeout
    // to avoid a flicker on fast page loads.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // Adjust this value to your liking

    return () => clearTimeout(timer);
  }, [pathname]);

  // We need to add a click listener to the document to catch all link clicks
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
        // Find the closest anchor tag
        const target = (e.target as HTMLElement).closest('a');

        // Check if it's a link that Next.js will handle
        if (target && target.href && target.target !== '_blank' && !target.href.startsWith('#') && !e.ctrlKey && !e.metaKey) {
            const currentUrl = new URL(window.location.href);
            const targetUrl = new URL(target.href);
            if(currentUrl.origin === targetUrl.origin && currentUrl.pathname !== targetUrl.pathname) {
                setLoading(true);
            }
        }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);


  return loading;
}


interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const isLoading = usePageLoader();
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {isLoading && <PageLoader />}
      <SiteHeader />
      <main className="flex-1 animate-fade-in">{children}</main>
    </div>
  );
}
