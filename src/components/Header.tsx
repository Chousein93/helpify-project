import { Heart, Menu, Shield, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";
import { useLanguage } from "@/hooks/useLanguage";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <Heart className="h-8 w-8 text-primary" />
            <Shield className="h-4 w-4 text-green-600 absolute -top-1 -right-1" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t('appName')}
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/help" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <HandHeart className="h-4 w-4" />
            {t('getHelp')}
          </Link>
          <Link to="/offer" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            <Shield className="h-4 w-4" />
            {t('helpOthers')}
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            {t('howItWorks')}
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/signin">{t('signIn')}</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">{t('signUp')}</Link>
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}