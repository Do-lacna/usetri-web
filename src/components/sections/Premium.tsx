
import React, { useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Premium = () => {
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

  const plans = [
    {
      name: "Free",
      price: "€0",
      description: "Basic price comparison",
      features: [
        { name: "Search & compare prices", included: true },
        { name: "View up to 5 products per day", included: true },
        { name: "Basic price history (7 days)", included: true },
        { name: "Shopping list feature", included: false },
        { name: "Deal alerts", included: false },
        { name: "Ad-free experience", included: false },
      ],
      cta: "Download Free",
      highlighted: false
    },
    {
      name: "Premium",
      price: "€2.99",
      period: "per month",
      description: "Advanced shopping experience",
      features: [
        { name: "Unlimited product searches", included: true },
        { name: "Full price history (90 days)", included: true },
        { name: "Smart shopping lists", included: true },
        { name: "Deal alerts for any product", included: true },
        { name: "Store recommendations", included: true },
        { name: "Ad-free experience", included: true },
      ],
      cta: "Get Premium",
      highlighted: true
    }
  ];

  return (
    <section id="premium" className="py-20 bg-gradient-to-b from-white to-brand-light">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            Unlock the <span className="text-brand-accent">Full Potential</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our premium subscription unlocks powerful features to maximize your savings on every shopping trip.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 reveal-animation ${
                plan.highlighted 
                  ? 'bg-brand-dark text-white border-2 border-brand-accent shadow-lg' 
                  : 'bg-white border border-border'
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {plan.highlighted && (
                <div className="pricing-badge">Recommended</div>
              )}
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-brand-accent' : 'text-brand-dark'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className={`ml-1 pb-1 ${plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`mb-6 ${plan.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      )}
                      <span 
                        className={`ml-3 ${
                          feature.included 
                            ? plan.highlighted ? 'text-white' : 'text-foreground' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full py-6 ${
                    plan.highlighted 
                      ? 'bg-brand-accent text-brand-dark hover:bg-white hover:text-brand-dark button-hover-effect' 
                      : 'border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-muted-foreground reveal-animation">
          <p>All plans come with a 7-day free trial. Cancel anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default Premium;
