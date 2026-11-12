// Single source of truth for all business content. Components read from
// here — no business text should be hard-coded in a component. Any value
// the client hasn't provided yet is a literal "TODO: <field>" string so it
// stays visible on the live site (and in the build warning below) until
// it's replaced with real content.

export interface HoursEntry {
  day: string;
  open: string;
  close: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  yelp: string;
  linkedin: string; // empty string = not shown
}

export interface ServiceItem {
  name: string;
  description: string;
  price: string;
  duration: string;
}

export interface Policies {
  deposit: string;
  cancellation: string;
  lateArrival: string;
  fillTiming: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Review {
  text: string;
  author: string;
  source: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface About {
  ownerName: string;
  bio: string;
  training: string;
}

export interface Brand {
  colors: {
    primary: string;
    primaryDark: string;
    ink: string;
    surface: string;
  };
  fonts: {
    display: string;
    body: string;
  };
  logoPath: string; // empty = render a text wordmark instead of an image
}

export interface SiteConfig {
  name: string;
  tagline: string;
  area: string;
  phone: string;
  email: string;
  bookingUrl: string;
  hours: HoursEntry[];
  address?: Address;
  serviceArea?: string;
  social: SocialLinks;
  services: ServiceItem[];
  policies: Policies;
  prep: string[];
  aftercare: string[];
  faqs: Faq[];
  reviews: Review[];
  gallery: GalleryImage[];
  about: About;
  brand: Brand;
}

const allDaysOpen = { open: "8:00 AM", close: "8:00 PM" };

export const site: SiteConfig = {
  name: "Sunny Wu Lash",
  // Real, from the client's own business card.
  tagline: "A master lash stylist",
  area: "San Marcos, CA",
  phone: "(858) 231-7210",
  // Real, from the client's own business card.
  email: "sunnywu0916@yahoo.com",
  // No booking system — the client wants clients to text or email her
  // directly rather than go through Yelp's request-appointment flow. This
  // is the primary CTA destination everywhere "Book Now" appears. Yelp
  // stays as a secondary link (footer icon, reviews, JSON-LD sameAs) but
  // is no longer the main conversion path.
  bookingUrl: "sms:+18582317210",
  hours: [
    { day: "Monday", ...allDaysOpen },
    { day: "Tuesday", ...allDaysOpen },
    { day: "Wednesday", ...allDaysOpen },
    { day: "Thursday", ...allDaysOpen },
    { day: "Friday", ...allDaysOpen },
    { day: "Saturday", ...allDaysOpen },
    { day: "Sunday", ...allDaysOpen },
  ],
  // Real street address (confirmed via Yelp listing) — this is a studio
  // location, not a home studio, so we show the address, not a vague area.
  address: {
    street: "1550 Grandon Ave",
    city: "San Marcos",
    state: "CA",
    zip: "92078",
  },
  social: {
    instagram: "https://www.instagram.com/sunnywulash/",
    facebook: "https://www.facebook.com/Sunnywulash/",
    yelp: "https://yelp.to/Jtzhd3nYUp",
    linkedin: "",
  },
  // Service names are real (verified on the client's own Yelp listing).
  // Pricing and duration were not provided — even Yelp's own "price range"
  // field is blank for this business — so those stay as TODOs rather than
  // guessed.
  services: [
    {
      name: "Eyelash Extensions",
      description: "Classic, hybrid, volume, mink, silk, or lower-lash styles, customized to your eye shape.",
      price: "TODO: price",
      duration: "TODO: duration",
    },
    {
      name: "Eyelash Extension Refill / Touch-Up",
      description: "TODO: description",
      price: "TODO: price",
      duration: "TODO: duration",
    },
    {
      name: "Eyelash Extension Removal",
      description: "TODO: description",
      price: "TODO: price",
      duration: "TODO: duration",
    },
    {
      name: "Eyelash Lift",
      description: "TODO: description",
      price: "TODO: price",
      duration: "TODO: duration",
    },
    {
      name: "Eyelash Perm",
      description: "TODO: description",
      price: "TODO: price",
      duration: "TODO: duration",
    },
  ],
  policies: {
    deposit: "TODO: deposit policy",
    cancellation: "TODO: cancellation policy",
    lateArrival: "TODO: late arrival policy",
    fillTiming: "TODO: fill timing policy",
  },
  prep: ["TODO: prep steps"],
  aftercare: ["TODO: aftercare steps"],
  // Left empty on purpose — no real FAQ content has been provided yet.
  // The Policies & Aftercare page hides the FAQ accordion when this is
  // empty, same as the reviews section, rather than show placeholder Q&As.
  faqs: [],
  // Real reviews only, pulled verbatim from the client's public Yelp
  // listing with first name + last initial + city, attributed to Yelp.
  reviews: [
    {
      text: "Sunny does a great job on my lashes. She has a very professional demeanor as well as welcoming. She listens to exactly the kind of style you like and customizes each set to your liking. Her space is super clean and you will not regret booking an appointment with Sunny.",
      author: "Aleena A., Escondido, CA",
      source: "Yelp",
    },
    {
      text: "Sunny is very professional and did a thorough job on my lash extensions. She has a peaceful atmosphere and a very gentle touch. My new extensions are full, natural looking and more comfortable than ever - just what I wanted! Thank you, Sunny!",
      author: "Kathleen M., San Marcos, CA",
      source: "Yelp",
    },
    {
      text: "It's like spa day for your lashes. Sunny is so gentle it feels like she is petting your lashes. So soothing it puts me right to sleep. When I wake up I'm beautiful and had a great nap. She has been taking care of my lashes for years now and always does such an excellent job. She is very responsive and gets you an appt quickly. Her prices are reasonable too.",
      author: "Chris F., San Diego, CA",
      source: "Yelp",
    },
  ],
  // Real photos of the client's own work, provided directly by the client.
  gallery: [
    { src: "sunny-wu-lash-01.png", alt: "Numbered lash-length mapping chart applied across the lash line before applying volume lash extensions" },
    { src: "sunny-wu-lash-02.png", alt: "Close-up comparison of natural lashes before and after a full set of volume lash extensions" },
    { src: "sunny-wu-lash-03.png", alt: "Closed eyes with full volume lash extensions and under-eye gel pads during an application" },
    { src: "sunny-wu-lash-04.png", alt: "Finished eye with a numbered lash-mapping chart overlaid showing precise lash placement" },
    { src: "sunny-wu-lash-05.png", alt: "Finished dramatic volume lash extensions with under-eye gel pads still in place" },
    { src: "sunny-wu-lash-06.png", alt: "Style reference chart showing four different lash extension looks, each labeled in Chinese" },
    { src: "sunny-wu-lash-07.png", alt: "Client relaxing in the studio chair during a lash appointment" },
    { src: "sunny-wu-lash-08.png", alt: "Close-up profile view of finished volume lash extensions" },
  ],
  about: {
    // Real, from the client's own Yelp business-owner listing.
    ownerName: "Sunny W.",
    // Yelp's "About the Business" field is truncated mid-sentence
    // ("Always master stylist; unique technique; custom design; best
    // quality…") — using a cut-off fragment as site copy would read as
    // broken, so this stays a TODO until the client sends the full bio
    // rather than guessing how it ends.
    bio: "TODO: full bio from client",
    training: "TODO: training/certifications",
  },
  brand: {
    // Light purple / lavender, per the client's stated preference. See
    // src/styles/global.css for the full token set and contrast notes —
    // every pairing used for text is checked against WCAG AA.
    colors: {
      primary: "#55418c",
      primaryDark: "#3e2d6c",
      ink: "#302547",
      surface: "#f0e7f7",
    },
    fonts: {
      display: "Fraunces",
      body: "Inter",
    },
    logoPath: "", // BrandLogo.astro imports the logo for Astro image optimization.
  },
};

function collectTodos(value: unknown, path = ""): string[] {
  if (typeof value === "string") {
    return value.startsWith("TODO:") ? [`${path}: ${value}`] : [];
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => collectTodos(item, `${path}[${index}]`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) =>
      collectTodos(item, path ? `${path}.${key}` : key),
    );
  }
  return [];
}

export const todos = collectTodos(site);

if (import.meta.env.PROD && todos.length > 0) {
  // eslint-disable-next-line no-console
  console.warn(
    `\n⚠ ${todos.length} TODO value(s) left in src/data/site.ts:\n` +
      todos.map((entry) => `  - ${entry}`).join("\n") +
      "\n",
  );
}
