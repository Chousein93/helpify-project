import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
    </div>
  );
}