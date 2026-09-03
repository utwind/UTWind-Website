"use client";

import { useEffect, useState } from "react";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-blue-900">
        {/* Turbine */}
        <div className="relative w-32 h-40 mb-6">
          {/* Tower */}
          <div className="absolute left-1/2 top-16 w-2 h-24 bg-blue-900/70 -translate-x-1/2 rounded-b-full"></div>

          {/* Nacelle */}
          <div className="absolute left-1/2 top-12 w-12 h-5 bg-blue-900/80 rounded-full -translate-x-[25%]"></div>

          {/* Rotor */}
          <div className="absolute left-1/2 top-14 w-12 h-12 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-full h-full animate-spin-turbine">
              <div className="mini-turbine-blade absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full origin-bottom"></div>
              <div className="mini-turbine-blade absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full origin-bottom rotate-[120deg]"></div>
              <div className="mini-turbine-blade absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full origin-bottom rotate-[240deg]"></div>

              <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-blue-900 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
            </div>
          </div>
        </div>
            <p className="absolute bottom-12 text-lg font-semibold tracking-wide">
            Loading UTWind...
            </p>
      </div>
    );
  }

  return <>{children}</>;
}