import { Button } from "./ui/button";
import heroImage from "figma:asset/4adcf52d9f1a5f5ad10558148b7235a9068c3781.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden" dir="rtl">
      {/* Background - Egyptian Flag Inspired */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #1A1A1A 0%, #2A2A2A 50%, #1A1A1A 100%)'
        }}
      />
      
      {/* Red Accent Stripes */}
      <div 
        className="absolute top-0 left-0 right-0 h-2"
        style={{ background: '#CE1126' }}
      />
      
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20">
          {/* Content Side */}
          <div className="text-white space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ fontWeight: '700' }}>
                حامد بندق ابن بورسعيد:
                <br />
                <span className="text-[#CE1126]">خبرة تخدم... وطموح يبني</span>
              </h1>
              <h2 className="text-2xl md:text-3xl opacity-90" style={{ fontWeight: '400' }}>
                مرشحكم لعضوية مجلس النواب عن دائرة بورسعيد
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="bg-[#CE1126] hover:bg-[#A00E1E] text-white px-8 py-6 shadow-xl"
                style={{ fontSize: '1.125rem', fontWeight: '600' }}
              >
                انضم لحملتنا
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("vision")}
                className="bg-transparent border-2 border-[#C09F5F] text-[#C09F5F] hover:bg-[#C09F5F] hover:text-[#1A1A1A] px-8 py-6"
                style={{ fontSize: '1.125rem', fontWeight: '600' }}
              >
                تعرف على البرنامج
              </Button>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl mb-2" style={{ fontWeight: '700', color: '#C09F5F' }}>20+</div>
                <p className="text-sm opacity-80">سنة خبرة</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2" style={{ fontWeight: '700', color: '#C09F5F' }}>4+</div>
                <p className="text-sm opacity-80">مبادرات مجتمعية</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2" style={{ fontWeight: '700', color: '#C09F5F' }}>100%</div>
                <p className="text-sm opacity-80">التزام بالخدمة</p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative">
              {/* Decorative Elements - Egyptian Colors */}
              <div 
                className="absolute -top-4 -right-4 w-72 h-72 bg-[#CE1126] rounded-full opacity-20 blur-3xl"
                style={{ zIndex: 0 }}
              />
              <div 
                className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#C09F5F] rounded-full opacity-20 blur-3xl"
                style={{ zIndex: 0 }}
              />
              
              {/* Image Container */}
              <div className="relative" style={{ zIndex: 1 }}>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#CE1126]/20 to-transparent rounded-3xl" />
                <img
                  src={heroImage}
                  alt="حامد بندق"
                  className="relative rounded-3xl shadow-2xl w-full max-w-lg mx-auto object-cover"
                  style={{ 
                    border: '8px solid rgba(192, 159, 95, 0.4)',
                    aspectRatio: '3/4'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
