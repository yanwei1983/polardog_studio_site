'use client';

/* oxlint-disable next/no-img-element */
/* Locale links use a full navigation so static page metadata also changes. */
/* oxlint-disable next/no-html-link-for-pages */

import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Menu,
  MoveHorizontal,
  X,
} from 'lucide-react';
import { PRODUCT_URL, siteCopy, type Locale } from '@/lib/site-copy';
import { useStudioMotion } from '@/lib/use-studio-motion';

const anchors = ['works', 'about', 'values', 'join', 'contact'];
const languageStorageKey = 'polardog-language';

export function StudioSite({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const rootRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useStudioMotion(rootRef);

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    // Only the default entry follows a saved preference. /en/ is always English.
    try {
      const navigation = performance.getEntriesByType('navigation')[0] as
        | PerformanceNavigationTiming
        | undefined;
      if (
        locale === 'zh' &&
        localStorage.getItem(languageStorageKey) === 'en' &&
        navigation?.type !== 'back_forward'
      ) {
        window.location.replace(`/en/${window.location.hash}`);
      }
    } catch {
      // Navigation and switching still work when browser storage is unavailable.
    }
  }, [locale]);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [menuOpen]);

  function switchLanguage(
    event: MouseEvent<HTMLAnchorElement>,
    nextLocale: Locale,
  ) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    try {
      localStorage.setItem(languageStorageKey, nextLocale);
    } catch {
      // A private browser may disable persistent storage.
    }
    event.currentTarget.href = `${nextLocale === 'en' ? '/en/' : '/'}${window.location.hash}`;
  }

  return (
    <div
      className="site-shell"
      ref={rootRef}
      data-locale={locale}
      lang={locale === 'zh' ? 'zh-CN' : 'en'}
    >
      <a className="skip-link" href="#main">
        {copy.skip}
      </a>
      <header className="site-nav">
        <a
          className="brand"
          href="#top"
          aria-label={copy.home}
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>
            POLARDOG<span className="brand-studio">STUDIO</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label={copy.navigation}>
          {anchors.map((anchor, index) => (
            <a key={anchor} href={`#${anchor}`}>
              {copy.nav[index]}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <nav className="language-switch" aria-label={copy.language}>
            <a
              href="/"
              lang="zh-CN"
              hrefLang="zh-CN"
              aria-current={locale === 'zh' ? 'page' : undefined}
              onClick={(event) => switchLanguage(event, 'zh')}
            >
              中文
            </a>
            <span aria-hidden="true">/</span>
            <a
              href="/en/"
              lang="en"
              hrefLang="en"
              aria-current={locale === 'en' ? 'page' : undefined}
              onClick={(event) => switchLanguage(event, 'en')}
            >
              EN
            </a>
          </nav>
          <button
            className="menu-toggle"
            type="button"
            ref={menuButtonRef}
            aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        <nav
          className="mobile-navigation"
          id="mobile-navigation"
          aria-label={copy.navigation}
          hidden={!menuOpen}
        >
          {anchors.map((anchor, index) => (
            <a
              key={anchor}
              href={`#${anchor}`}
              onClick={() => setMenuOpen(false)}
            >
              <span>0{index + 1}</span>
              {copy.nav[index]}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <picture>
              <source
                media="(max-width: 700px)"
                srcSet="/images/second-epoch-hero-mobile.webp"
              />
              <img
                src="/images/second-epoch-hero.webp"
                alt=""
                width="1916"
                height="821"
                fetchPriority="high"
                draggable="false"
              />
            </picture>
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" />
              {copy.hero.label}
            </p>
            <h1 id="hero-title">
              {copy.hero.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="hero-description">
              {copy.hero.description}
              <br />
              {copy.hero.descriptionNext}
            </p>
            <a className="button button-light" href="#works">
              {copy.hero.action}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-coordinate" aria-hidden="true">
            <i />
            POLARDOG
            <br />
            <span>BEYOND THE KNOWN</span>
          </div>
          <div className="hero-bottom">
            <a className="scroll-cue" href="#works">
              <ArrowDown size={16} aria-hidden="true" />
              {copy.hero.scroll}
            </a>
            <p className="drag-hint">
              <MoveHorizontal size={18} aria-hidden="true" />
              {copy.hero.drag}
            </p>
            <a
              className="hero-project"
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                {copy.hero.featured}
                <strong>{copy.hero.project}</strong>
              </span>
              <ArrowUpRight size={22} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="section works"
          id="works"
          aria-labelledby="works-title"
        >
          <div className="section-heading">
            <div>
              <p className="section-kicker">
                <span>01</span>
                {copy.works.label}
              </p>
              <h2 id="works-title">{copy.works.title}</h2>
            </div>
            <p className="section-intro">{copy.works.intro}</p>
          </div>
          <article className="product-feature">
            <a
              className="product-art"
              href={PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${copy.works.name} · ${copy.works.action}`}
            >
              <img
                src="/images/second-epoch-hero.webp"
                alt={copy.works.image}
                width="1916"
                height="821"
                loading="lazy"
                draggable="false"
              />
              <div className="product-art-shade" />
              <div className="product-art-top">
                <span>{copy.works.genre}</span>
                <span className="product-status">
                  <i />
                  {copy.works.status}
                </span>
              </div>
              <div className="product-art-title">
                <p>{copy.works.subtitle}</p>
                <h3>{copy.works.name}</h3>
              </div>
              <span className="product-art-arrow">
                <ArrowUpRight size={26} aria-hidden="true" />
              </span>
            </a>
            <div className="product-info">
              <div>
                <h4>{copy.works.tagline}</h4>
                <ul className="product-tags" aria-label={copy.works.features}>
                  {copy.works.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="product-description">
                <p>{copy.works.description}</p>
                <a
                  className="text-link"
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.works.action}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        </section>

        <section
          className="section about"
          id="about"
          aria-labelledby="about-title"
        >
          <p className="section-kicker">
            <span>02</span>
            {copy.about.label}
          </p>
          <h2 id="about-title">
            {copy.about.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <div className="about-story">
            <p className="about-statement">{copy.about.statement}</p>
            <div>
              <p>{copy.about.body}</p>
              <a className="text-link" href="#values">
                {copy.about.link}
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="about-pillars">
            {copy.about.pillars.map((pillar, index) => (
              <article key={pillar.title}>
                <span className="pillar-number">0{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
          <div className="about-wordmark" aria-hidden="true">
            POLARDOG
          </div>
        </section>

        <section
          className="section values"
          id="values"
          aria-labelledby="values-title"
        >
          <div className="values-intro">
            <p className="section-kicker">
              <span>03</span>
              {copy.values.label}
            </p>
            <h2 id="values-title">
              {copy.values.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="section-intro">{copy.values.intro}</p>
            <span className="values-motto" aria-hidden="true">
              CURIOUS BY NATURE.
              <br />
              CREATORS BY CHOICE.
            </span>
          </div>
          <div className="value-list">
            {copy.values.items.map((value, index) => (
              <article className="value-item" key={value.title}>
                <span className="value-number">0{index + 1}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section join"
          id="join"
          aria-labelledby="join-title"
        >
          <p className="section-kicker">
            <span>04</span>
            {copy.join.label}
          </p>
          <div className="join-layout">
            <div>
              <h2 id="join-title">
                {copy.join.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
              <p className="join-description">{copy.join.description}</p>
              <a
                className="button button-dark"
                href={`mailto:jobs@polardog.cc?subject=${encodeURIComponent(copy.join.subject)}`}
              >
                {copy.join.action}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <p className="join-note">{copy.join.note}</p>
            </div>
            <div className="join-roles">
              <p>{copy.join.areas}</p>
              <ul>
                {copy.join.roles.map((role, index) => (
                  <li key={role}>
                    <span>0{index + 1}</span>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="section contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-top">
            <div>
              <p className="section-kicker">
                <span>05</span>
                {copy.contact.label}
              </p>
              <h2 id="contact-title">{copy.contact.title}</h2>
              <p className="section-intro">{copy.contact.description}</p>
              <a className="contact-email" href="mailto:hello@polardog.cc">
                hello@polardog.cc
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="contact-details">
              <div>
                <h3>{copy.contact.business}</h3>
                <a href="mailto:hello@polardog.cc">hello@polardog.cc</a>
              </div>
              <div>
                <h3>{copy.contact.careers}</h3>
                <a href="mailto:jobs@polardog.cc">jobs@polardog.cc</a>
              </div>
            </div>
          </div>
          <footer className="footer">
            <a className="footer-brand" href="#top" aria-label={copy.home}>
              POLARDOG<span>STUDIO</span>
            </a>
            <p>© 2026 PolarDog Studio. {copy.contact.rights}</p>
            <a className="back-top" href="#top">
              {copy.contact.back}
              <ArrowUp size={16} aria-hidden="true" />
            </a>
          </footer>
        </section>
      </main>
    </div>
  );
}
