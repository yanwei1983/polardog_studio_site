/* oxlint-disable next/no-img-element */

const values = [
  {
    id: '01',
    title: '玩家视角',
    description:
      '从玩家真正感受到的瞬间出发，让每个系统、每段叙事和每次交互都值得被记住。',
  },
  {
    id: '02',
    title: '创作诚实',
    description:
      '尊重作品，也尊重彼此。用清晰的判断、开放的讨论和可靠的执行，让好想法落地。',
  },
  {
    id: '03',
    title: '长期主义',
    description:
      '我们愿意为正确的体验多走一步，建立可以持续生长的世界，也建立可持续的团队。',
  },
  {
    id: '04',
    title: '共同进化',
    description:
      '让不同专业彼此启发，让技术与艺术互相推动，在每一次交付中比昨天更进一步。',
  },
];

const facts = [
  {
    id: 'A / 01',
    title: '原创世界',
    description: '从核心玩法、世界观到视听语言，坚持建立拥有自身性格的长期 IP。',
  },
  {
    id: 'A / 02',
    title: '多端体验',
    description: '围绕 PC 与移动端持续打磨，让复杂的宇宙冒险依然清晰、流畅、可信。',
  },
  {
    id: 'A / 03',
    title: '持续研发',
    description: '将工程能力服务于创意表达，在渲染、交互和在线世界中不断突破边界。',
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="PolarDog 首页">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>POLARDOG</span>
        </a>

        <nav className="desktop-nav" aria-label="主导航">
          <a href="#works">主要产品</a>
          <a href="#about">关于我们</a>
          <a href="#values">公司理念</a>
          <a href="#join">加入我们</a>
        </nav>

        <a className="nav-contact" href="#contact">
          联系我们
        </a>

        <details className="mobile-menu">
          <summary aria-label="打开导航菜单">
            <span className="menu-icon" aria-hidden="true">
              <i />
              <i />
            </span>
          </summary>
          <nav aria-label="移动端导航">
            <a href="#works">主要产品</a>
            <a href="#about">关于我们</a>
            <a href="#values">公司理念</a>
            <a href="#join">加入我们</a>
            <a href="#contact">联系我们</a>
          </nav>
        </details>
      </header>

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
            />
          </picture>
        </div>

        <div className="hero-rail" aria-hidden="true">
          31°13′N · POLARDOG STUDIO
        </div>

        <div className="hero-content">
          <p className="eyebrow">Original Worlds · Lasting Adventures</p>
          <h1 id="hero-title">
            Beyond
            <span>The Known</span>
          </h1>
          <div className="hero-copy">
            <p>
              我们创造值得长期生活其中的游戏世界。
              <br />
              在技术与想象的交界处，把未知变成下一段冒险。
            </p>
            <a className="round-link" href="#works">
              探索作品
            </a>
          </div>
        </div>

        <div className="hero-footer" aria-hidden="true">
          SCROLL TO EXPLORE <i />
        </div>
      </section>

      <section className="section works" id="works" aria-labelledby="works-title">
        <header className="section-head">
          <p className="section-index">
            <span>01</span> / 04
          </p>
          <div>
            <p className="section-kicker">Our Worlds</p>
            <h2 className="section-title" id="works-title">
              把遥远的世界，变成真实的旅程。
            </h2>
          </div>
        </header>

        <article className="product-feature">
          <div className="product-visual">
            <img
              src="/images/second-epoch-hero.webp"
              alt="《The Second Epoch》宇宙航行概念场景"
              width="1916"
              height="821"
              loading="lazy"
            />
            <span className="product-seal">FLAGSHIP<br />PROJECT</span>
          </div>
          <div className="product-info">
            <div className="product-meta">
              <span>SCI-FI MMO</span>
              <span>IN DEVELOPMENT</span>
            </div>
            <h3>
              THE SECOND
              <span>EPOCH · 第二纪元</span>
            </h3>
            <p className="product-description">
              以宇宙航行、舰船成长与多人协作为核心的科幻在线游戏。
              驾驶你的舰船穿越星系，在不断变化的秩序中探索、选择，并留下属于自己的航迹。
            </p>
            <ul className="product-tags" aria-label="游戏特色">
              <li>自由航行</li>
              <li>舰船构筑</li>
              <li>多人协作</li>
              <li>长期世界</li>
            </ul>
            <a className="text-link" href="#contact">
              关注开发进展
            </a>
          </div>
        </article>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <header className="section-head">
          <p className="section-index">
            <span>02</span> / 04
          </p>
          <div>
            <p className="section-kicker">About PolarDog</p>
            <h2 className="section-title" id="about-title">
              好奇心指向远方，行动力带我们抵达。
            </h2>
          </div>
        </header>

        <div className="about-grid">
          <span aria-hidden="true" />
          <p className="about-statement">
            PolarDog Studio 专注于原创科幻游戏与长期在线世界的研发。
          </p>
          <div className="about-copy">
            <p>
              我们相信，真正有生命力的游戏来自明确的创作愿景，也来自技术、美术、设计与叙事之间足够深入的协作。
            </p>
            <p>
              团队保持小而专注的工作方式，以玩家体验为共同语言，持续打磨每一处可以被感知的细节。
            </p>
          </div>
        </div>

        <div className="about-facts">
          {facts.map((fact) => (
            <article className="fact" key={fact.id}>
              <strong>{fact.id}</strong>
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section values" id="values" aria-labelledby="values-title">
        <div className="values-orbit" aria-hidden="true" />
        <header className="section-head">
          <p className="section-index">
            <span>03</span> / 04
          </p>
          <div>
            <p className="section-kicker">What We Believe</p>
            <h2 className="section-title" id="values-title">
              对作品负责，也对同行的人负责。
            </h2>
          </div>
        </header>

        <div className="value-grid">
          {values.map((value) => (
            <article className="value-card" key={value.id}>
              <span>{value.id}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section join" id="join" aria-labelledby="join-title">
        <div className="join-layout">
          <div>
            <p className="join-kicker">Join PolarDog</p>
            <h2 id="join-title">
              Find Your
              <span>Next Orbit.</span>
            </h2>
          </div>
          <div className="join-copy">
            <p>
              和一群认真、坦率、愿意把事情做到更好的人，一起创造玩家尚未见过的世界。
              我们期待不同经历与视角在这里相遇。
            </p>
            <ul className="roles" aria-label="招聘方向">
              <li>游戏研发</li>
              <li>美术与技术美术</li>
              <li>策划与叙事</li>
              <li>发行与运营</li>
            </ul>
            <a
              className="text-link"
              href="mailto:jobs@polardog.cc?subject=加入 PolarDog Studio"
            >
              投递简历
            </a>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-top">
          <p className="section-index">
            <span>04</span> / 04
          </p>
          <div className="contact-main">
            <p className="section-kicker">Start A Conversation</p>
            <h2 id="contact-title">一起去更远的地方。</h2>
            <a className="contact-email" href="mailto:hello@polardog.cc">
              hello@polardog.cc
            </a>

            <div className="contact-list">
              <div className="contact-item">
                <small>BUSINESS &amp; MEDIA</small>
                <a href="mailto:hello@polardog.cc">hello@polardog.cc</a>
              </div>
              <div className="contact-item">
                <small>CAREERS</small>
                <a href="mailto:jobs@polardog.cc">jobs@polardog.cc</a>
              </div>
              <div className="contact-item">
                <small>STUDIO</small>
                <p>PolarDog Studio · 中国</p>
              </div>
              <div className="contact-item">
                <small>WEBSITE</small>
                <p>www.polardog.cc</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <span className="footer-brand">POLARDOG STUDIO</span>
          <span>© 2026 POLARDOG STUDIO. ALL RIGHTS RESERVED.</span>
          <a href="#top">BACK TO TOP ↑</a>
        </footer>
      </section>
    </main>
  );
}
