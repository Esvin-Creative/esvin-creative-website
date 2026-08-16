


export default function LocalBusinessInfo() {
  return (
    <div className="bg-black text-white p-8 sketch-border">
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
