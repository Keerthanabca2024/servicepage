import React from 'react';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import { servicesData } from './data/services';

function App() {
  return (
    <>
      <Hero />
      <section className="services-section">
          <div className="container wrapper-cards">
              {servicesData.map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    title={service.title} 
                    description={service.description} 
                    icon={service.icon} 
                  />
              ))}
          </div>
      </section>
    </>
  );
}

export default App;
