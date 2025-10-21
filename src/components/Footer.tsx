export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-white py-12 relative" dir="rtl">
      {/* Egyptian Flag Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-[#CE1126]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#1A1A1A]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4" style={{ fontWeight: '600', color: '#C09F5F' }}>حامد بندق</h3>
            <p className="text-gray-300">
              خبرة تخدم... وطموح يبني
            </p>
            <p className="text-gray-300 mt-2">
              معاً لمستقبل أفضل لبورسعيد
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4" style={{ fontWeight: '600' }}>روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-[#CE1126] transition-colors"
                >
                  من هو حامد بندق
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('qualifications')}
                  className="text-gray-300 hover:text-[#CE1126] transition-colors"
                >
                  المؤهلات والخبرات
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('initiatives')}
                  className="text-gray-300 hover:text-[#CE1126] transition-colors"
                >
                  المبادرات المجتمعية
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('vision')}
                  className="text-gray-300 hover:text-[#CE1126] transition-colors"
                >
                  البرنامج الانتخابي
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4" style={{ fontWeight: '600' }}>تواصل معنا</h3>
            <p className="text-gray-300">
              الهاتف: 01XX-XXX-XXXX
            </p>
            <p className="text-gray-300 mt-2">
              البريد: info@hamedbondok.com
            </p>
            <p className="text-gray-300 mt-2">
              العنوان: مقر الحملة - بورسعيد
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            © 2025 الحملة الرسمية للمرشح حامد بندق - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
