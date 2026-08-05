import React from 'react';
import { useTranslation } from 'react-i18next';

const BLOG_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB13ICWkHteLn8hsx8VcnjhYfu9kj6p7clci4UiZUt5NjjBDaFtcKlmGzmwEZyJkYZkcYi6l4vAAeM7Uxlmcj7rNY9TrdHHKWZSG7ADUK9aCGyo8f6Ur6p1rKC-RhhDm_Q8Ggh_9YluIvDE9YuxBwsPYRbpb_JJbcuGaaQcMVV-ndM0jVO2hiyeoNm-gDbAnveM9FxDw3DiO2SQEjQ4YXS49-CJNIYyvCIpXkom3HILKCnP8Yf3CbFubw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCexczRmLOwIrX8kPfVhpqcNJXWCo7k-u20AoqmJ58aq5pADazAvxg5z8KhT4XZ-bkHOwfd_SvPe65RF-DC8U0rDMf7YYG5HSIMSw4-fspbItluIEsh9YiSHKGAqNlK387SeHcT2y_ftz0r3_FYuUkPWXZR-DHzMZTG-tZqpJ01EpUe8TwABmmjbzBF2DBWoOu7tOy6l4V-rhQZ1G_DzBRAL1y7fX4jcRBClzkme2tDYuDiHwtt1CZgYg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCBbTZcsCMbrfikLznIEivbhNXG6Xtm8AwxFeVBPAoZx1a1xkr7bltwE6fz6TYkSXokLnZcDXjEzr8isBP-HECWg0ybKq0CSCgIsRAbdn4EgWPP4JHCO1-hfHpbqYwHTX5GV3_ahxIrYe1lg7j5kYyCJrepvWou4uEbkvYc8D-5eUkuNNflBhVvLtpMKnT4DhEhfjeIZjANY0T2-L1NNGBL1ILeElyY_bFyl7_OOWqykeTirT2P0j6BGA"
];

export default function BlogSection() {
  const { t } = useTranslation();

  const articles = t('blog.articles', { returnObjects: true }) || [];

  return (
    <section className="py-section-gap px-edge-margin-mobile md:px-edge-margin-desktop max-w-container-max mx-auto">
      <h2 className="font-headline text-3xl md:text-headline-lg mb-12">{t('blog.title')}</h2>

      <div className="grid md:grid-cols-3 gap-gutter">
        {articles.map((article, idx) => (
          <a
            key={idx}
            href="https://wa.me/5219990000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer block"
          >
            <div className="aspect-video overflow-hidden mb-6 bg-surface-container-low">
              <img
                src={BLOG_IMAGES[idx % BLOG_IMAGES.length]}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-headline text-xl mb-3 group-hover:text-secondary transition-colors">
              {article.title}
            </h3>
            <p className="font-body text-on-surface-variant text-sm line-clamp-2 leading-relaxed">
              {article.desc}
            </p>
            <span className="inline-block mt-4 text-label-caps text-secondary font-bold group-hover:translate-x-2 transition-transform">
              {t('blog.readMore')}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
