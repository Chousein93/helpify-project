import { Heart, Users, HandHeart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />
      
      <div className="container relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart className="h-16 w-16 text-primary animate-pulse-glow" />
              <div className="absolute -top-2 -right-2 h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Topluluk Gücüyle
            </span>
            <br />
            <span className="text-gray-900">Yardımlaşma</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Çevrenizdeki insanlarla bağlantı kurun, yardım edin ve yardım alın. 
            Birlikte daha güçlü bir topluluk oluşturalım.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/browse">
                <HandHeart className="mr-2 h-5 w-5" />
                Yardım Etmeye Başla
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/post">
                <Users className="mr-2 h-5 w-5" />
                Yardım İste
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Topluluk</h3>
              <p className="text-gray-600">Çevrenizdeki yardımsever insanlarla tanışın</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200">
              <HandHeart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Yardımlaşma</h3>
              <p className="text-gray-600">Küçük yardımlar büyük değişimler yaratır</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200">
              <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Yakın Çevre</h3>
              <p className="text-gray-600">Bulunduğunuz bölgedeki fırsatları keşfedin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}