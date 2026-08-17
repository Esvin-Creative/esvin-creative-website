export default function TrustSignals() {
  return (
    <section className="py-24 bg-subtle-grid border-t-2 border-dashed border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold font-ultra text-black mb-8">Why Organizations Choose Us</h2>
          <div className="space-y-6">
            <div className="bg-white sketch-border p-6 hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-bold text-black mb-2">End-to-End Ownership</h3>
              <p className="text-black/80 font-ultra text-lg">We take full responsibility for the technical architecture, development, and deployment, eliminating vendor fragmentation.</p>
            </div>
            <div className="bg-white sketch-border p-6 hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-bold text-black mb-2">Technical Depth</h3>
              <p className="text-black/80 font-ultra text-lg">Our engineering team has proven experience solving complex performance, scaling, and architectural challenges.</p>
            </div>
            <div className="bg-white sketch-border p-6 hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-bold text-black mb-2">Long-Term Support</h3>
              <p className="text-black/80 font-ultra text-lg">We build systems that last and provide ongoing maintenance, monitoring, and proactive updates after deployment.</p>
            </div>
            <div className="bg-white sketch-border p-6 hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-bold text-black mb-2">Transparent Communication</h3>
              <p className="text-black/80 font-ultra text-lg">Clear timelines, transparent pricing models, and direct access to the engineers building your product.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white sketch-border sketch-shadow p-10 flex flex-col justify-center h-fit sticky top-32">
          <h3 className="text-3xl font-bold font-ultra text-black mb-8 border-b-2 border-dashed border-black/20 pb-4">Business Information</h3>
          <dl className="space-y-6">
            <div>
              <dt className="text-sm font-bold text-black/50 uppercase tracking-widest">Organization</dt>
              <dd className="text-2xl font-bold text-black">Esvin Creative</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-black/50 uppercase tracking-widest">Location</dt>
              <dd className="text-xl font-ultra text-black/80">Hyderabad, Telangana, India</dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-black/50 uppercase tracking-widest">Contact</dt>
              <dd className="text-xl font-ultra text-black/80">
                <a href="mailto:hello@esvincreative.in" className="hover:text-black hover:underline transition-colors font-bold text-black">hello@esvincreative.in</a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-black/50 uppercase tracking-widest">Website</dt>
              <dd className="text-xl font-ultra text-black/80">
                <a href="https://www.esvincreative.in" className="hover:text-black hover:underline transition-colors font-bold text-black">esvincreative.in</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
