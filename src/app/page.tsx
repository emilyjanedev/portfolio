import { BackgroundGradientAnimation } from "@/components/BackgroundGradient";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";

export default function Home() {
  return (
    <div>
      <BackgroundGradientAnimation>
        <Header />
        <HeroSection />
      </BackgroundGradientAnimation>
    </div>
  );
}
