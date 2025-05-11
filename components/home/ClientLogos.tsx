export function ClientLogos() {
  return (
    <section className="py-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-medium text-slate-700 dark:text-slate-300 mb-12">Powering communication for industry leaders</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Company logos as SVG for better quality and scalability */}
          <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-32">
            <rect width="120" height="40" rx="4" fill="#E2E8F0" className="dark:fill-slate-800" />
            <text x="60" y="25" fontSize="14" fontWeight="500" textAnchor="middle" fill="#64748B" className="dark:fill-slate-400">TechCorp</text>
          </svg>
          
          <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-32">
            <rect width="120" height="40" rx="4" fill="#E2E8F0" className="dark:fill-slate-800" />
            <text x="60" y="25" fontSize="14" fontWeight="500" textAnchor="middle" fill="#64748B" className="dark:fill-slate-400">DevSolutions</text>
          </svg>
          
          <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-32">
            <rect width="120" height="40" rx="4" fill="#E2E8F0" className="dark:fill-slate-800" />
            <text x="60" y="25" fontSize="14" fontWeight="500" textAnchor="middle" fill="#64748B" className="dark:fill-slate-400">InnovateX</text>
          </svg>
          
          <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-32">
            <rect width="120" height="40" rx="4" fill="#E2E8F0" className="dark:fill-slate-800" />
            <text x="60" y="25" fontSize="14" fontWeight="500" textAnchor="middle" fill="#64748B" className="dark:fill-slate-400">PlatformY</text>
          </svg>
          
          <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-32">
            <rect width="120" height="40" rx="4" fill="#E2E8F0" className="dark:fill-slate-800" />
            <text x="60" y="25" fontSize="14" fontWeight="500" textAnchor="middle" fill="#64748B" className="dark:fill-slate-400">AppWorks</text>
          </svg>
          
          <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-32">
            <rect width="120" height="40" rx="4" fill="#E2E8F0" className="dark:fill-slate-800" />
            <text x="60" y="25" fontSize="14" fontWeight="500" textAnchor="middle" fill="#64748B" className="dark:fill-slate-400">CreatorSpace</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;
