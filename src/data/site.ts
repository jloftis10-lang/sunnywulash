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

export interface RefillPricing {
  twoWeek: string;
  threeWeek: string;
  touchUp: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  price: string;
  duration: string;
  // Only the 5 full-set lash extension styles have refill/touch-up pricing.
  refill?: RefillPricing;
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
  // Confirmed with the client: this is a home studio, not a commercial
  // address. The street address that was on Yelp must never be shown on
  // the site — per the master prompt's own rule, a home studio shows an
  // area only. Do not re-add a street/city/zip here.
  serviceArea: "San Marcos, CA",
  social: {
    instagram: "https://www.instagram.com/sunnywulash/",
    facebook: "https://www.facebook.com/Sunnywulash/",
    yelp: "https://yelp.to/Jtzhd3nYUp",
    linkedin: "",
  },
  // Real prices and durations, provided directly by the client. Refill
  // pricing covers both a 2-week and a 3-week interval, plus a 30-minute
  // touch-up — all real, nothing estimated.
  services: [
    {
      name: "Classic Full Set",
      description: "One extension applied to each natural lash for a clean, natural look.",
      price: "$109",
      duration: "1h 15m",
      refill: { twoWeek: "$65", threeWeek: "$85", touchUp: "$35 (30 min)" },
    },
    {
      name: "Hybrid Full Set",
      description: "A mix of classic and volume techniques for extra texture without full drama.",
      price: "$139",
      duration: "1h 30m",
      refill: { twoWeek: "$75", threeWeek: "$95", touchUp: "$45 (30 min)" },
    },
    {
      name: "Volume Full Set",
      description: "Multiple lightweight extensions fanned onto each natural lash for a fuller look.",
      price: "$159",
      duration: "1h 45m",
      refill: { twoWeek: "$85", threeWeek: "$105", touchUp: "$50 (30 min)" },
    },
    {
      name: "Mega Volume Full Set",
      description: "Maximum fullness and drama using ultra-fine extensions.",
      price: "$189",
      duration: "2h",
      refill: { twoWeek: "$95", threeWeek: "$115", touchUp: "$60 (30 min)" },
    },
    {
      name: "Wet Mascara Set",
      description: "A glossy, just-applied-mascara look.",
      price: "$129",
      duration: "1h 30m",
      refill: { twoWeek: "$70", threeWeek: "$90", touchUp: "$40 (30 min)" },
    },
    {
      name: "Lash Lift",
      description: "Lifts and curls your natural lashes without extensions.",
      price: "$85",
      duration: "TODO: duration",
    },
    {
      name: "Lash Tint",
      description: "Deepens the color of your natural lashes.",
      price: "$25",
      duration: "TODO: duration",
    },
    {
      name: "Eyebrow Tint",
      description: "Deepens and defines your natural brow color.",
      price: "$25",
      duration: "TODO: duration",
    },
    {
      name: "Eyebrow Lamination",
      description: "Sets brow hairs in a fuller, more uniform shape.",
      price: "$75",
      duration: "TODO: duration",
    },
    {
      name: "Eyebrow Threading",
      description: "Precise brow shaping using the threading technique.",
      price: "$10",
      duration: "TODO: duration",
    },
    {
      name: "Eyelash Extension Removal",
      description: "Safe removal of existing lash extensions.",
      price: "$25",
      duration: "TODO: duration",
    },
  ],
  policies: {
    deposit: "TODO: deposit policy",
    // Real, from the client's exact words.
    cancellation: "Cancellations require at least 24 hours' notice. A $25 fee applies to cancellations made with less notice, though exceptions may be made for special circumstances.",
    lateArrival: "TODO: late arrival policy",
    // Real, inferred directly from the fact that both 2-week and 3-week
    // refill prices are published — not an invented policy.
    fillTiming: "Refills are available at either 2 or 3 weeks — see Services for pricing at each interval.",
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
    // Real, the client's own full bio sent directly (supersedes Yelp's
    // truncated "About the Business" fragment).
    bio: "I'm a skilled, experienced, professional master lash artist. Every set is customized to your natural lashes — their length, density, thickness, and your personal preferences — to create a beautiful, personalized American-style lash look that is uniquely yours. My commitment to premium products, professional application, cleanliness, and consistent results has earned the trust, love, and recognition of many clients. I work independently out of my home studio.",
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
