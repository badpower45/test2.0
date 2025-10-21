import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BookOpen, Heart, Users, Handshake } from "lucide-react";

export function InitiativesSection() {
  return (
    <section className="py-20 bg-white relative" dir="rtl">
      {/* Red Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#CE1126]" />
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ fontWeight: '700', color: '#1A1A1A' }}>
          مبادرات <span className="text-[#CE1126]">على أرض الواقع</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-xl transition-shadow border-2 border-[#CE1126]/20 hover:border-[#CE1126] bg-white">
            <CardHeader>
              <div className="w-14 h-14 bg-[#CE1126] rounded-full flex items-center justify-center mb-3 mx-auto">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-center" style={{ color: '#1A1A1A', fontSize: '1.25rem' }}>
                مبادرة بلا أعباء التعليمية
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p style={{ color: '#1A1A1A', fontSize: '0.95rem' }}>
                دعم الطلاب والأسر في مواجهة تكاليف التعليم
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-2 border-[#C09F5F]/20 hover:border-[#C09F5F] bg-white">
            <CardHeader>
              <div className="w-14 h-14 bg-[#C09F5F] rounded-full flex items-center justify-center mb-3 mx-auto">
                <Handshake className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-center" style={{ color: '#1A1A1A', fontSize: '1.25rem' }}>
                دعم الأسر المستحقة
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p style={{ color: '#1A1A1A', fontSize: '0.95rem' }}>
                توفير الغذاء والملابس والمساعدات للأسر المحتاجة
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-2 border-[#1A1A1A]/20 hover:border-[#1A1A1A] bg-white">
            <CardHeader>
              <div className="w-14 h-14 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-3 mx-auto">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-center" style={{ color: '#1A1A1A', fontSize: '1.25rem' }}>
                مؤسسة دروب الخير
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p style={{ color: '#1A1A1A', fontSize: '0.95rem' }}>
                العمل الخيري المنظم لخدمة المجتمع البورسعيدي
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-2 border-[#CE1126]/20 hover:border-[#CE1126] bg-white">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-[#CE1126] to-[#C09F5F] rounded-full flex items-center justify-center mb-3 mx-auto">
                <Users className="w-7 h-7 text-white" />
              </div>
              <CardTitle className="text-center" style={{ color: '#1A1A1A', fontSize: '1.25rem' }}>
                تنمية المجتمع المحلي
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p style={{ color: '#1A1A1A', fontSize: '0.95rem' }}>
                برامج تنموية شاملة لرفع مستوى المعيشة
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="text-center mt-12 text-lg italic" style={{ color: '#CE1126', fontWeight: '600' }}>
          "لأن خدمة المجتمع ليست مجرد شعار، بل هي عمل ومسؤولية."
        </p>
      </div>
    </section>
  );
}
