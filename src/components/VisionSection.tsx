import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { TrendingUp, Users, GraduationCap, Building2 } from "lucide-react";

export function VisionSection() {
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
          برنامجنا الانتخابي: <span className="text-[#CE1126]">رؤية لمستقبل بورسعيد</span>
        </h2>
        <Tabs defaultValue="economy" className="max-w-5xl mx-auto" dir="rtl">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white mb-8">
            <TabsTrigger value="economy" className="data-[state=active]:bg-[#CE1126] data-[state=active]:text-white">
              <TrendingUp className="w-4 h-4 ml-2" />
              التنمية الاقتصادية
            </TabsTrigger>
            <TabsTrigger value="family" className="data-[state=active]:bg-[#C09F5F] data-[state=active]:text-white">
              <Users className="w-4 h-4 ml-2" />
              الأسرة والشباب
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white">
              <GraduationCap className="w-4 h-4 ml-2" />
              التعليم والصحة
            </TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-[#CE1126] data-[state=active]:text-white">
              <Building2 className="w-4 h-4 ml-2" />
              الخدمات المجتمعية
            </TabsTrigger>
          </TabsList>

          <TabsContent value="economy">
            <Card className="border-r-4 border-r-[#CE1126]">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl mb-4" style={{ fontWeight: '600', color: '#1A1A1A' }}>تنمية اقتصادية وخلق فرص عمل</h3>
                <ul className="space-y-3" style={{ color: '#1A1A1A' }}>
                  <li className="flex items-start">
                    <span className="text-[#CE1126] ml-3">◆</span>
                    <span>تشجيع المشاريع الصغيرة والمتوسطة من خلال تسهيل الإجراءات وتوفير التمويل</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CE1126] ml-3">◆</span>
                    <span>الاستفادة من موقع بورسعيد الاستراتيجي لتطوير منطقة اقتصادية متكاملة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CE1126] ml-3">◆</span>
                    <span>دعم الصناعات المحلية والحرف اليدوية لتعزيز الاقتصاد المحلي</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CE1126] ml-3">◆</span>
                    <span>خلق آلاف فرص العمل من خلال جذب الاستثمارات والمشاريع الجديدة</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="family">
            <Card className="border-r-4 border-r-[#C09F5F]">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl mb-4" style={{ fontWeight: '600', color: '#1A1A1A' }}>دعم الأسرة والشباب</h3>
                <ul className="space-y-3" style={{ color: '#1A1A1A' }}>
                  <li className="flex items-start">
                    <span className="text-[#C09F5F] ml-3">◆</span>
                    <span>برامج إرشاد أسري ونفسي مجانية تستفيد من خبرتي كأخصائي نفسي</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C09F5F] ml-3">◆</span>
                    <span>مراكز شبابية متطورة توفر أنشطة رياضية وثقافية وتدريبية</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C09F5F] ml-3">◆</span>
                    <span>دعم الزواج والمساعدة في تجهيز الشباب للحياة الزوجية</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C09F5F] ml-3">◆</span>
                    <span>برامج تدريب مهني وتأهيل الشباب لسوق العمل</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card className="border-r-4 border-r-[#1A1A1A]">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl mb-4" style={{ fontWeight: '600', color: '#1A1A1A' }}>تطوير التعليم والصحة</h3>
                <ul className="space-y-3" style={{ color: '#1A1A1A' }}>
                  <li className="flex items-start">
                    <span className="text-[#1A1A1A] ml-3">◆</span>
                    <span>توسيع مبادرة "بلا أعباء" لتشمل المزيد من الطلاب والأسر</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A1A1A] ml-3">◆</span>
                    <span>تحسين البنية التحتية للمدارس والمستشفيات في بورسعيد</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A1A1A] ml-3">◆</span>
                    <span>برامج رعاية صحية مجانية ووقائية للأسر المحتاجة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1A1A1A] ml-3">◆</span>
                    <span>تطوير التعليم التقني والمهني لمواكبة سوق العمل</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card className="border-r-4 border-r-[#CE1126]">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl mb-4" style={{ fontWeight: '600', color: '#1A1A1A' }}>خدمات مجتمعية متكاملة</h3>
                <ul className="space-y-3" style={{ color: '#1A1A1A' }}>
                  <li className="flex items-start">
                    <span className="text-[#CE1126] ml-3">◆</span>
                    <span>تطوير البنية التحتية للأحياء السكنية وتحسين الخدمات الأساسية</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CE1126] ml-3">◆</span>
                    <span>توسيع شبكات النقل العام لتسهيل التنقل داخل المدينة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CE1126] ml-3">◆</span>
                    <span>مشاريع إنارة وتجميل الشوارع والحدائق العامة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CE1126] ml-3">◆</span>
                    <span>نظام متطور لتلقي شكاوى المواطنين ومتابعتها بشفافية</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
