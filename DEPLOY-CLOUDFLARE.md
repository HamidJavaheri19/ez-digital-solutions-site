# راهنمای دپلوی در Cloudflare Pages

## پیش‌نیازها

1. **حساب Cloudflare**: اگر ندارید، از [cloudflare.com](https://cloudflare.com) ثبت‌نام کنید
2. **Node.js**: نسخه 18 یا بالاتر

## مراحل دپلوی

### ۱. ورود به Cloudflare

```bash
npx wrangler login
```

مرورگر باز می‌شود و باید با حساب Cloudflare وارد شوید.

### ۲. ساخت پروژه (فقط بار اول)

```bash
npx wrangler pages project create ez-digital-solutions
```

اگر پروژه از قبل ساخته شده، این مرحله را رد کنید.

### ۳. دپلوی

```bash
npm run deploy
```

یا به صورت دستی:

```bash
npm run build
npx wrangler pages deploy dist --project-name=ez-digital-solutions
```

### ۴. آدرس سایت

بعد از دپلوی، سایت در آدرس زیر در دسترس است:

**https://ez-digital-solutions.pages.dev**

## متغیرهای محیطی (اختیاری)

برای Formspree، متغیر `VITE_FORMSPREE_FORM_ID` را در **Cloudflare Dashboard** تنظیم کنید:

1. به [dash.cloudflare.com](https://dash.cloudflare.com) بروید
2. Pages → ez-digital-solutions → Settings → Environment variables
3. متغیر `VITE_FORMSPREE_FORM_ID` را اضافه کنید (مقدار: فرم‌آی‌دی Formspree شما)

**توجه:** بعد از اضافه کردن متغیر، یک بار دیگر دپلوی کنید.

## دامنه سفارشی

برای اتصال دامنه خود (مثلاً ezdigitalsolutions.nl):

1. Cloudflare Dashboard → Pages → ez-digital-solutions → Custom domains
2. دامنه را اضافه کنید و دستورالعمل‌ها را دنبال کنید
