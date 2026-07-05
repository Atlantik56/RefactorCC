import '../src/styles.css';

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self' http://localhost:* http://127.0.0.1:* ws://localhost:* ws://127.0.0.1:*",
  "form-action 'self'",
].join('; ');

export const metadata = {
  metadataBase: new URL('https://atlantik56.github.io/VeloCore/'),
  title: 'VeloCore — Велоспорт без компромиссов',
  description: 'VeloCore — статический сайт велосипедного клуба с дисциплинами, маршрутами, профилями высот и тренировочным CTA.',
  openGraph: {
    type: 'website',
    title: 'VeloCore — Велоспорт без компромиссов',
    description: 'Дисциплины, маршруты с профилем высот и сообщество райдеров для сезона 2026.',
    images: ['assets/kit-showcase-1.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#12161d',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
