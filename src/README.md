# موقع الحملة الانتخابية - حامد بندق 🇪🇬

الموقع الرسمي للحملة الانتخابية للمرشح **حامد بندق** لعضوية مجلس النواب المصري عن **دائرة بورسعيد**.

## 🎯 نظرة عامة

صفحة هبوط احترافية وحديثة مبنية بتقنيات الويب الحديثة، تعرض:
- البرنامج الانتخابي الكامل
- المبادرات المجتمعية
- المؤهلات والخبرات
- قنوات التواصل مع الحملة

## 🚀 التقنيات المستخدمة

- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - للكتابة الآمنة
- **Tailwind CSS v4** - للتصميم الحديث
- **Vite** - أداة البناء السريعة
- **Lucide Icons** - الأيقونات
- **Shadcn/ui** - مكونات واجهة المستخدم

## 🎨 التصميم

- **نظام الألوان**: مستوحى من علم مصر 🇪🇬
  - الأحمر (#CE1126) - للحيوية والطاقة
  - الأسود (#1A1A1A) - للمصداقية
  - الذهبي (#C09F5F) - للتميز
- **Typography**: خط Cairo العربي
- **Layout**: Responsive لجميع الأجهزة
- **RTL Support**: دعم كامل للغة العربية

## 📦 التثبيت والتشغيل

### المتطلبات
- Node.js 20 أو أحدث
- npm أو yarn

### خطوات التشغيل المحلي

1. **استنساخ المشروع**
```bash
git clone https://github.com/YOUR_USERNAME/hamed-bondok-campaign.git
cd hamed-bondok-campaign
```

2. **تثبيت الحزم**
```bash
npm install
```

3. **تشغيل السيرفر المحلي**
```bash
npm run dev
```

4. **افتح المتصفح على**
```
http://localhost:5173
```

## 🏗️ البناء للإنتاج

```bash
npm run build
```

سيتم إنشاء مجلد `dist` يحتوي على الملفات الجاهزة للنشر.

### معاينة البناء
```bash
npm run preview
```

## 🌐 النشر

### النشر على Netlify

#### الطريقة الأولى: عبر Netlify CLI
```bash
# تثبيت Netlify CLI
npm install -g netlify-cli

# تسجيل الدخول
netlify login

# النشر
netlify deploy --prod
```

#### الطريقة الثانية: عبر Git
1. ارفع الكود على GitHub
2. اذهب إلى [Netlify](https://app.netlify.com)
3. اختر "New site from Git"
4. اختر المستودع
5. الإعدادات التلقائية جاهزة من ملف `netlify.toml`

### النشر على GitHub Pages

1. **تفعيل GitHub Pages**
   - اذهب إلى Settings → Pages
   - Source: اختر "GitHub Actions"

2. **رفع الكود**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. **النشر التلقائي**
   - سيتم النشر تلقائياً عند كل push على branch `main`
   - الموقع سيكون متاح على: `https://YOUR_USERNAME.github.io/hamed-bondok-campaign`

### النشر على Vercel

```bash
# تثبيت Vercel CLI
npm install -g vercel

# النشر
vercel --prod
```

## 📁 هيكل المشروع

```
├── components/           # مكونات React
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── InitiativesSection.tsx
│   ├── Navbar.tsx
│   ├── QualificationsSection.tsx
│   ├── VisionSection.tsx
│   └── ui/              # مكونات shadcn/ui
├── styles/              # ملفات CSS
├── App.tsx              # المكون الرئيسي
├── main.tsx             # نقطة الدخول
└── index.html           # HTML الرئيسي
```

## 🔧 التخصيص

### تغيير المعلومات
- معلومات المرشح في `components/AboutSection.tsx`
- البرنامج الانتخابي في `components/VisionSection.tsx`
- بيانات الاتصال في `components/ContactSection.tsx`

### تغيير الألوان
عدل المتغيرات في `styles/globals.css`:
```css
--accent: #CE1126;      /* اللون الأحمر */
--gold: #C09F5F;        /* الذهبي */
--primary: #1A1A1A;     /* الأسود */
```

## 📱 التواصل

- **البريد الإلكتروني**: info@hamedbondok.com
- **الهاتف**: 01XX-XXX-XXXX
- **الموقع**: [hamedbondok.com](https://hamedbondok.com)

## 📄 الترخيص

© 2025 الحملة الرسمية للمرشح حامد بندق - جميع الحقوق محفوظة

---

**خبرة تخدم... وطموح يبني** ✨
**معاً لمستقبل أفضل لبورسعيد** 🇪🇬
