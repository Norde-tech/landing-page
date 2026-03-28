export type Lang = "en" | "uk";

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "Building Digital Solutions",
      subtitle:
        "Software development, consulting, and SaaS products that drive your business forward.",
      cta: "Get in Touch",
    },
    about: {
      title: "About Us",
      description:
        "Norde Tech is a technology company specializing in custom software development, IT consulting, and scalable SaaS solutions. We help businesses of all sizes transform their ideas into powerful digital products.",
      stats: {
        projects: "Projects Delivered",
        clients: "Happy Clients",
        years: "Years of Experience",
      },
    },
    services: {
      title: "Our Services",
      dev: {
        title: "Software Development",
        description:
          "Custom web and mobile applications built with modern technologies. From MVPs to enterprise-grade systems.",
      },
      consulting: {
        title: "IT Consulting",
        description:
          "Strategic technology guidance to optimize your infrastructure, processes, and digital transformation journey.",
      },
      saas: {
        title: "SaaS Products",
        description:
          "Scalable cloud-based solutions designed to streamline operations and boost productivity for your team.",
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
      title: "Створюємо цифрові рішення",
      subtitle:
        "Розробка програмного забезпечення, консалтинг та SaaS продукти, які рухають ваш бізнес вперед.",
      cta: "Зв'язатися",
    },
    about: {
      title: "Про нас",
      description:
        "Norde Tech — технологічна компанія, що спеціалізується на розробці програмного забезпечення, IT-консалтингу та масштабованих SaaS рішеннях. Ми допомагаємо бізнесам будь-якого розміру перетворювати ідеї на потужні цифрові продукти.",
      stats: {
        projects: "Реалізованих проєктів",
        clients: "Задоволених клієнтів",
        years: "Років досвіду",
      },
    },
    services: {
      title: "Наші сервіси",
      dev: {
        title: "Розробка ПЗ",
        description:
          "Веб та мобільні додатки на сучасних технологіях. Від MVP до корпоративних систем.",
      },
      consulting: {
        title: "IT Консалтинг",
        description:
          "Стратегічні технологічні рекомендації для оптимізації інфраструктури, процесів та цифрової трансформації.",
      },
      saas: {
        title: "SaaS Продукти",
        description:
          "Масштабовані хмарні рішення для оптимізації операцій та підвищення продуктивності вашої команди.",
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
