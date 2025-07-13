import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SignIn() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.includes('@')) {
      setError('Lütfen geçerli bir e-posta adresi girin');
      return;
    }

    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      setError('Bu e-posta adresi ile kayıtlı hesap bulunamadı.');
      return;
    }

    if (user.password !== password) {
      setError('Şifre yanlış.');
      return;
    }

    alert('Hoş geldiniz! Başarıyla giriş yaptınız.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Hesabınız yok mu? <Link to="/signup" className="text-primary hover:underline font-semibold">Kayıt Ol</Link>
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
            <CardTitle className="text-2xl">Hoş Geldiniz</CardTitle>
            <CardDescription>Topluluğumuza geri dönün</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="Şifrenizi girin"
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
              </div>

              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full">
                Giriş Yap
              </Button>
            </form>

            <div className="text-center mt-4">
              <Link to="/reset-password" className="text-sm text-primary hover:underline">
                Şifrenizi mi unuttunuz?
              </Link>
            </div>

            <div className="text-center mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Topluluğumuza yardım etmeye devam etmeye hazır mısınız?
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