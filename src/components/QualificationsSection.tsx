import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export function QualificationsSection() {
  return (
    <section className="py-20 bg-[#F5F5F5] relative" dir="rtl">
      {/* Egyptian Flag Pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-[#CE1126]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#1A1A1A]" />
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ fontWeight: '700', color: '#1A1A1A' }}>
          مسيرة حافلة <span className="text-[#CE1126]">بالعلم والعمل</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-[#CE1126] shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardHeader>
              <div className="w-16 h-16 bg-[#CE1126] rounded-full flex items-center justify-center mb-4 mx-auto">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-center" style={{ color: '#1A1A1A' }}>
                التعليم الأكاديمي
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p style={{ color: '#1A1A1A' }}>
                ليسانس الآداب – قسم علم النفس – جامعة القاهرة
              </p>
              <p style={{ color: '#1A1A1A' }}>
                بكالوريوس التجارة – جامعة بورسعيد
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-[#C09F5F] shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardHeader>
              <div className="w-16 h-16 bg-[#C09F5F] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-center" style={{ color: '#1A1A1A' }}>
                الخبرة العملية
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p style={{ color: '#1A1A1A' }}>
                مؤسس مجموعة شركات بندق صن مول
              </p>
              <p style={{ color: '#1A1A1A' }}>
                صاحب ومدير شركة للاستيراد والتصدير
              </p>
              <p style={{ color: '#1A1A1A' }}>
                محاسب وأخصائي نفسي وأسري
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-[#1A1A1A] shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardHeader>
              <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-center" style={{ color: '#1A1A1A' }}>
                دورات متخصصة
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p style={{ color: '#1A1A1A' }}>
                دورات متقدمة في التحكيم وفض النزاعات
              </p>
              <p style={{ color: '#1A1A1A' }}>
                دورات في حقوق الإنسان والتنمية المجتمعية
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
