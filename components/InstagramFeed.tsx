"use client";


export default function InstagramFeed() {
  return (
    <section className="py-24 bg-[#f8fafc] text-black overflow-hidden relative border-t-2 border-dashed border-black">
      
      {/* Hand drawn details */}
      <div className="absolute bottom-10 right-20 opacity-20 hidden md:block">
        <img src="/assets/icons/sparkles-drawn.svg" className="w-24 h-24 animate-wobble" style={{ animationDelay: '0.8s' }} alt="" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
            Follow Our Journey
          </h2>
          <p className="mt-4 text-black/80 text-xl max-w-2xl mx-auto font-ultra">
            Behind the scenes and what we've been building on Instagram.
          </p>
        </div>


      </div>


    </section>
  );
}
