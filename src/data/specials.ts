// Everything shown on the /specials page (and its teaser on /services)
// lives in this one file. Edit the values below and redeploy — nothing
// else in the codebase needs to change.
//
// This file holds two separate things:
// - `specials` — the current specific promotion (prices, dates, etc.)
// - `socialSpecials` — an always-on banner pointing visitors to social
//   media for whatever deals are currently posted there
//
// - To change a price or any wording, edit the string in quotes.
// - To add a discounted item, copy one line inside `specialPrices` below
//   and edit its three values. To remove one, delete its line.
// - When a promotion ends, set its `active` to `false`. That hides the
//   relevant nav link / teaser / page content automatically — you don't
//   need to delete anything below, so it's ready to flip back on (or
//   edit) for the next one.

export interface SpecialPrice {
  name: string;
  regular: string;
  special: string;
}

export interface Specials {
  active: boolean;
  eyebrow: string;
  title: string;
  audienceNote: string;
  fillOffer: string;
  setOffer: string;
  specialPrices: SpecialPrice[];
  closingMessage: string;
}

// A separate, evergreen banner (not tied to a specific promotion) pointing
// visitors to social media for current deals. Shows on /specials below the
// active promotion above, if there is one. Set `active` to `false` to hide
// it — e.g. if she stops posting specials on social media.
export interface SocialSpecials {
  active: boolean;
  eyebrow: string;
  title: string;
  message: string;
}

export const socialSpecials: SocialSpecials = {
  active: true,
  eyebrow: "Stay in the loop",
  title: "📱 More Specials on Social Media",
  message: "Follow along on Instagram and Facebook — that's where new deals, flash sales, and limited-time offers get posted first.",
};

export const specials: Specials = {
  active: true,
  eyebrow: "Limited-time offer",
  title: "🎄 Holiday Lash Special",
  audienceNote: "For your first visit",
  fillOffer: "$10 off fills",
  setOffer: "$20 off any full lash set",
  specialPrices: [
    { name: "Classic Set", regular: "$109", special: "$89" },
    { name: "Hybrid Set", regular: "$139", special: "$119" },
    { name: "Volume Set", regular: "$159", special: "$139" },
    { name: "Wet Mascara Set", regular: "$129", special: "$109" },
    { name: "Mega Volume Set", regular: "$189", special: "$169" },
    { name: "Lash Lift", regular: "$85", special: "$75" },
  ],
  closingMessage: "✨ Book your holiday lash appointment today and enjoy these savings before the limited-time offer ends! ❤️",
};
