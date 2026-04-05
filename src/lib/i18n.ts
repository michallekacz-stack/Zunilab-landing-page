export type Language = 'en' | 'pl';

interface Translation {
  nav: {
    services: string;
    portfolio: string;
    packages: string;
    process: string;
    contact: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    projects: {
      title: string;
      brief: string;
      imageSeed: string;
    }[];
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  value: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  services: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  packages: {
    title: string;
    starter: {
      name: string;
      features: string[];
    };
    growth: {
      name: string;
      features: string[];
    };
    domination: {
      name: string;
      features: string[];
    };
    cta: string;
  };
  process: {
    title: string;
    steps: {
      title: string;
      desc: string;
    }[];
  };
  contactForm: {
    title: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    brandbook: string;
    submit: string;
    success: string;
  };
  finalCta: {
    headline: string;
    cta: string;
  };
  footer: {
    email: string;
    phone: string;
    rights: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      packages: 'Packages',
      process: 'Process',
      contact: 'Contact',
    },
    portfolio: {
      title: "Selected Works",
      subtitle: "See how we transform products into bestsellers.",
      projects: [
        { title: "TechWear Smartwatch", brief: "Full 2D product visualization using AI and landing page assets for a premium smartwatch launch. Increased conversion by 45%.", imageSeed: "smartwatch" },
        { title: "Lumina Cosmetics", brief: "E-commerce banner system and A+ content for a luxury skincare line. Focused on clean, glowing aesthetics.", imageSeed: "cosmetics" },
        { title: "Aero Headphones", brief: "High-impact social media creatives and product renders highlighting noise-cancellation features.", imageSeed: "headphones" },
        { title: "Zenith Coffee Blend", brief: "Packaging visualization and rich content for Amazon listings. Designed to communicate organic, premium quality.", imageSeed: "coffee" }
      ]
    },
    hero: {
      headline: "We design visuals that don't just look good — they sell.",
      subheadline: "High-converting product visuals for e-commerce brands ready to scale.",
      primaryCta: "View Packages",
      secondaryCta: "See Our Work",
    },
    value: {
      title: "Why Zunilab?",
      items: [
        { title: "Increase Perceived Value", desc: "Premium visuals justify premium pricing and build instant trust." },
        { title: "Built for Performance", desc: "Every pixel is optimized to drive clicks, engagement, and sales." },
        { title: "Ready for Ads", desc: "Stop wasting ad spend on poor creatives. We deliver ROAS-focused assets." }
      ]
    },
    services: {
      title: "Our Expertise",
      items: [
        { title: "Product Visuals", desc: "Stunning 2D product visualizations using AI to maximize sales." },
        { title: "E-commerce Banners", desc: "High-impact hero banners and promotional graphics for your store." },
        { title: "Rich Content Images", desc: "A+ content and infographics that educate and convert." },
        { title: "Landing Page Visuals", desc: "Custom assets designed specifically for high-converting landing pages." }
      ]
    },
    packages: {
      title: "Simple Pricing. Maximum Impact.",
      starter: {
        name: "Starter",
        features: ["3 High-End Visuals", "Fast Delivery", "Entry-Level Testing", "1 Revision Round"],
      },
      growth: {
        name: "Growth",
        features: ["6 High-End Visuals", "A/B Variations", "Ad-Ready Formats", "2 Revision Rounds"],
      },
      domination: {
        name: "Domination",
        features: ["12 High-End Visuals", "Full Visual System", "Scaling-Ready Assets", "Unlimited Revisions"],
      },
      cta: "Get Started"
    },
    process: {
      title: "How It Works",
      steps: [
        { title: "Send Brief", desc: "Fill out a simple form telling us about your product and goals." },
        { title: "We Design", desc: "Our team crafts premium, conversion-focused visuals." },
        { title: "Receive Assets", desc: "Get your ready-to-use assets and start scaling your sales." }
      ]
    },
    contactForm: {
      title: "Let's Start a Project",
      name: "Name / Company Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "What do you need?",
      brandbook: "Company brandbook (if you have one). If not, we'll gladly support you in creating a brandbook and full visual identity for your brand, products, etc.",
      submit: "Send Inquiry",
      success: "Message sent! We will contact you soon."
    },
    finalCta: {
      headline: "Your product deserves better visuals.",
      cta: "Start Your Project",
    },
    footer: {
      email: "info@zuni.studio",
      phone: "+48 571 431 666",
      rights: "© 2026 Zunilab. All rights reserved."
    }
  },
  pl: {
    nav: {
      services: 'Usługi',
      portfolio: 'Realizacje',
      packages: 'Pakiety',
      process: 'Proces',
      contact: 'Kontakt',
    },
    portfolio: {
      title: "Wybrane Realizacje",
      subtitle: "Zobacz, jak zmieniamy produkty w bestsellery.",
      projects: [
        { title: "TechWear Smartwatch", brief: "Pełna wizualizacja produktowa 2D z wykorzystaniem AI i materiały na landing page dla premiery smartwatcha premium. Wzrost konwersji o 45%.", imageSeed: "smartwatch" },
        { title: "Lumina Cosmetics", brief: "System bannerów e-commerce i content A+ dla luksusowej linii kosmetyków. Skupienie na czystej, świetlistej estetyce.", imageSeed: "cosmetics" },
        { title: "Aero Headphones", brief: "Wysokiej jakości kreacje social media i rendery produktu podkreślające funkcję redukcji szumów.", imageSeed: "headphones" },
        { title: "Zenith Coffee Blend", brief: "Wizualizacja opakowań i rich content dla aukcji Amazon. Zaprojektowane, by komunikować organiczną jakość premium.", imageSeed: "coffee" }
      ]
    },
    hero: {
      headline: "Tworzymy grafiki, które nie tylko wyglądają — one sprzedają.",
      subheadline: "Wysoko konwertujące materiały wizualne dla marek e-commerce gotowych na skalowanie.",
      primaryCta: "Zobacz Pakiety",
      secondaryCta: "Nasze Realizacje",
    },
    value: {
      title: "Dlaczego Zunilab?",
      items: [
        { title: "Wzrost Postrzeganej Wartości", desc: "Grafiki premium uzasadniają wyższe ceny i budują natychmiastowe zaufanie." },
        { title: "Zbudowane dla Wyników", desc: "Każdy piksel jest zoptymalizowany pod kątem kliknięć, zaangażowania i sprzedaży." },
        { title: "Gotowe do Reklam", desc: "Przestań przepalać budżet na słabe kreacje. Dostarczamy materiały skupione na ROAS." }
      ]
    },
    services: {
      title: "Nasza Ekspertyza",
      items: [
        { title: "Wizualizacje Produktów", desc: "Wizualizacje produktowe 2D z wykorzystaniem AI do maksymalizacji sprzedaży." },
        { title: "Bannery E-commerce", desc: "Wysokiej jakości bannery hero i grafiki promocyjne dla Twojego sklepu." },
        { title: "Rich Content", desc: "Treści A+ i infografiki, które edukują i konwertują." },
        { title: "Grafiki Landing Page", desc: "Dedykowane materiały zaprojektowane specjalnie na landing page." }
      ]
    },
    packages: {
      title: "Prosty Cennik. Maksymalny Efekt.",
      starter: {
        name: "Starter",
        features: ["3 Grafiki Premium", "Szybka Dostawa", "Testowanie Rynku", "1 Runda Poprawek"],
      },
      growth: {
        name: "Growth",
        features: ["6 Grafik Premium", "Wariacje A/B", "Gotowe do Reklam", "2 Rundy Poprawek"],
      },
      domination: {
        name: "Domination",
        features: ["12 Grafik Premium", "Pełny System Wizualny", "Gotowe do Skalowania", "Nielimitowane Poprawki"],
      },
      cta: "Rozpocznij"
    },
    process: {
      title: "Jak to działa?",
      steps: [
        { title: "Wyślij Brief", desc: "Wypełnij prosty formularz, opowiadając nam o swoim produkcie i celach." },
        { title: "Projektujemy", desc: "Nasz zespół tworzy premium, konwertujące materiały wizualne." },
        { title: "Odbierz Materiały", desc: "Otrzymaj gotowe do użycia pliki i zacznij skalować sprzedaż." }
      ]
    },
    contactForm: {
      title: "Rozpocznijmy projekt",
      name: "Nazwa / Imię i nazwisko",
      email: "Adres e-mail",
      phone: "Numer telefonu",
      message: "Wiadomość: czego potrzebujesz?",
      brandbook: "Brandbook firmowy jeśli posiadasz, jeśli nie, chętnie wesprzemy w realizacji brandbooka i całej identyfikacji wizualnej marki, produktów itd.",
      submit: "Wyślij zapytanie",
      success: "Wiadomość wysłana! Skontaktujemy się z Tobą wkrótce."
    },
    finalCta: {
      headline: "Twój produkt zasługuje na lepsze grafiki.",
      cta: "Rozpocznij Projekt",
    },
    footer: {
      email: "info@zuni.studio",
      phone: "571 431 666",
      rights: "© 2026 Zunilab. Wszelkie prawa zastrzeżone."
    }
  }
};
