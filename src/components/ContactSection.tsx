import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("شكراً لانضمامك! سنتواصل معك قريباً.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-white relative" dir="rtl">
      {/* Red Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#CE1126]" />
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-4" style={{ fontWeight: '700', color: '#1A1A1A' }}>
          صوتك يصنع الفارق. <span className="text-[#CE1126]">كن جزءاً من التغيير.</span>
        </h2>
        <p className="text-center text-lg mb-12" style={{ color: '#1A1A1A' }}>
          انضم إلى حملتنا كمتطوع أو داعم، أو تواصل معنا للاستفسار
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-lg border-t-4 border-t-[#CE1126]">
            <CardHeader>
              <CardTitle style={{ color: '#1A1A1A' }}>انضم لحملتنا</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="الاسم الكامل"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white"
                    dir="rtl"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="رقم الهاتف"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-white"
                    dir="rtl"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white"
                    dir="rtl"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="رسالتك (اختياري)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white min-h-24"
                    dir="rtl"
                  />
                </div>
                <p className="text-sm" style={{ color: '#717182' }}>
                  بياناتك محمية ولن نستخدمها إلا للتواصل بخصوص الحملة
                </p>
                <Button 
                  type="submit" 
                  className="w-full bg-[#CE1126] hover:bg-[#A00E1E] text-white"
                >
                  إرسال
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-lg border-t-4 border-t-[#C09F5F]">
              <CardHeader>
                <CardTitle style={{ color: '#1A1A1A' }}>تواصل معنا</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#CE1126] rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p style={{ color: '#1A1A1A' }}>01XX-XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#C09F5F] rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p style={{ color: '#1A1A1A' }}>info@hamedbondok.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p style={{ color: '#1A1A1A' }}>مقر الحملة - بورسعيد</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-t-[#1A1A1A]">
              <CardHeader>
                <CardTitle style={{ color: '#1A1A1A' }}>تابعنا على</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 justify-center">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#CE1126] transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#CE1126] transition-colors"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#CE1126] transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
