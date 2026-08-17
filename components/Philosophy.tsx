import SketchHighlight from "./SketchHighlight";

export default function Philosophy() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white border-y-2 border-dashed border-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-ultra text-black mb-4 md:mb-6">
            Our Engineering <SketchHighlight color="blue">Philosophy</SketchHighlight>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 md:p-8 sketch-border sketch-shadow">
            <h3 className="text-xl md:text-2xl font-bold font-ultra text-black mb-3 md:mb-4">Architecture Over Frameworks</h3>
            <p className="text-sm sm:text-base md:text-lg font-ultra text-black/80 leading-relaxed">
              We believe that solid architectural decisions outlast any single technology trend. By focusing on clean code, scalable infrastructure, and rigorous engineering principles, we ensure the systems we build for our partners remain robust, maintainable, and adaptable as their businesses scale. We do not just write code; we engineer long-term technical assets.
            </p>
          </div>
          <div className="bg-highlight-pink/10 p-6 md:p-8 sketch-border sketch-shadow">
            <h3 className="text-xl md:text-2xl font-bold font-ultra text-black mb-3 md:mb-4">Eliminating Vendor Fragmentation</h3>
            <p className="text-sm sm:text-base md:text-lg font-ultra text-black/80 leading-relaxed">
              Modern digital systems often suffer from fragmented ownership—where one agency designs, another develops, and a third maintains. We act as an integrated engineering unit that takes full ownership of the product lifecycle. From the initial cloud infrastructure design to the final mobile application deployment, we provide a unified, transparent, and accountable partnership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
