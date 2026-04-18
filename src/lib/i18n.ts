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
    readMore: string;
    projects: {
      title: string;
      brief: string;
      caseStudy?: {
        headline: string;
        sections: {
          title?: string;
          content: string;
          list?: string[];
        }[];
        result?: string;
      };
      images: string[];
    }[];
  };
  hero: {
    badge: string;
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
    mostPopular: string;
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
    namePlaceholder: string;
    email: string;
    phone: string;
    message: string;
    brandbook: string;
    submit: string;
    success: string;
    error: string;
  };
  testimonials: {
    title: string;
    viewAll: string;
    items: {
      quote: string;
      name: string;
      handle: string;
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
      readMore: "View details",
      projects: [
        { 
          title: "Beauty Hubs - Premium Brand Identity", 
          brief: "Complete visual identity and website from scratch. See how we combined premium aesthetics with a bold accent to make the brand stand out.", 
          caseStudy: {
            headline: "Beauty Hubs – full brand identity + website",
            sections: [
              {
                title: "The Challenge",
                content: "The client approached us with the need to create a complete visual identity and a website from scratch. The key was to build a brand image that is elegant, modern, and easy to use on a daily basis. The challenge was to combine premium aesthetics with a bold accent that would distinguish the brand from the competition."
              },
              {
                title: "Execution",
                content: "We designed a minimalist logo based on simple forms, with a strong pink accent that gives character and attracts attention. The whole design was based on three cohesive colors, achieving an elegant, prestigious effect while maintaining visual freshness and lightness. We then created a full visual identity system that can be easily implemented in both online and offline materials."
              },
              {
                title: "Implementation",
                content: "In parallel, we designed and developed a website based on WordPress and Elementor, with maximum ease of use in mind. The client can independently edit content, update the offer, and manage the website without the need to involve a developer."
              }
            ],
            result: "An elegant, modern brand with a complete visual system and an easy-to-manage website that stands out from the competition."
          },
          images: ['./portfolio/beautyhubs-szyld.png', './portfolio/beautyhubs-logotyp.png', './portfolio/beautyhubs-stationary.png'] 
        },
        { 
          title: "YOU, Inspiracja to Ty - Premium Beauty Branding", 
          brief: "Beauty salon branding from scratch to a cohesive brand. See how we solved the lack of consistency and created a premium visual identity that builds trust at first sight.", 
          caseStudy: {
            headline: "YOU – beauty salon branding from scratch to a cohesive brand",
            sections: [
              {
                title: "The Challenge",
                content: "The client came to us after working with another designer. Four logo proposals were created, but none met the team's expectations – they lacked cohesion, direction, and alignment with the brand's character."
              },
              {
                title: "The Goal",
                content: "To create an identity that reflects the salon's atmosphere: premium, minimalist, and a sense of individual approach to the client."
              },
              {
                title: "Execution",
                content: "We designed a new logo that immediately met the YOU team's expectations – simple, elegant, and easy to apply across various materials. We then selected the color palette and typography, creating a cohesive visual system."
              },
              {
                title: "Implementation",
                content: "Everything was compiled into a brandbook, which is currently used:",
                list: [
                  "on social media",
                  "in printed materials",
                  "by other designers working with the brand"
                ]
              }
            ],
            result: "A cohesive, recognizable brand that communicates premium quality and builds customer trust from the very first contact."
          },
          images: ['./portfolio/YOU-logo.jpg', './portfolio/YOU-logo2.png'] 
        },
        { 
          title: "E-commerce Banners - Visuals that sell", 
          brief: "How to turn random photos into visuals that actually increase conversion? See our approach to designing banners and e-commerce materials.", 
          caseStudy: {
            headline: "E-commerce Banners – visuals that sell",
            sections: [
              {
                title: "The Challenge",
                content: "In many online stores, the biggest problem is not the product itself, but its presentation. Clients often use random photos or graphics prepared without sales experience, which directly translates to low conversion."
              },
              {
                title: "The Goal",
                content: "To create graphics that not only look good but, above all, increase the product's attractiveness and encourage purchase."
              },
              {
                title: "Our Approach",
                content: "We create sales banners, sliders, and product graphics where the key elements are:",
                list: [
                  "showing the product in the most attractive way possible",
                  "building the atmosphere and context of use",
                  "clear visual hierarchy that guides the user"
                ]
              }
            ],
            result: "We use our experience in product presentation and modern tools, including AI, which allows us to create realistic, visually refined scenes without production limits, translating into higher conversion rates."
          },
          images: ['./portfolio/VelvetBeanCoffee-Branding.jpg', './portfolio/kuchnia-mobile.png', './portfolio/kolagen.jpg', './portfolio/Beard-Oils-Mockup.jpg'] 
        },
        { 
          title: "Print Design - brand consistency in every detail", 
          brief: "A strong brand is every touchpoint with the customer. See how we design print materials that strengthen recognition and build a professional image.", 
          caseStudy: {
            headline: "Print Design – brand consistency in every detail",
            sections: [
              {
                title: "The Challenge",
                content: "A strong brand is not just a logo or a website, but every touchpoint with the customer – from a business card, through advertising materials, to spatial signage. Many companies lose their image through inconsistent or random print designs that do not reflect the brand's character and fail to attract attention."
              },
              {
                title: "The Goal",
                content: "Our goal is to create materials that are not only aesthetic but, above all, strengthen recognition and build a professional perception of the brand."
              },
              {
                title: "What we design",
                content: "We design, among others:",
                list: [
                  "business cards, flyers, and advertising materials",
                  "banners, rollups, and large format",
                  "clothing (t-shirts, rashguards)",
                  "car wraps and outdoor elements"
                ]
              }
            ],
            result: "Every project is tailored to the brand's visual identity and prepared for real production, ensuring the final result looks just as good in real life as it does in the design."
          },
          images: ['./portfolio/ksbarbers-bc.png', './portfolio/ksbarbers-rollup.png', './portfolio/ml-banner.png', './portfolio/studiosg.png'] 
        }
      ]
    },
    hero: {
      badge: "Premium Design Studio",
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
      title: "Value-Based Pricing",
      mostPopular: "Bestseller",
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
      title: "Contact",
      contactInfo: "Contact Information",
      description: "Do you prefer direct contact? Call or write to us, or just use the form. We respond specifically and to the point.",
      socials: "Find us online",
      name: "Name / Company Name",
      namePlaceholder: "John Doe / Zunilab",
      email: "Email Address",
      phone: "Phone Number",
      message: "What do you need?",
      brandbook: "Company brandbook (if you have one). If not, we'll gladly support you in creating a brandbook and full visual identity for your brand, products, etc.",
      submit: "Send Inquiry",
      success: "Message sent! We will contact you soon.",
      error: "An error occurred. Please try again later."
    },
    testimonials: {
      title: "What People Say",
      viewAll: "View all",
      items: [
        {
          quote: "Michał is a true passionate. He does his work very carefully, is extremely creative. Thanks to him, the logo of our sports studio looks exceptional and sensational. Great contact and fast execution. We continue to cooperate and recommend this professional with a clear conscience.",
          name: "Seweryn Guzior",
          handle: "Studio Sportu SG"
        },
        {
          quote: "I had the pleasure of working with Michał on creating a logo for my company Beauty Hub Dublin. He showed great professionalism, creativity, and attention to detail. He carefully listened to my needs and created a project that perfectly reflects the brand's character. I fully recommend Michał as a talented graphic designer with passion and a fresh perspective.",
          name: "Żaneta",
          handle: "BeautyHubs"
        },
        {
          quote: "Zunilab created something amazing for us. Previous designs from other graphic designers completely missed our taste. Zunilab immediately sensed the premium and minimalist vibe we cared about. The new logo and brandbook are a bullseye!",
          name: "Gaba",
          handle: "YOU Beauty Salon"
        },
        {
          quote: "I needed an elegant logo for my new leather wallets brand. The design exceeded my wildest expectations – it is classic yet modern. Great contact and full professionalism.",
          name: "Piotr Z.",
          handle: "Leather Wallets Brand"
        },
        {
          quote: "I ordered a banner for an online supplement store. The graphics are dynamic, eye-catching, and most importantly – they convert. I definitely recommend working with them!",
          name: "Grzegorz",
          handle: "Insport Nutrition"
        },
        {
          quote: "Fast and concrete execution. The website was created instantly, looks modern, and works flawlessly. The perfect solution for someone who needs a professional online presence yesterday.",
          name: "Mateusz",
          handle: "15 min site"
        },
        {
          quote: "Great cooperation in creating materials for our barber shop. The designs perfectly reflect the masculine, raw atmosphere we cared about. Full professionalism and timeliness.",
          name: "Żaneta",
          handle: "KS Barbers"
        },
        {
          quote: "Working together on product graphics, logo, and signboard for Velvet Bean was a pure pleasure. Aesthetics at the highest level, everything cohesive and refined in every detail. Customers immediately notice our new image.",
          name: "Natalia",
          handle: "Velvet Bean"
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
      readMore: "Zobacz szczegóły",
      projects: [
        { 
          title: "Beauty Hubs - Premium Brand Identity", 
          brief: "Kompletna identyfikacja wizualna oraz strona internetowa od podstaw. Zobacz, jak połączyliśmy estetykę premium z wyrazistym akcentem, który wyróżnia markę.", 
          caseStudy: {
            headline: "Beauty Hubs – pełna identyfikacja + strona www",
            sections: [
              {
                title: "Wyzwanie",
                content: "Klientka zgłosiła się z potrzebą stworzenia kompletnej identyfikacji wizualnej oraz strony internetowej od podstaw. Kluczowe było zbudowanie wizerunku marki, który będzie jednocześnie elegancki, nowoczesny i łatwy w codziennym użytkowaniu. Wyzwaniem było połączenie estetyki premium z wyrazistym akcentem, który wyróżni markę na tle konkurencji."
              },
              {
                title: "Realizacja",
                content: "Zaprojektowaliśmy minimalistyczne logo, oparte na prostych formach, z mocnym akcentem różu, który nadaje całości charakteru i przyciąga uwagę. Całość została oparta na trzech spójnych kolorach, co pozwoliło uzyskać elegancki, prestiżowy efekt przy zachowaniu świeżości i lekkości wizualnej. Następnie stworzyliśmy pełny system identyfikacji wizualnej, który można łatwo wdrożyć zarówno w materiałach online, jak i offline."
              },
              {
                title: "Wdrożenie",
                content: "Równolegle zaprojektowaliśmy i wdrożyliśmy stronę internetową opartą na WordPress i Elementorze, z myślą o maksymalnej prostocie obsługi. Klientka może samodzielnie edytować treści, aktualizować ofertę i zarządzać stroną bez potrzeby angażowania developera."
              }
            ],
            result: "Elegancka, nowoczesna marka z pełnym systemem wizualnym oraz łatwą w obsłudze stroną internetową, która wyróżnia się na tle konkurencji."
          },
          images: ['./portfolio/beautyhubs-szyld.png', './portfolio/beautyhubs-logotyp.png', './portfolio/beautyhubs-stationary.png'] 
        },
        { 
          title: "YOU, Inspiracja to Ty - Premium Beauty Branding", 
          brief: "Branding salonu beauty od zera do spójnej marki. Zobacz, jak rozwiązaliśmy problem braku spójności i stworzyliśmy identyfikację wizualną premium, która buduje zaufanie od pierwszego wejrzenia.", 
          caseStudy: {
            headline: "YOU – branding salonu beauty od zera do spójnej marki",
            sections: [
              {
                title: "Wyzwanie",
                content: "Klient zgłosił się po wcześniejszej współpracy z innym grafikiem. Powstały 4 propozycje logo, ale żadna nie trafiała w oczekiwania zespołu – brakowało spójności, kierunku i dopasowania do charakteru marki."
              },
              {
                title: "Cel",
                content: "Stworzenie identyfikacji, która odda klimat salonu: premium, minimalizm i poczucie indywidualnego podejścia do klienta."
              },
              {
                title: "Realizacja",
                content: "Zaprojektowaliśmy nowe logo, które od razu trafiło w oczekiwania zespołu YOU – proste, eleganckie i łatwe do zastosowania w różnych materiałach. Następnie dobraliśmy kolorystykę i typografię, tworząc spójny system wizualny."
              },
              {
                title: "Wdrożenie",
                content: "Całość została zamknięta w brandbooku, który dziś jest wykorzystywany:",
                list: [
                  "w social media",
                  "w materiałach drukowanych",
                  "przez innych grafików pracujących z marką"
                ]
              }
            ],
            result: "Spójna, rozpoznawalna marka, która komunikuje jakość premium i buduje zaufanie klientów już na pierwszym kontakcie."
          },
          images: ['./portfolio/YOU-logo.jpg', './portfolio/YOU-logo2.png'] 
        },
        { 
          title: "Banery E-commerce - Grafiki, które sprzedają", 
          brief: "Jak zamienić przypadkowe zdjęcia w grafiki, które realnie zwiększają konwersję? Zobacz nasze podejście do projektowania banerów i materiałów e-commerce.", 
          caseStudy: {
            headline: "Banery E-commerce – grafiki, które sprzedają",
            sections: [
              {
                title: "Wyzwanie",
                content: "W wielu sklepach internetowych największym problemem nie jest sam produkt, ale jego prezentacja. Klienci często korzystają z przypadkowych zdjęć lub grafik przygotowanych bez doświadczenia sprzedażowego, co bezpośrednio przekłada się na niską konwersję."
              },
              {
                title: "Cel",
                content: "Stworzenie grafik, które nie tylko wyglądają dobrze, ale przede wszystkim zwiększają atrakcyjność produktu i zachęcają do zakupu."
              },
              {
                title: "Podejście",
                content: "Tworzymy banery sprzedażowe, slidery oraz grafiki produktowe, w których kluczowe jest:",
                list: [
                  "pokazanie produktu w możliwie najbardziej atrakcyjny sposób",
                  "budowanie klimatu i kontekstu użycia",
                  "czytelna hierarchia wizualna, która prowadzi użytkownika"
                ]
              }
            ],
            result: "W projektach wykorzystujemy doświadczenie w prezentacji produktów oraz nowoczesne narzędzia, w tym AI, co pozwala nam tworzyć realistyczne, dopracowane wizualnie sceny bez ograniczeń produkcyjnych."
          },
          images: ['./portfolio/VelvetBeanCoffee-Branding.jpg', './portfolio/kuchnia-mobile.png', './portfolio/kolagen.jpg', './portfolio/Beard-Oils-Mockup.jpg'] 
        },
        { 
          title: "Projekty do druku - spójność marki w każdym detalu", 
          brief: "Silna marka to każdy punkt styku z klientem. Zobacz, jak projektujemy materiały do druku, które wzmacniają rozpoznawalność i budują profesjonalny wizerunek.", 
          caseStudy: {
            headline: "Projekty do druku – spójność marki w każdym detalu",
            sections: [
              {
                title: "Wyzwanie",
                content: "Silna marka to nie tylko logo czy strona, ale każdy punkt styku z klientem – od wizytówki, przez materiały reklamowe, aż po oznakowanie w przestrzeni. Wiele firm traci na wizerunku przez niespójne lub przypadkowe projekty do druku, które nie oddają charakteru marki i nie przyciągają uwagi."
              },
              {
                title: "Cel",
                content: "Naszym celem jest stworzenie materiałów, które są nie tylko estetyczne, ale przede wszystkim wzmacniają rozpoznawalność i budują profesjonalny odbiór marki."
              },
              {
                title: "Co projektujemy",
                content: "Projektujemy m.in.:",
                list: [
                  "wizytówki, ulotki i materiały reklamowe",
                  "banery, rollupy i wielki format",
                  "odzież (koszulki, rashguardy)",
                  "oklejenia samochodów i elementy outdoor"
                ]
              }
            ],
            result: "Każdy projekt jest dopasowany do identyfikacji wizualnej marki i przygotowany pod realną produkcję, dzięki czemu efekt końcowy wygląda równie dobrze na żywo, jak w projekcie."
          },
          images: ['./portfolio/ksbarbers-bc.png', './portfolio/ksbarbers-rollup.png', './portfolio/ml-banner.png', './portfolio/studiosg.png'] 
        }
      ]
    },
    hero: {
      badge: "Premium Design Studio",
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
      title: "Cennik oparty na wartości",
      mostPopular: "Bestseller",
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
      title: "Kontakt",
      contactInfo: "Dane kontaktowe",
      description: "Wolisz bezpośredni kontakt? Zadzwoń lub napisz, albo po prostu skorzystaj z formularza obok. Odpowiadamy konkretnie i na temat.",
      socials: "Znajdź nas w sieci",
      name: "Nazwa / Imię i nazwisko",
      namePlaceholder: "Jan Kowalski / Zunilab",
      email: "Adres e-mail",
      phone: "Numer telefonu",
      message: "Wiadomość: czego potrzebujesz?",
      brandbook: "Brandbook firmowy jeśli posiadasz, jeśli nie, chętnie wesprzemy w realizacji brandbooka i całej identyfikacji wizualnej marki, produktów itd.",
      submit: "Wyślij zapytanie",
      success: "Wiadomość wysłana! Skontaktujemy się z Tobą wkrótce.",
      error: "Wystąpił błąd. Spróbuj ponownie później."
    },
    testimonials: {
      title: "Co mówią o nas klienci",
      viewAll: "Zobacz wszystkie",
      items: [
        {
          quote: "Michał to prawdziwy pasjonat. Swoją pracę wykonuje bardzo starannie, jest mega kreatywny. Dzięki niemu logo naszego studia sportu wygląda wyjątkowo i rewelacyjnie. Super kontakt i szybka realizacja. Współpracujemy nadal i polecamy tego fachowca z czystym sumieniem.",
          name: "Seweryn Guzior",
          handle: "Studio Sportu SG"
        },
        {
          quote: "Miałam przyjemność współpracować z Michałem przy tworzeniu logo dla mojej firmy Beauty Hub Dublin. Wykazał się dużym profesjonalizmem, kreatywnością i dbałością o szczegóły. Uważnie wysłuchał moich potrzeb i stworzył projekt, który idealnie oddaje charakter marki. Z pełnym przekonaniem polecam Michała jako utalentowanego grafika z pasją i świeżym spojrzeniem.",
          name: "Żaneta",
          handle: "BeautyHubs"
        },
        {
          quote: "Zunilab stworzyło dla nas coś niesamowitego. Poprzednie projekty od innych grafików zupełnie nie trafiały w nasz gust. Zunilab od razu wyczuło klimat premium i minimalizm, na którym nam zależało. Nowe logo i brandbook to strzał w dziesiątkę!",
          name: "Gaba",
          handle: "YOU Beauty Salon"
        },
        {
          quote: "Potrzebowałem eleganckiego logo dla mojej nowej marki skórzanych portfeli. Projekt przeszedł moje najśmielsze oczekiwania – jest klasyczny, a zarazem nowoczesny. Świetny kontakt i pełen profesjonalizm.",
          name: "Piotr Z.",
          handle: "Marka skórzanych portfeli"
        },
        {
          quote: "Zamówiłem baner na sklep internetowy z suplementami. Grafika jest dynamiczna, przyciąga wzrok i co najważniejsze – konwertuje. Zdecydowanie polecam współpracę!",
          name: "Grzegorz",
          handle: "Insport Nutrition"
        },
        {
          quote: "Szybka i konkretna realizacja. Strona powstała błyskawicznie, wygląda nowocześnie i działa bez zarzutu. Idealne rozwiązanie dla kogoś, kto potrzebuje profesjonalnej wizytówki w sieci na wczoraj.",
          name: "Mateusz",
          handle: "15 min site"
        },
        {
          quote: "Świetna współpraca przy tworzeniu materiałów dla naszego barber shopu. Projekty idealnie oddają męski, surowy klimat, na którym nam zależało. Pełen profesjonalizm i terminowość.",
          name: "Żaneta",
          handle: "KS Barbers"
        },
        {
          quote: "Współpraca przy tworzeniu grafik produktowych, logo i szyldu dla Velvet Bean to czysta przyjemność. Estetyka na najwyższym poziomie, wszystko spójne i dopracowane w każdym detalu. Klienci od razu zwracają uwagę na nasz nowy wizerunek.",
          name: "Natalia",
          handle: "Velvet Bean"
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
