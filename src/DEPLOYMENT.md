# دليل النشر الكامل 🚀

هذا الدليل يشرح بالتفصيل كيفية نشر الموقع على منصات مختلفة.

---

## 📋 قائمة التحقق قبل النشر

- [ ] تأكد من تشغيل `npm install` بنجاح
- [ ] اختبر الموقع محلياً باستخدام `npm run dev`
- [ ] قم ببناء المشروع `npm run build` وتأكد من عدم وجود أخطاء
- [ ] اختبر البناء باستخدام `npm run preview`
- [ ] تحقق من جميع الروابط والأزرار
- [ ] اختبر الموقع على أجهزة مختلفة (موبايل، تابلت، ديسكتوب)

---

## 1️⃣ النشر على Netlify (موصى به)

### لماذا Netlify؟
✅ نشر سريع وسهل  
✅ SSL مجاني تلقائياً  
✅ CDN عالمي  
✅ دعم النطاقات المخصصة  
✅ نشر تلقائي عند كل push

### خطوات النشر

#### أ) عبر واجهة Netlify (الأسهل)

1. **رفع الكود على GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/hamed-bondok-campaign.git
git push -u origin main
```

2. **إنشاء حساب على Netlify**
   - اذهب إلى [netlify.com](https://netlify.com)
   - سجل باستخدام حساب GitHub

3. **ربط المستودع**
   - اضغط "Add new site" → "Import an existing project"
   - اختر "GitHub"
   - اختر المستودع `hamed-bondok-campaign`

4. **إعدادات البناء** (تلقائية من netlify.toml)
   - Build command: `npm run build`
   - Publish directory: `dist`
   - اضغط "Deploy site"

5. **تخصيص النطاق** (اختياري)
   - Site settings → Domain management
   - Add custom domain: `hamedbondok.com`

#### ب) عبر Netlify CLI

```bash
# 1. تثبيت Netlify CLI
npm install -g netlify-cli

# 2. تسجيل الدخول
netlify login

# 3. البناء
npm run build

# 4. النشر
netlify deploy --prod --dir=dist
```

### إعداد النطاق المخصص

1. في لوحة تحكم Netlify:
   - Domain settings → Add custom domain
   - أدخل: `hamedbondok.com`

2. في موقع مزود النطاق (GoDaddy, Namecheap, إلخ):
   - أضف سجل CNAME:
     - Name: `www`
     - Value: `YOUR_SITE.netlify.app`
   - أو سجل A:
     - Name: `@`
     - Value: `75.2.60.5`

3. الانتظار (يستغرق حتى 24 ساعة)

---

## 2️⃣ النشر على GitHub Pages

### خطوات النشر

1. **إنشاء مستودع على GitHub**
   - اسم المستودع: `hamed-bondok-campaign`
   - عام أو خاص (حسب الرغبة)

2. **رفع الكود**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hamed-bondok-campaign.git
git push -u origin main
```

3. **تفعيل GitHub Pages**
   - اذهب إلى Settings → Pages
   - Source: اختر "GitHub Actions"

4. **النشر التلقائي**
   - الموقع موجود بالفعل في `.github/workflows/deploy.yml`
   - سيتم النشر تلقائياً عند كل push

5. **الموقع سيكون متاح على:**
```
https://YOUR_USERNAME.github.io/hamed-bondok-campaign
```

### استخدام نطاق مخصص مع GitHub Pages

1. **إضافة ملف CNAME**
```bash
echo "hamedbondok.com" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain"
git push
```

2. **إعداد DNS**
   - أضف سجل A للنطاق:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - أضف CNAME للـ www:
     ```
     www CNAME YOUR_USERNAME.github.io
     ```

3. **في GitHub Settings → Pages**
   - Custom domain: أدخل `hamedbondok.com`
   - ✅ Enforce HTTPS

---

## 3️⃣ النشر على Vercel

### خطوات النشر

#### أ) عبر Vercel CLI

```bash
# 1. تثبيت Vercel CLI
npm install -g vercel

# 2. تسجيل الدخول
vercel login

# 3. النشر
vercel --prod
```

#### ب) عبر واجهة Vercel

1. اذهب إلى [vercel.com](https://vercel.com)
2. "Add New" → "Project"
3. اختر المستودع من GitHub
4. اضغط "Deploy"

### إعدادات Vercel (إن لزم)
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

---

## 4️⃣ النشر على خادم خاص (VPS)

### المتطلبات
- خادم Linux (Ubuntu 22.04 موصى به)
- Nginx أو Apache
- Node.js 20+

### خطوات النشر

1. **بناء المشروع محلياً**
```bash
npm run build
```

2. **رفع مجلد dist للخادم**
```bash
scp -r dist/ user@your-server.com:/var/www/hamedbondok
```

3. **إعداد Nginx**
```nginx
server {
    listen 80;
    server_name hamedbondok.com www.hamedbondok.com;
    root /var/www/hamedbondok;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

4. **تفعيل SSL مع Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d hamedbondok.com -d www.hamedbondok.com
```

---

## 🔍 اختبار النشر

بعد النشر، تأكد من:

- [ ] الموقع يفتح بدون أخطاء
- [ ] جميع الصور تظهر بشكل صحيح
- [ ] الأزرار والروابط تعمل
- [ ] النموذج يرسل البيانات بنجاح
- [ ] الموقع responsive على الموبايل
- [ ] السرعة جيدة (اختبر على PageSpeed Insights)
- [ ] SSL شغال (القفل الأخضر في المتصفح)

### أدوات الاختبار

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **SSL Checker**: https://www.sslshopper.com/ssl-checker.html

---

## 🐛 حل المشاكل الشائعة

### المشكلة: الموقع يظهر صفحة بيضاء

**الحل:**
1. افتح Developer Tools (F12)
2. تحقق من Console للأخطاء
3. تأكد من مسار `base` في `vite.config.ts`
4. لو GitHub Pages: غير base إلى `/hamed-bondok-campaign/`

### المشكلة: الصور لا تظهر

**الحل:**
1. تأكد أن الصور في مجلد `public`
2. استخدم المسار النسبي: `/image.jpg` بدلاً من `./image.jpg`
3. تحقق من حجم الصور (يفضل أقل من 1MB)

### المشكلة: البناء يفشل

**الحل:**
```bash
# حذف node_modules وإعادة التثبيت
rm -rf node_modules
npm install

# حذف الـ cache
npm cache clean --force

# البناء مرة أخرى
npm run build
```

---

## 📊 تحسين الأداء

### قبل النشر

1. **تحسين الصور**
```bash
# استخدم أدوات ضغط الصور
https://tinypng.com/
https://squoosh.app/
```

2. **فحص الحجم**
```bash
npm run build
# تحقق من حجم dist
```

3. **تفعيل Lazy Loading للصور**
```tsx
<img loading="lazy" src="..." />
```

---

## 🔐 الأمان

- ✅ استخدم HTTPS دائماً
- ✅ لا ترفع `.env` على GitHub
- ✅ استخدم Environment Variables للمفاتيح السرية
- ✅ فعّل CORS بشكل صحيح إذا كان لديك API

---

## 📞 الدعم

إذا واجهت أي مشكلة:
1. راجع الأخطاء في Console
2. تحقق من GitHub Issues
3. تواصل مع فريق الدعم

---

**حظاً موفقاً في النشر! 🚀**
