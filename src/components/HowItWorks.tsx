import { Search, MessageSquare, CheckCircle, Shield } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: "Yardımcı Bul",
      description: "İhtiyacınıza uygun doğrulanmış yardımcıları keşfedin",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: MessageSquare,
      title: "İletişime Geç",
      description: "Güvenli mesajlaşma ile detayları konuşun",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: CheckCircle,
      title: "Buluşun",
      description: "Belirlenen yerde ve zamanda buluşup işinizi halledin",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Shield,
      title: "Değerlendirin",
      description: "Hizmeti değerlendirin ve güvenli ödeme yapın",
      color: "text-orange-600 bg-orange-50"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('howItWorks')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            4 basit adımda resmi işlerinizi halledin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mx-auto mb-6 relative`}>
                    <Icon className="h-10 w-10" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🛡️ Güvenlik Önceliğimiz
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span>ID + Selfie Doğrulama</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Sigorta Koruması</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-green-600" />
                <span>Güvenli Ödeme</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}