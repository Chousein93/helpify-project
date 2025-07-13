import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Eye, EyeOff, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Simulated user database
  const users = [
    { email: 'user@example.com', password: 'password123' },
    { email: 'john@example.com', password: 'john123' },
    { email: 'jane@example.com', password: 'jane123' },
    { email: 'hasan123@gmail.com', password: 'Hasan.1h' }
  ];

  const passwordRequirements = {
    length: password.length >= 8,
    letter: /[a-zA-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
  };

  const isPasswordValid = Object.values(passwordRequirements).every(Boolean);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username.length < 3) {
      setError('Kullanıcı adı en az 3 karakter olmalıdır');
      return;
    }

    if (!email.includes('@')) {
      setError('Lütfen geçerli bir e-posta adresi girin');
      return;
    }

    const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
      setError('Bu e-posta adresi ile zaten bir hesap mevcut. Lütfen giriş yapın.');
      return;
    }

    if (!isPasswordValid) {
      setError('Şifre gereksinimleri karşılanmıyor');
      return;
    }

    alert('Hesap başarıyla oluşturuldu! Helpify\'a hoş geldiniz!');
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Zaten hesabınız var mı? <Link to="/signin" className="text-primary hover:underline font-semibold">Giriş Yap</Link>
          </p>
        </div>

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Helpify
              </span>
            </Link>
            <CardTitle className="text-2xl">Hesap Oluştur</CardTitle>
            <CardDescription>Yardımsever topluluğumuza katılın</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">Kullanıcı Adı</label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Kullanıcı adınızı girin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">E-posta</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Şifre</label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Şifre oluşturun"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                
                {password && (
                  <div className="space-y-1 text-xs">
                    <div className={`flex items-center gap-1 ${passwordRequirements.length ? 'text-green-600' : 'text-red-600'}`}>
                      {passwordRequirements.length ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      En az 8 karakter
                    </div>
                    <div className={`flex items-center gap-1 ${passwordRequirements.letter ? 'text-green-600' : 'text-red-600'}`}>
                      {passwordRequirements.letter ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      En az bir harf
                    </div>
                    <div className={`flex items-center gap-1 ${passwordRequirements.number ? 'text-green-600' : 'text-red-600'}`}>
                      {passwordRequirements.number ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      En az bir rakam
                    </div>
                    <div className={`flex items-center gap-1 ${passwordRequirements.special ? 'text-green-600' : 'text-red-600'}`}>
                      {passwordRequirements.special ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      En az bir özel karakter
                    </div>
                  </div>
                )}
              </div>

              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full">
                Hesap Oluştur
              </Button>
            </form>

            <div className="text-center mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Topluluğunuzda fark yaratmaya hazır mısınız? Hadi başlayalım!
              </p>
            </div>

            <div className="text-center mt-4">
              <Link to="/" className="text-sm text-primary hover:underline">
                ← Ana Sayfaya Dön
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}