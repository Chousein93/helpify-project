import { Heart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Helpify
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/browse" className="text-sm font-medium hover:text-primary transition-colors">
            Yardım Ara
          </Link>
          <Link to="/post" className="text-sm font-medium hover:text-primary transition-colors">
            Yardım İste
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            Hakkımızda
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/signin">Giriş Yap</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Kayıt Ol</Link>
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