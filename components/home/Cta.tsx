import Link from 'next/link';

export function Cta() {
  return (
    <section className="py-24 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your communication?</h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            Get started with RelayOS today and experience the future of real-time communication infrastructure.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">14-Day</div>
              <div className="text-primary-100">Free Trial</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Technical Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold mb-2">99.99%</div>
              <div className="text-primary-100">Uptime SLA</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="bg-white text-primary-700 hover:bg-primary-50 font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/contact" 
              className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-8 rounded-md shadow transition duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
