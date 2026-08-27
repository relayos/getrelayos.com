import Link from 'next/link';

export function Cta() {
  return (
    <section className="py-24 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Follow RelayBNC as it takes shape</h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            RelayOS is preparing the consumer offering. Contact us for current
            release information; pricing and package availability are not yet announced.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="bg-white text-primary-700 hover:bg-primary-50 font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-xl transition duration-300"
            >
              Explore RelayBNC
            </Link>
            <Link 
              href="/contact" 
              className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-8 rounded-md shadow transition duration-300"
            >
              Contact RelayOS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
