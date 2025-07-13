import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Simulated user database
  const users = [
    { email: 'user@example.com', password: 'password123' },
    { email: 'john@example.com', password: 'john123' },
    { email: 'jane@example.com', password: 'jane123' },
    { email: 'hasan123@gmail.com', password: 'Hasan.1h' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!email.includes('@')) {
      setMessage('Lütfen geçerli bir e-posta adresi girin');
      setIsSuccess(false);
      return;
    }

    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      setMessage('Bu e-posta adresi ile kayıtlı hesap bulunamadı.');
      setIsSuccess(false);
      return;
    }

    setMessage('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.');
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Şifrenizi hatırladınız mı? <Link to="/signin" className="text-primary hover:underline font-semibold">Giriş Yap</Link>
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
            <CardTitle className="text-2xl">Şifre Sıfırla</CardTitle>
            <CardDescription>
              E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">E-posta Adresi</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="E-posta adresinizi girin"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {message && !isSuccess && (
                  <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                    {message}
                  </div>
                )}

                <Button type="submit" className="w-full">
                  Şifre Sıfırlama Bağlantısı Gönder
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="p-4 text-sm text-green-600 bg-green-50 border border-green-200 rounded-md">
                  {message}
                </div>
                <p className="text-sm text-gray-600">
                  E-posta kutunuzu kontrol edin ve bağlantıya tıklayarak şifrenizi sıfırlayın.
                </p>
              </div>
            )}

            <div className="text-center mt-6">
              <Link to="/signin" className="text-sm text-primary hover:underline">
                ← Giriş Sayfasına Dön
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}