export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-blue-900">
      {/* Turbine */}
      <div className="relative w-32 h-40 mb-6">
        {/* Tower */}
        <div className="absolute left-1/2 top-16 w-2 h-24 bg-blue-900/70 -translate-x-1/2 rounded-b-full"></div>

        {/* Nacelle */}
        <div className="absolute left-1/2 top-12 w-12 h-5 bg-blue-900/80 rounded-full -translate-x-[25%]"></div>

        {/* Rotor */}
        <div className="absolute left-1/2 top-14 w-12 h-12 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-full h-full animate-spin-turbine">
            {/* Blade 1 */}
            <div className="mini-turbine-blade absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full origin-bottom"></div>

            {/* Blade 2 */}
            <div className="mini-turbine-blade absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full origin-bottom rotate-[120deg]"></div>

            {/* Blade 3 */}
            <div className="mini-turbine-blade absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full origin-bottom rotate-[240deg]"></div>

            {/* Hub */}
            <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-blue-900 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
          </div>
        </div>
      </div>

    </div>
  );
}