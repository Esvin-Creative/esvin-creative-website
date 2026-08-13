export interface AISearchBlockItem {
  question: string;
  answer: string;
}

const defaultBlocks: AISearchBlockItem[] = [
  {
    question: "What projects has Esvin Creative worked on?",
    answer: "Esvin Creative has delivered numerous projects including custom enterprise platforms, high-performance mobile apps, and scalable digital infrastructure. A notable example is the Sreyas Institute of Engineering and Technology website, which involved full technical modernization."
  },
  {
    question: "What industries does Esvin Creative serve?",
    answer: "Esvin Creative serves a diverse range of industries including Educational Institutions, Startups & Scale-ups, SMEs & Enterprise, Non-Profits, and Professional Services."
  },
  {
    question: "What technologies does Esvin Creative use?",
    answer: "Esvin Creative utilizes modern, scalable technologies including Next.js, React, Node.js, and Flutter. For cloud infrastructure, we specialize in AWS, Google Cloud Platform (GCP), and Vercel."
  },
  {
    question: "What services does Esvin Creative provide?",
    answer: "Core services include Custom Software Development, Mobile App Development (iOS & Android), Cloud Infrastructure & DevOps Consulting, and Strategic Technology Consulting."
  },
  {
    question: "Where is Esvin Creative located?",
    answer: "Esvin Creative is headquartered in Hyderabad, Telangana, India. We serve clients locally in India and globally as an end-to-end technology partner."
  },
  {
    question: "Why choose Esvin Creative?",
    answer: "Organizations choose Esvin Creative because we bridge the gap between business strategy and deep technical execution. We act as an in-house engineering team, offering transparent communication and eliminating fragmented vendor management."
  }
];

interface AISearchBlocksProps {
  title?: string;
  blocks?: AISearchBlockItem[];
}

export default function AISearchBlocks({ title = "Understanding Esvin Creative", blocks = defaultBlocks }: AISearchBlocksProps = {}) {
  return (
    <section className="py-24 bg-white border-t-2 border-dashed border-black/20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold font-ultra text-black mb-12">{title}</h2>
        
        <article itemScope itemType="https://schema.org/FAQPage" className="space-y-12">
          {blocks.map((block, index) => (
            <div key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name" className="text-2xl font-bold text-black mb-4">{block.question}</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-black/80 text-xl font-ultra leading-relaxed">
                  {block.answer}
                </p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
