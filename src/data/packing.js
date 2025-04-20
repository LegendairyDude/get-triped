// src/data/packing.js

// 1) Define your core “All‑Inclusive Necessities” up front:
const defaultNecessities = [
  "Sunscreen (resort prices are high)",
  "Small US$ bills for tipping",
  "Pool floatie (great for lazy rivers)",
  "Comfortable slip‑on shoes (Crocs or sandals)",
  "Wide‑brim sun hat",
  "UV‑block sunglasses",
  "Insulated tumbler or cup with straw",
  "Large reusable water bottle",
  "Positive, go‑with‑the‑flow attitude",
  "Blister pads / band‑aids",
  "Waterproof phone pouch (affiliate link)",
];

// 2) Export the packing object, referencing defaultNecessities
export const packing = {
  default: defaultNecessities,

  "dominican-republic": {
    necessities: [
      ...defaultNecessities,
      "Completed e‑Ticket form (print a copy)",
      "Lightweight long‑sleeve shirt (mosquito control)",
    ],
    notes:
      "E‑Ticket is mandatory for boarding; fill out online at eticket.migracion.gob.do before departure.",
  },

  "costa-rica": {
    necessities: [
      ...defaultNecessities,
      "Reef‑safe sunscreen",
      "Insect repellant with DEET",
      "Packable rain jacket (afternoon showers are common)",
    ],
    notes:
      "Many eco‑resorts enforce reef‑safe sunscreen only—check your resort’s policy before packing.",
  },

  jamaica: {
    necessities: [
      ...defaultNecessities,
      "Lightweight beach towel (resort towels sometimes limited)",
      "Reusable waterproof pouch for IDs/cash",
    ],
    notes:
      "While most resorts offer towels, having your own small beach towel makes quick trips to bars/pools easier.",
  },

  bahamas: {
    necessities: [
      ...defaultNecessities,
      "Underwater camera or GoPro",
      "Snorkel mask (resort equipment is often shared)",
    ],
    notes:
      "Many all‑inclusive packages include snorkeling—but bringing your own mask ensures a perfect fit.",
  },

  barbados: {
    necessities: [
      ...defaultNecessities,
      "North American‑style power adapter (outlets are Type A/B)",
      "Light scarf or shawl (some restaurants have dress codes)",
    ],
    notes:
      "Barbados resorts may enforce smart‑casual dress in their fine‑dining venues—pack a lightweight wrap.",
  },

  cuba: {
    necessities: [
      ...defaultNecessities,
      "Tourist card (visa) — obtain from your airline or Cuban consulate",
      "Cash in EUR or CAD (USD faces 10% surcharge)",
    ],
    notes:
      "US dollars incur a 10% tax on exchange—bring Euros or Canadian dollars instead. Tourist cards are required and can’t be purchased on arrival.",
  },
};
