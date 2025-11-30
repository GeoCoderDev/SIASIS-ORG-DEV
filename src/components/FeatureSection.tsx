import Image from "next/image";

interface FeatureItem {
  text: string;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  features: FeatureItem[];
  imageUrl: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  bgColor?: "gray" | "white";
}

export default function FeatureSection({
  title,
  description,
  features,
  imageUrl,
  imageAlt,
  imageOnLeft = true,
  bgColor = "gray"
}: FeatureSectionProps) {
  const bgClass = bgColor === "gray" ? "bg-gray-50" : "bg-white";
  
  return (
    <section className={`py-24 px-4 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center section-fade">
          <div className={`image-container ${imageOnLeft ? "" : "order-1 md:order-2"}`}>
            <img
              src={imageUrl}
              alt={imageAlt}
              width={800}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className={imageOnLeft ? "" : "order-2 md:order-1"}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg 
                    className="w-6 h-6 text-purple-600 mt-1 mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
