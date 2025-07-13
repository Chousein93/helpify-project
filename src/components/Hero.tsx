import { Heart, Users, HandHeart, Shield, FileText, MessageCircle, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-yellow-50" />
      
      <div className="container relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-red-500 to-yellow-500 p-4 rounded-full">
                <Heart className="h-12 w-12 text-white" />
                <Shield className="h-6 w-6 text-green-400 absolute -top-1 -right-1 bg-white rounded-full p-1" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-red-600 via-yellow-600 to-red-600 bg-clip-text text-transparent">
              {t('heroTitle')}
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700" asChild>
              <Link to="/help">
                <HandHeart className="mr-2 h-5 w-5" />
                {t('getHelp')}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/offer">
                <Shield className="mr-2 h-5 w-5" />
                {t('helpOthers')}
              </Link>
            </Button>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="text-center p-4 rounded-lg bg-white/70 backdrop-blur-sm border border-gray-200 hover:shadow-md transition-shadow">
              <FileText className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm">{t('services.forms')}</h4>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/70 backdrop-blur-sm border border-gray-200 hover:shadow-md transition-shadow">
              <Users className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm">{t('services.appointments')}</h4>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/70 backdrop-blur-sm border border-gray-200 hover:shadow-md transition-shadow">
              <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm">{t('services.translation')}</h4>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/70 backdrop-blur-sm border border-gray-200 hover:shadow-md transition-shadow">
              <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm">{t('services.consultation')}</h4>
            </div>
          </div>
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">ID Verification</h3>
              <p className="text-gray-600">Alle Helfer sind verifiziert</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200">
              <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bewertungen</h3>
              <p className="text-gray-600">Transparente Bewertungen</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200">
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Versicherung</h3>
              <p className="text-gray-600">Vollständig versichert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}