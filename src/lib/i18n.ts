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
      images: string[];
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
        { title: "Beauty Hubs - Premium Brand Identity", brief: "Comprehensive branding from signet to full visual identity. We designed a modern logo, refined the color palette, and created a cohesive brandbook that builds a premium effect and maximum brand recognition.", images: ['/portfolio/beautyhubs-szyld.png', '/portfolio/beautyhubs-logotyp.png', '/portfolio/beautyhubs-stationary.png'] },
        { title: "YOU, Inspiracja to Ty - Premium Beauty Branding", brief: "Comprehensive branding for YOU beauty salon in Rzeszów. We created an elegant logo and cohesive brandbook that highlights the premium character, relaxation, and individual approach to the client. Minimalist aesthetics and refined typography build trust, distinguish the brand, and strengthen its position in the beauty segment.", images: ['/portfolio/YOU-logo.jpg', '/portfolio/YOU-logo2.png'] },
        { title: "E-commerce Banners - Visuals that sell", brief: "We design sales banners for e-commerce: sliders, campaigns, and rich content. Every element is optimized for conversion, from a strong key visual to clear hierarchy and premium aesthetics. The result is higher CTR, better image, and real sales growth.", images: ['/portfolio/VelvetBeanCoffee-Branding.jpg', '/portfolio/kuchnia-mobile.png', '/portfolio/kolagen.jpg', '/portfolio/Beard-Oils-Mockup.jpg'] },
        { title: "Print Design - from detail to large format", brief: "Comprehensive print designs: from large-format projects, through clothing, to flyers and business cards. Every material is refined for production and consistent with brand identity. Premium aesthetics, readability, and quality that does the job both on screen and in real life.", images: ['/portfolio/ksbarbers-bc.png', '/portfolio/ksbarbers-rollup.png', '/portfolio/ml-banner.png', '/portfolio/studiosg.png'] }
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
        { title: "Beauty Hubs - Premium Brand Identity", brief: "Kompleksowy branding od sygnetu po pełną identyfikację wizualną. Zaprojektowaliśmy nowoczesne logo, dopracowaliśmy kolorystykę i stworzyliśmy spójny brandbook, który buduje efekt premium i maksymalną rozpoznawalność marki.", images: ['/portfolio/beautyhubs-szyld.png', '/portfolio/beautyhubs-logotyp.png', '/portfolio/beautyhubs-stationary.png'] },
        { title: "YOU, Inspiracja to Ty - Premium Beauty Branding", brief: "Kompleksowy branding dla salonu kosmetycznego YOU w Rzeszowie. Stworzyliśmy eleganckie logo i spójny brandbook, który podkreśla premium charakter, relaks i indywidualne podejście do klienta. Minimalistyczna estetyka i dopracowana typografia budują zaufanie, wyróżniają markę i wzmacniają jej pozycję w segmencie beauty.", images: ['/portfolio/YOU-logo.jpg', '/portfolio/YOU-logo2.png'] },
        { title: "Banery E-commerce - Grafiki, które sprzedają", brief: "Projektujemy banery sprzedażowe dla e-commerce: slidery, kampanie i rich content. Każdy element dopracowany pod konwersję, od mocnego key visuala po czytelną hierarchię i premium estetykę. Efekt to większy CTR, lepszy wizerunek i realny wzrost sprzedaży.", images: ['/portfolio/VelvetBeanCoffee-Branding.jpg', '/portfolio/kuchnia-mobile.png', '/portfolio/kolagen.jpg', '/portfolio/Beard-Oils-Mockup.jpg'] },
        { title: "Projekty do druku - od detalu po wielki format", brief: "Kompleksowe projekty do druku: od wielkoformatowych realizacji, przez odzież, po ulotki i wizytówki. Każdy materiał dopracowany pod produkcję i spójny z identyfikacją marki. Estetyka premium, czytelność i jakość, która robi robotę zarówno na ekranie, jak i w realu.", images: ['/portfolio/ksbarbers-bc.png', '/portfolio/ksbarbers-rollup.png', '/portfolio/ml-banner.png', '/portfolio/studiosg.png'] }
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
