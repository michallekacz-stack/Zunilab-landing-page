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
  technologies: {
    title: string;
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
  testimonials: {
    title: string;
    items: {
      quote: string;
      name: string;
      handle: string;
      avatar: string;
    }[];
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
      subtitle: "Examples of materials designed for effective communication and sales.",
      projects: [
        { title: "Beauty Hubs - Premium Brand Identity", brief: "Comprehensive branding from signet to full visual identity. We designed a modern logo, refined the color palette, and created a cohesive brandbook that builds a premium effect and maximum brand recognition.", images: ['./portfolio/beautyhubs-szyld.png', './portfolio/beautyhubs-logotyp.png', './portfolio/beautyhubs-stationary.png'] },
        { title: "YOU, Inspiracja to Ty - Premium Beauty Branding", brief: "Comprehensive branding for YOU beauty salon in Rzeszów. We created an elegant logo and cohesive brandbook that highlights the premium character, relaxation, and individual approach to the client. Minimalist aesthetics and refined typography build trust, distinguish the brand, and strengthen its position in the beauty segment.", images: ['./portfolio/YOU-logo.jpg', './portfolio/YOU-logo2.png'] },
        { title: "E-commerce Banners - Visuals that sell", brief: "We design sales banners for e-commerce: sliders, campaigns, and rich content. Every element is optimized for conversion, from a strong key visual to clear hierarchy and premium aesthetics. The result is higher CTR, better image, and real sales growth.", images: ['./portfolio/VelvetBeanCoffee-Branding.jpg', './portfolio/kuchnia-mobile.png', './portfolio/kolagen.jpg', './portfolio/Beard-Oils-Mockup.jpg'] },
        { title: "Print Design - from detail to large format", brief: "Comprehensive print designs: from large-format projects, through clothing, to flyers and business cards. Every material is refined for production and consistent with brand identity. Premium aesthetics, readability, and quality that does the job both on screen and in real life.", images: ['./portfolio/ksbarbers-bc.png', './portfolio/ksbarbers-rollup.png', './portfolio/ml-banner.png', './portfolio/studiosg.png'] }
      ]
    },
    hero: {
      headline: "We create visuals that don't just look good — they actively support sales.",
      subheadline: "„Design is not just what it looks like and feels like. Design is how it works.”",
      primaryCta: "View Packages",
      secondaryCta: "See Our Work",
    },
    technologies: {
      title: "Technologies we use",
    },
    value: {
      title: "Why Zunilab?",
      items: [
        { title: "Increased Perceived Value", desc: "We design based on principles of perception psychology, such as the halo effect and visual consistency. This makes the brand perceived as more credible and premium, which tangibly influences purchasing decisions." },
        { title: "Designed for Effectiveness", desc: "Every project is based on data, testing, and user behavior patterns. We optimize visual elements for attention, comprehension, and action, not just aesthetics." },
        { title: "Campaign-Ready", desc: "We create materials tailored to advertising platforms and their specifics. We consider formats, user attention, and context of use to support campaign effectiveness." },
        { title: "AI as a Tool, Not a Shortcut", desc: "We use AI as a tool to accelerate the process and explore directions. Every project undergoes conscious selection, refinement, and design decisions." },
        { title: "Brand-Tailored Approach", desc: "We start every project by understanding the product, target audience, and business context. We don't use ready-made templates; we build solutions tailored to the specific situation." }
      ]
    },
    services: {
      kicker: "Visual design based on context, not random aesthetics.",
      title: "Our Expertise",
      subtitle: "We specialize in visual materials for e-commerce, designed with sales context, user behavior, and platform requirements in mind.",
      items: [
        { title: "Product Visuals", desc: "We create 2D visualizations using AI as a process-supporting tool. We focus on clear product presentation, detail, and context of use that influence purchasing decisions." },
        { title: "E-commerce Banners", desc: "We design banners tailored to their placement. We consider information hierarchy, user attention span, and the specifics of advertising platforms." },
        { title: "Rich Content", desc: "We design A+ content and infographics that organize information and make the offer easier to understand. They support the user in making a decision, especially for more complex products." },
        { title: "Landing Page Visuals", desc: "We create visual materials consistent with the page structure and user journey. The design supports the message, readability, and section flow, rather than just being an aesthetic addition." }
      ]
    },
    packages: {
      title: "Simple Pricing. Real Value.",
      starter: {
        name: "Starter",
        features: ["3 Premium Visuals", "Fast Delivery", "Initial Target Audience Alignment", "1 Revision Round"],
      },
      growth: {
        name: "Growth",
        features: ["6 Premium Visuals", "A/B Variants (Different Visual Directions)", "Campaign-Ready Assets", "2 Revision Rounds"],
      },
      domination: {
        name: "Domination",
        features: ["12 Premium Visuals", "Cohesive Visual System", "Assets Tailored for Campaign Scaling", "Unlimited Revisions"],
      },
      cta: "Choose Package",
      footerText: "We start every project by briefly getting to know your brand, product, and goal. This ensures the materials are tailored to the context, not created from a template."
    },
    process: {
      title: "How does the collaboration look?",
      steps: [
        { title: "Send a brief", desc: "You fill out a short form and provide information about the product, target audience, and the context of use for the materials." },
        { title: "We design", desc: "Based on the brief, we create visual directions, taking into account the brand's character, product presentation, and user behavior." },
        { title: "Receive materials", desc: "You receive ready-to-use files tailored to their placement, along with the option to request revisions within your chosen package." }
      ],
      footerText: "We work iteratively, taking your feedback into account at every stage."
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
    testimonials: {
      title: "What People Say",
      items: [
        {
          quote: "Michał is a true passionate. He does his work very carefully, is extremely creative. Thanks to him, the logo of our sports studio looks exceptional and sensational. Great contact and fast execution. We continue to cooperate and recommend this professional with a clear conscience.",
          name: "Seweryn Guzior",
          handle: "Studio Sportu SG",
          avatar: "https://ui-avatars.com/api/?name=Seweryn+Guzior&background=1a1a2e&color=c466ff"
        },
        {
          quote: "I had the pleasure of working with Michał on creating a logo for my company Beauty Hub Dublin. He showed great professionalism, creativity, and attention to detail. He carefully listened to my needs and created a project that perfectly reflects the brand's character. I fully recommend Michał as a talented graphic designer with passion and a fresh perspective.",
          name: "Żaneta",
          handle: "BeautyHubs",
          avatar: "https://ui-avatars.com/api/?name=Zaneta&background=1a1a2e&color=c466ff"
        },
        {
          quote: "Fast delivery, great communication, and designs that hit the spot perfectly. Highly recommended!",
          name: "Karolina Wiśniewska",
          handle: "@karolinaw",
          avatar: "https://i.pravatar.cc/150?u=karolina"
        },
        {
          quote: "Finally an agency that understands that design must sell, not just look pretty in a portfolio.",
          name: "Piotr Zieliński",
          handle: "@pzielinski",
          avatar: "https://i.pravatar.cc/150?u=piotr"
        },
        {
          quote: "The brandbook we received is a masterpiece. It organized our entire communication.",
          name: "Magdalena Wójcik",
          handle: "@mwojcik_ceo",
          avatar: "https://i.pravatar.cc/150?u=magda"
        },
        {
          quote: "Professional approach from the first brief to the final files. We will definitely come back.",
          name: "Tomasz Kamiński",
          handle: "@tkaminski",
          avatar: "https://i.pravatar.cc/150?u=tomasz"
        },
        {
          quote: "Their A+ content designs for Amazon made our products stand out from the competition.",
          name: "Katarzyna Lewandowska",
          handle: "@klewandowska",
          avatar: "https://i.pravatar.cc/150?u=kasia"
        },
        {
          quote: "Top-notch aesthetics. The materials are refined in every detail.",
          name: "Marcin Szymański",
          handle: "@mszymanski",
          avatar: "https://i.pravatar.cc/150?u=marcin"
        }
      ]
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
      subtitle: "Przykłady materiałów zaprojektowanych z myślą o skutecznej komunikacji i sprzedaży.",
      projects: [
        { title: "Beauty Hubs - Premium Brand Identity", brief: "Kompleksowy branding od sygnetu po pełną identyfikację wizualną. Zaprojektowaliśmy nowoczesne logo, dopracowaliśmy kolorystykę i stworzyliśmy spójny brandbook, który buduje efekt premium i maksymalną rozpoznawalność marki.", images: ['./portfolio/beautyhubs-szyld.png', './portfolio/beautyhubs-logotyp.png', './portfolio/beautyhubs-stationary.png'] },
        { title: "YOU, Inspiracja to Ty - Premium Beauty Branding", brief: "Kompleksowy branding dla salonu kosmetycznego YOU w Rzeszowie. Stworzyliśmy eleganckie logo i spójny brandbook, który podkreśla premium charakter, relaks i indywidualne podejście do klienta. Minimalistyczna estetyka i dopracowana typografia budują zaufanie, wyróżniają markę i wzmacniają jej pozycję w segmencie beauty.", images: ['./portfolio/YOU-logo.jpg', './portfolio/YOU-logo2.png'] },
        { title: "Banery E-commerce - Grafiki, które sprzedają", brief: "Projektujemy banery sprzedażowe dla e-commerce: slidery, kampanie i rich content. Każdy element dopracowany pod konwersję, od mocnego key visuala po czytelną hierarchię i premium estetykę. Efekt to większy CTR, lepszy wizerunek i realny wzrost sprzedaży.", images: ['./portfolio/VelvetBeanCoffee-Branding.jpg', './portfolio/kuchnia-mobile.png', './portfolio/kolagen.jpg', './portfolio/Beard-Oils-Mockup.jpg'] },
        { title: "Projekty do druku - od detalu po wielki format", brief: "Kompleksowe projekty do druku: od wielkoformatowych realizacji, przez odzież, po ulotki i wizytówki. Każdy materiał dopracowany pod produkcję i spójny z identyfikacją marki. Estetyka premium, czytelność i jakość, która robi robotę zarówno na ekranie, jak i w realu.", images: ['./portfolio/ksbarbers-bc.png', './portfolio/ksbarbers-rollup.png', './portfolio/ml-banner.png', './portfolio/studiosg.png'] }
      ]
    },
    hero: {
      headline: "Tworzymy grafiki, które nie tylko wyglądają — ale realnie wspierają sprzedaż.",
      subheadline: "„Design is not just what it looks like and feels like. Design is how it works.”",
      primaryCta: "Zobacz Pakiety",
      secondaryCta: "Nasze Realizacje",
    },
    technologies: {
      title: "Technologie, z których korzystamy",
    },
    value: {
      title: "Dlaczego Zunilab?",
      items: [
        { title: "Wzrost postrzeganej wartości", desc: "Projektujemy w oparciu o zasady psychologii percepcji, takie jak efekt halo i spójność wizualna. Dzięki temu marka jest odbierana jako bardziej wiarygodna i premium, co realnie wpływa na decyzje zakupowe." },
        { title: "Projektowane pod skuteczność", desc: "Każdy projekt powstaje w oparciu o dane, testy i wzorce zachowań użytkowników. Optymalizujemy elementy wizualne pod uwagę, zrozumienie i działanie, nie tylko estetykę." },
        { title: "Przygotowane do kampanii", desc: "Tworzymy materiały dopasowane do platform reklamowych i ich specyfiki. Uwzględniamy formaty, uwagę użytkownika i kontekst użycia, aby wspierać efektywność kampanii." },
        { title: "AI jako wsparcie, nie skrót", desc: "Wykorzystujemy AI jako narzędzie przyspieszające proces i eksplorację kierunków. Każdy projekt przechodzi świadomą selekcję, dopracowanie i decyzje projektowe." },
        { title: "Podejście dopasowane do marki", desc: "Każdy projekt zaczynamy od zrozumienia produktu, grupy docelowej i kontekstu biznesowego. Nie korzystamy z gotowych schematów, tylko budujemy rozwiązania dopasowane do konkretnej sytuacji." }
      ]
    },
    services: {
      kicker: "Projektowanie wizualne oparte na kontekście, nie przypadkowej estetyce.",
      title: "Nasza ekspertyza",
      subtitle: "Specjalizujemy się w materiałach wizualnych dla e commerce, projektowanych z uwzględnieniem kontekstu sprzedaży, zachowań użytkowników i wymagań platform.",
      items: [
        { title: "Wizualizacje produktów", desc: "Tworzymy wizualizacje 2D z wykorzystaniem AI jako narzędzia wspierającego proces. Skupiamy się na czytelnej prezentacji produktu, detalu i kontekście użycia, które wpływają na decyzje zakupowe." },
        { title: "Bannery e commerce", desc: "Projektujemy bannery dopasowane do miejsc ich użycia. Uwzględniamy hierarchię informacji, czas uwagi użytkownika i specyfikę platform reklamowych." },
        { title: "Rich content", desc: "Projektujemy treści A+ i infografiki, które porządkują informacje i ułatwiają zrozumienie oferty. Wspierają użytkownika w podjęciu decyzji, szczególnie przy bardziej złożonych produktach." },
        { title: "Grafiki landing page", desc: "Tworzymy materiały wizualne spójne ze strukturą strony i ścieżką użytkownika. Projekt wspiera przekaz, czytelność i flow sekcji, zamiast być tylko dodatkiem estetycznym." }
      ]
    },
    packages: {
      title: "Prosty cennik. Realna wartość.",
      starter: {
        name: "Starter",
        features: ["3 grafiki premium", "Szybka realizacja", "Wstępne dopasowanie do grupy docelowej", "1 runda poprawek"],
      },
      growth: {
        name: "Growth",
        features: ["6 grafik premium", "Warianty A/B (różne kierunki wizualne)", "Przygotowane do użycia w kampaniach", "2 rundy poprawek"],
      },
      domination: {
        name: "Domination",
        features: ["12 grafik premium", "Spójny system wizualny", "Materiały dopasowane do skalowania kampanii", "Nielimitowane poprawki"],
      },
      cta: "Wybierz pakiet",
      footerText: "Każdy projekt rozpoczynamy od krótkiego poznania Twojej marki, produktu i celu. Dzięki temu materiały są dopasowane do kontekstu, nie tworzone według szablonu."
    },
    process: {
      title: "Jak wygląda współpraca?",
      steps: [
        { title: "Wyślij brief", desc: "Wypełniasz krótki formularz i przekazujesz informacje o produkcie, grupie docelowej i kontekście użycia materiałów." },
        { title: "Projektujemy", desc: "Na podstawie briefu tworzymy kierunki wizualne, uwzględniając charakter marki, sposób prezentacji produktu i zachowania użytkowników." },
        { title: "Odbierz materiały", desc: "Otrzymujesz gotowe pliki dopasowane do miejsca użycia, wraz z możliwością wprowadzenia poprawek w ramach wybranego pakietu." }
      ],
      footerText: "Pracujemy iteracyjnie, z uwzględnieniem Twojego feedbacku na każdym etapie."
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
    testimonials: {
      title: "Co mówią o nas klienci",
      items: [
        {
          quote: "Michał to prawdziwy pasjonat. Swoją pracę wykonuje bardzo starannie, jest mega kreatywny. Dzięki niemu logo naszego studia sportu wygląda wyjątkowo i rewelacyjnie. Super kontakt i szybka realizacja. Współpracujemy nadal i polecamy tego fachowca z czystym sumieniem.",
          name: "Seweryn Guzior",
          handle: "Studio Sportu SG",
          avatar: "https://ui-avatars.com/api/?name=Seweryn+Guzior&background=1a1a2e&color=c466ff"
        },
        {
          quote: "Miałam przyjemność współpracować z Michałem przy tworzeniu logo dla mojej firmy Beauty Hub Dublin. Wykazał się dużym profesjonalizmem, kreatywnością i dbałością o szczegóły. Uważnie wysłuchał moich potrzeb i stworzył projekt, który idealnie oddaje charakter marki. Z pełnym przekonaniem polecam Michała jako utalentowanego grafika z pasją i świeżym spojrzeniem.",
          name: "Żaneta",
          handle: "BeautyHubs",
          avatar: "https://ui-avatars.com/api/?name=Zaneta&background=1a1a2e&color=c466ff"
        },
        {
          quote: "Szybka realizacja, świetny kontakt i projekty, które trafiają w punkt. Gorąco polecam!",
          name: "Karolina Wiśniewska",
          handle: "@karolinaw",
          avatar: "https://i.pravatar.cc/150?u=karolina"
        },
        {
          quote: "W końcu agencja, która rozumie, że design ma sprzedawać, a nie tylko ładnie wyglądać w portfolio.",
          name: "Piotr Zieliński",
          handle: "@pzielinski",
          avatar: "https://i.pravatar.cc/150?u=piotr"
        },
        {
          quote: "Brandbook, który otrzymaliśmy, to mistrzostwo. Uporządkował całą naszą komunikację.",
          name: "Magdalena Wójcik",
          handle: "@mwojcik_ceo",
          avatar: "https://i.pravatar.cc/150?u=magda"
        },
        {
          quote: "Profesjonalne podejście od pierwszego briefu po finalne pliki. Na pewno wrócimy.",
          name: "Tomasz Kamiński",
          handle: "@tkaminski",
          avatar: "https://i.pravatar.cc/150?u=tomasz"
        },
        {
          quote: "Ich projekty rich content na Amazon sprawiły, że nasze produkty wyróżniają się na tle konkurencji.",
          name: "Katarzyna Lewandowska",
          handle: "@klewandowska",
          avatar: "https://i.pravatar.cc/150?u=kasia"
        },
        {
          quote: "Estetyka na najwyższym poziomie. Materiały są dopracowane w każdym detalu.",
          name: "Marcin Szymański",
          handle: "@mszymanski",
          avatar: "https://i.pravatar.cc/150?u=marcin"
        }
      ]
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
