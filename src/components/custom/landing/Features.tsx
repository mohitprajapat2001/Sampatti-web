import { TextReveal } from "@/components/magicui/text-reveal";

export default function Features() {
  const features = [
    "Easy deposits and withdrawals",
    "Low fees",
    "Fast transactions",
    "Fast loan approval",
    "Secure and reliable",
  ];

  return (
    <div className="relative z-10 flex flex-col items-center space-y-8">
      {features.map((feature, index) => (
        <TextReveal key={index} className="capitalize">
          {feature}
        </TextReveal>
      ))}
    </div>
  );
}
