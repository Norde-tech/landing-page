export type Lang = "en" | "uk";

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "Reusable Blocks. Custom Solutions.",
      subtitle:
        "Norde-blocks is a library of production-ready web components. We also provide custom web consulting and engineering services.",
      cta: "Get in Touch",
    },
    about: {
      title: "About Us",
      description:
        "Norde Tech builds Norde-blocks — a library of reusable, customizable web components that accelerate your development. We also offer custom consulting and engineering services to help you build exceptional web products.",
      stats: {
        projects: "Components Built",
        clients: "Happy Clients",
        years: "Years of Experience",
      },
    },
    services: {
      title: "What We Do",
      dev: {
        title: "Norde-blocks",
        description:
          "A growing library of production-ready, customizable web components. Drop them into any project or customize them to fit your needs.",
      },
      consulting: {
        title: "Custom Development",
        description:
          "End-to-end web development services. From architecture to deployment, we build robust, scalable web applications tailored to your requirements.",
      },
      saas: {
        title: "Web Consulting",
        description:
          "Strategic guidance for your web projects. We help with architecture decisions, tech stack selection, code reviews, and team augmentation.",
      },
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Have a project in mind? Let's discuss how we can help.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      success: "Message sent successfully!",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell us about your project...",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  uk: {
    nav: {
      about: "Про нас",
      services: "Сервіси",
      contact: "Контакти",
    },
    hero: {
      title: "Компоненти для повторного використання. Індивідуальні рішення.",
      subtitle:
        "Norde-blocks — це бібліотека готових до продакшену веб-компонентів. Ми також надаємо кастомні консалтингові та інженерні послуги з веб-розробки.",
      cta: "Зв'язатися",
    },
    about: {
      title: "Про нас",
      description:
        "Norde Tech створює Norde-blocks — бібліотеку багаторазових, налаштовуваних веб-компонентів, що прискорюють вашу розробку. Ми також пропонуємо кастомні консалтингові та інженерні послуги для створення видатних веб-продуктів.",
      stats: {
        projects: "Компонентів створено",
        clients: "Задоволених клієнтів",
        years: "Років досвіду",
      },
    },
    services: {
      title: "Що ми робимо",
      dev: {
        title: "Norde-blocks",
        description:
          "Зростаюча бібліотека готових до продакшену веб-компонентів. Інтегруйте їх у будь-який проєкт або налаштуйте під свої потреби.",
      },
      consulting: {
        title: "Кастомна розробка",
        description:
          "Послуги з веб-розробки від архітектури до деплойменту. Ми створюємо надійні, масштабовані веб-додатки, адаптовані до ваших вимог.",
      },
      saas: {
        title: "Веб-консалтинг",
        description:
          "Стратегічні консультації для ваших веб-проєктів. Допомагаємо з архітектурними рішеннями, вибором технологій, код-рев'ю та розширенням команди.",
      },
    },
    contact: {
      title: "Зв'яжіться з нами",
      subtitle: "Маєте проєкт? Давайте обговоримо, як ми можемо допомогти.",
      name: "Ім'я",
      email: "Email",
      message: "Повідомлення",
      send: "Надіслати",
      success: "Повідомлення надіслано успішно!",
      namePlaceholder: "Ваше ім'я",
      emailPlaceholder: "ваш@email.com",
      messagePlaceholder: "Розкажіть про ваш проєкт...",
    },
    footer: {
      rights: "Всі права захищені.",
    },
  },
} as const;
