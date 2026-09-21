export type Locale = 'zh' | 'en';

export const PRODUCT_URL = 'https://tse.polardog.cc/';

export const siteCopy = {
  zh: {
    home: 'PolarDog 首页',
    navigation: '主导航',
    language: '选择语言',
    openMenu: '打开导航菜单',
    closeMenu: '关闭导航菜单',
    skip: '跳至主要内容',
    nav: ['我们的作品', '关于我们', '创作理念', '加入我们', '联系我们'],
    hero: {
      label: '原创世界 · 无限可能',
      title: ['向未知，', '创造。'],
      description: '以好奇心为起点，以游戏为语言。',
      descriptionNext: '创造值得探索、值得留驻的世界。',
      action: '探索我们的作品',
      drag: '拖动，探索另一个视角',
      scroll: '向下探索',
      featured: '我们的宇宙，从这里开始',
      project: '第二纪元',
    },
    works: {
      label: '我们的作品',
      title: '下一个世界，等你抵达。',
      intro: '把想象变成可以亲自出发的旅程。',
      name: '第二纪元',
      subtitle: 'THE SECOND EPOCH',
      genre: '科幻 · 多人在线',
      status: '持续研发中',
      tagline: '你的航迹，宇宙的下一页。',
      description:
        '驾驶舰船穿越星系，探索未知，寻找同行者。在自由航行、舰船构筑与多人协作中，写下属于你的宇宙故事。',
      tags: ['自由航行', '舰船构筑', '多人协作'],
      action: '进入游戏官网',
      image: '第二纪元概念场景：一艘舰船驶向遥远的蓝色星球',
      features: '游戏特色',
    },
    about: {
      label: '关于我们',
      title: ['好奇心，让我们出发。', '创造力，让世界生长。'],
      statement: '我们是 PolarDog Studio，专注于原创游戏与长期在线世界的研发。',
      body: '我们相信，游戏可以是一次冒险，也可以是一个令人愿意回来的地方。从最初的灵感到每一处交互，我们让技术、艺术与想象一起工作，把遥远的可能变成玩家触手可及的体验。',
      link: '认识我们的创作理念',
      pillars: [
        {
          title: '原创的世界',
          text: '从玩法到世界观，寻找属于作品自己的表达。',
        },
        {
          title: '真实的体验',
          text: '从玩家的感受出发，让每一个细节经得起体验。',
        },
        { title: '持续的探索', text: '保持专注，不断迭代，让好想法走得更远。' },
      ],
    },
    values: {
      label: '创作理念',
      title: ['对世界充满好奇，', '对作品始终认真。'],
      intro: '我们珍视的，最终都会成为作品的一部分。',
      items: [
        {
          title: '从玩家出发',
          text: '关注真正被感受到的瞬间，让每个系统、每段叙事、每次交互都有意义。',
        },
        {
          title: '让创作诚实',
          text: '尊重作品，也尊重彼此。用清晰的判断与开放的讨论，让好想法落地。',
        },
        {
          title: '为长远而做',
          text: '为值得的体验多走一步，创造可以持续生长的世界。',
        },
        {
          title: '一起向前',
          text: '让不同专业彼此启发，让技术与艺术互相推动，在合作中不断进步。',
        },
      ],
    },
    join: {
      label: '加入我们',
      title: ['下一段旅程，', '一起创造。'],
      description:
        '如果你也对未知充满好奇，对游戏有自己的热爱与坚持，期待在这里遇见你。',
      areas: '我们期待的创作伙伴',
      roles: ['游戏研发', '美术与技术美术', '策划与叙事', '发行与运营'],
      action: '与我们聊聊',
      note: '向 jobs@polardog.cc 发送简历与作品',
      subject: '加入 PolarDog Studio',
    },
    contact: {
      label: '联系我们',
      title: '从一声「你好」开始。',
      description: '关于合作、创意，或一个值得探索的新可能。',
      business: '商务与媒体',
      careers: '人才与招聘',
      back: '回到顶部',
      rights: '保留所有权利。',
    },
  },
  en: {
    home: 'PolarDog home',
    navigation: 'Main navigation',
    language: 'Choose language',
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation',
    skip: 'Skip to main content',
    nav: ['Our games', 'Our studio', 'Our values', 'Join us', 'Contact'],
    hero: {
      label: 'ORIGINAL WORLDS. OPEN POSSIBILITIES.',
      title: ['Beyond', 'the known.'],
      description: 'Driven by curiosity. Expressed through play.',
      descriptionNext: 'We create worlds worth getting lost in.',
      action: 'Explore our games',
      drag: 'Drag to see a different perspective',
      scroll: 'Scroll to explore',
      featured: 'Our universe starts here',
      project: 'The Second Epoch',
    },
    works: {
      label: 'Our games',
      title: 'Your next world awaits.',
      intro: 'Turn a distant possibility into a journey of your own.',
      name: 'The Second Epoch',
      subtitle: '第二纪元',
      genre: 'SCI-FI · MULTIPLAYER',
      status: 'In development',
      tagline: 'Your journey. A new chapter in the cosmos.',
      description:
        'Pilot your ship across star systems, venture into the unknown, and find your crew. Through open exploration, ship building, and multiplayer cooperation, leave your own mark on the universe.',
      tags: ['Open exploration', 'Ship building', 'Multiplayer'],
      action: 'Visit the game website',
      image:
        'The Second Epoch concept art: a spacecraft approaching a distant blue planet',
      features: 'Game features',
    },
    about: {
      label: 'Our studio',
      title: [
        'Curiosity takes us further.',
        'Creativity brings worlds to life.',
      ],
      statement:
        'We are PolarDog Studio. We create original games and online worlds built to last.',
      body: 'We believe a game can be an adventure, and a place you want to return to. From the first spark of an idea to the smallest interaction, we bring technology, art, and imagination together to put new possibilities in players’ hands.',
      link: 'Discover what drives us',
      pillars: [
        {
          title: 'Original worlds',
          text: 'From gameplay to worldbuilding, give every game a voice of its own.',
        },
        {
          title: 'Meaningful experiences',
          text: 'Start with the player, and make every detail worth experiencing.',
        },
        {
          title: 'Constant exploration',
          text: 'Stay focused, keep refining, and take good ideas further.',
        },
      ],
    },
    values: {
      label: 'Our values',
      title: ['Stay curious.', 'Create with care.'],
      intro: 'What matters to us finds its way into everything we make.',
      items: [
        {
          title: 'Start with the player',
          text: 'Focus on the moments people feel. Give every system, story, and interaction a reason to exist.',
        },
        {
          title: 'Create with integrity',
          text: 'Respect the work and each other. Turn good ideas into reality through clear thinking and open conversation.',
        },
        {
          title: 'Build for the long term',
          text: 'Go further for experiences that matter. Create worlds with room to keep growing.',
        },
        {
          title: 'Move forward together',
          text: 'Let different disciplines inspire each other, and let technology and art advance together.',
        },
      ],
    },
    join: {
      label: 'Join us',
      title: ['Make the next', 'chapter with us.'],
      description:
        'Curious about the unknown? Passionate about making games? We’d love to meet people who bring a point of view and the care to see it through.',
      areas: 'Where you could make a difference',
      roles: [
        'Engineering',
        'Art & technical art',
        'Design & narrative',
        'Publishing & operations',
      ],
      action: 'Start a conversation',
      note: 'Send your CV and portfolio to jobs@polardog.cc',
      subject: 'Join PolarDog Studio',
    },
    contact: {
      label: 'Contact',
      title: 'Good things start with hello.',
      description: 'A collaboration, an idea, or a new possibility to explore.',
      business: 'Business & media',
      careers: 'Careers',
      back: 'Back to top',
      rights: 'All rights reserved.',
    },
  },
} as const;
