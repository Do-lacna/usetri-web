import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Apple, ShoppingBag } from 'lucide-react';

const Download = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="download" className="py-20 bg-brand-dark text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-left reveal-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Saving on Your{' '}
              <span className="text-brand-accent">Grocery Bills</span> Today
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Download usetri.sk now and join thousands of smart shoppers who
              are already saving money on their grocery shopping across
              Slovakia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center justify-center gap-2 bg-brand-accent text-brand-dark hover:bg-white button-hover-effect text-lg py-6">
                <Apple className="w-6 h-6" />
                <span>App Store</span>
              </Button>
              <Button className="flex items-center justify-center gap-2 bg-brand-accent text-brand-dark hover:bg-white button-hover-effect text-lg py-6">
                <ShoppingBag className="w-6 h-6" />
                <span>Google Play</span>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-dark font-medium">
                  JD
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark font-medium">
                  KL
                </div>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-dark font-medium">
                  MN
                </div>
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white font-medium">
                  +
                </div>
              </div>
              <div className="text-sm text-white/80">
                Joined by <span className="font-bold text-white">10,000+</span>{' '}
                smart shoppers
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative reveal-animation">
            <div className="relative max-w-[280px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/40 to-brand-accent/20 rounded-[40px] blur-xl transform rotate-12 scale-105"></div>
              <div className="relative rounded-[40px] border-[8px] border-black overflow-hidden bg-white">
                <img
                  src="https://placehold.co/600x1200/E6EEED/034F4A?text=usetri.sk+App"
                  alt="usetri.sk app preview"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
