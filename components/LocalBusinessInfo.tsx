import Script from "next/script";

export default function LocalBusinessInfo() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Esvin Creative",
    "image": "https://esvincreative.in/assets/icons/logo-placeholder.svg", 
    "@id": "https://esvincreative.in",
    "url": "https://esvincreative.in",
    "telephone": "", 
    "email": "hello@esvincreative.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3850,
      "longitude": 78.4867
    },
    "areaServed": {
      "@type": "City",
      "name": "Hyderabad"
    },
    "sameAs": [
      "https://github.com/Esvin-Creative"
    ]
  };

  return (
    <div className="bg-black text-white p-8 sketch-border">
      <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      
      <h3 className="text-2xl font-bold font-ultra mb-6">Business Information</h3>
      
      <div className="space-y-4 font-ultra text-lg text-white/80">
        <div>
          <strong className="text-white block mb-1">Company Name</strong>
          <span>Esvin Creative</span>
        </div>
        
        <div>
          <strong className="text-white block mb-1">Headquarters</strong>
          <span>Hyderabad, Telangana, India</span>
        </div>
        
        <div>
          <strong className="text-white block mb-1">Email</strong>
          <a href="mailto:hello@esvincreative.in" className="hover:text-highlight-yellow transition-colors underline">
            hello@esvincreative.in
          </a>
        </div>
        
        <div>
          <strong className="text-white block mb-1">Website</strong>
          <a href="https://esvincreative.in" className="hover:text-highlight-yellow transition-colors underline">
            https://esvincreative.in
          </a>
        </div>
      </div>
    </div>
  );
}
