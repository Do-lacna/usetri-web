
import React, { useEffect } from 'react';
import { ShoppingCart, Search, RefreshCw, BarChart3, ShieldCheck, Tags } from 'lucide-react';

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const features = [
    {
      icon: <Search className="w-8 h-8 text-brand-accent" />,
      title: "Search & Compare",
      description: "Easily search for products and compare prices across multiple supermarkets in Slovakia."
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-brand-accent" />,
      title: "Shopping Lists",
      description: "Create and manage shopping lists that automatically calculate the best store for your entire list."
    },
    {
      icon: <Tags className="w-8 h-8 text-brand-accent" />,
      title: "Deal Alerts",
      description: "Get notified when products on your watchlist go on sale or drop in price."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-brand-accent" />,
      title: "Real-time Updates",
      description: "Prices are updated daily to ensure you always have the latest information."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-brand-accent" />,
      title: "Price History",
      description: "View price trends over time to make informed purchasing decisions."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />,
      title: "Verified Data",
      description: "All pricing data is verified for accuracy before being displayed in the app."
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            Every Feature You Need to <span className="text-brand-accent">Save Money</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our app is designed to make grocery shopping more efficient and economical, with powerful tools to help you maximize your savings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="glass-panel p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] reveal-animation"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="p-3 bg-brand-light rounded-xl inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
