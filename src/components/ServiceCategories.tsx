import { 
  Passport, 
  Briefcase, 
  Home, 
  Heart, 
  GraduationCap, 
  Building, 
  Baby, 
  Scale 
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function ServiceCategories() {
  const { t } = useLanguage();

  const categories = [
    {
      icon: Passport,
      key: 'visa',
      color: 'text-red-600 bg-red-50'
    },
    {
      icon: Briefcase,
      key: 'work',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Home,
      key: 'housing',
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: Heart,
      key: 'health',
      color: 'text-pink-600 bg-pink-50'
    },
    {
      icon: GraduationCap,
      key: 'education',
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: Building,
      key: 'business',
      color: 'text-yellow-600 bg-yellow-50'
    },
    {
      icon: Baby,
      key: 'family',
      color: 'text-orange-600 bg-orange-50'
    },
    {
      icon: Scale,
      key: 'legal',
      color: 'text-gray-600 bg-gray-50'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hizmet Kategorileri
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hangi konuda yardıma ihtiyacınız var? Size en uygun kategoriyi seçin.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.key}
                className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200"
              >
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t(`categories.${category.key}`)}
                </h3>
                <p className="text-sm text-gray-600">
                  Uzman yardımcılar
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}