import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" dir="rtl">
      {/* Red Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#CE1126]" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: '700', color: '#1A1A1A' }}>
              من قلب بورسعيد... 
              <span className="text-[#CE1126]">لخدمة أهلها</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#1A1A1A' }}>
              رجل أعمال، أخصائي نفسي، ومواطن بورسعيدي يجمع بين الخبرة الاقتصادية العملية والفهم العميق لاحتياجات المجتمع. يسعى لتوظيف نجاحه في عالم الأعمال لخدمة أهالي دائرته وتحقيق مستقبل أفضل للجميع.
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: '#1A1A1A' }}>
              حامد بندق ليس مجرد مرشح، بل هو ابن بورسعيد الذي يعرف احتياجات مدينته ويملك الخبرة والإرادة لتحقيق التغيير الحقيقي.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-2 -right-2 w-full h-full border-4 border-[#C09F5F] rounded-lg" style={{ zIndex: 0 }} />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1517916358207-1e49f666e851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMGNvbW11bml0eSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwODkxMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="حامد بندق مع أهالي بورسعيد"
                className="rounded-lg shadow-2xl w-full h-auto object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
