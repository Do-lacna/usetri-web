
import React, { useEffect, useRef } from 'react';
import { ChevronDown, ShoppingCart, CircleDollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-light">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-brand-dark/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-dark/10 to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center">
        {/* Text Content */}
        <div className="text-left space-y-6 reveal-animation">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-accent/20 text-brand-dark font-medium text-sm mb-4">
            Save money on every shopping trip
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight md:leading-tight text-balance">
            Compare grocery prices <span className="text-brand-accent">across Slovakia</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            usetri.sk finds the best deals on groceries by comparing prices at multiple supermarkets in real-time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="button-hover-effect text-lg px-8 py-6 bg-brand-dark text-white hover:bg-brand-accent hover:text-brand-dark">
              Download Now
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center gap-x-8 pt-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-dark">15+</span>
              <span className="text-muted-foreground">Supermarkets</span>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-dark">1000s</span>
              <span className="text-muted-foreground">Products</span>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-brand-dark">20%</span>
              <span className="text-muted-foreground">Avg. Savings</span>
            </div>
          </div>
        </div>
        
        {/* Phone Mockup */}
        <div 
          ref={phoneRef}
          className="relative h-[600px] w-full max-w-[300px] mx-auto md:mx-0 md:ml-auto reveal-animation"
        >
          <div className={cn(
            "absolute inset-0 w-full h-full rounded-[40px] border-[8px] border-black overflow-hidden",
            "shadow-xl bg-white animate-float z-20"
          )}>
            {/* App Screenshot - Price Comparison */}
            <div className="h-full w-full bg-white flex flex-col">
              {/* App Header */}
              <div className="bg-brand-dark text-white p-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">usetri.sk</span>
                  <ShoppingCart size={20} />
                </div>
                <div className="mt-3 bg-white/10 rounded-lg p-2 flex items-center">
                  <div className="flex-1 text-sm text-white/80 ml-2">Search products...</div>
                </div>
              </div>
              
              {/* App Content */}
              <div className="flex-1 overflow-hidden">
                {/* Product Item */}
                <div className="p-4 border-b">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Milk (1L)</div>
                    <div className="flex items-center text-brand-accent font-medium">
                      <CircleDollarSign size={16} className="mr-1" />
                      Best Deal
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-3">
                    <div className="flex justify-between items-center p-2 bg-brand-light rounded-lg">
                      <span>Tesco</span>
                      <span className="font-bold">€0.89</span>
                    </div>
                    <div className="flex justify-between items-center p-2 border rounded-lg">
                      <span>Kaufland</span>
                      <span>€0.95</span>
                    </div>
                    <div className="flex justify-between items-center p-2 border rounded-lg">
                      <span>Lidl</span>
                      <span>€0.99</span>
                    </div>
                  </div>
                </div>
                
                {/* Product Item */}
                <div className="p-4 border-b">
                  <div className="flex justify-between mb-2">
                    <div className="font-medium">Bread (500g)</div>
                    <div className="flex items-center text-brand-accent font-medium">
                      <CircleDollarSign size={16} className="mr-1" />
                      Best Deal
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-3">
                    <div className="flex justify-between items-center p-2 border rounded-lg">
                      <span>Tesco</span>
                      <span>€1.15</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-brand-light rounded-lg">
                      <span>Kaufland</span>
                      <span className="font-bold">€0.99</span>
                    </div>
                    <div className="flex justify-between items-center p-2 border rounded-lg">
                      <span>Lidl</span>
                      <span>€1.10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute right-[-30px] top-[20%] w-[150px] h-[150px] rounded-full bg-brand-accent/20 animate-pulse-subtle"></div>
          <div className="absolute left-[-40px] bottom-[15%] w-[120px] h-[120px] rounded-full bg-brand-dark/10 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm font-medium mb-2 text-brand-dark">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-brand-dark" />
      </div>
    </section>
  );
};

export default Hero;
