// Hard-coded airport information keyed by IATA code
//TODO embed airport maps or link direclty to downloadsq | Probably both.
export const airports = {
  YYZ: {
    code: "YYZ",
    name: "Toronto Pearson International Airport",
    city: "Toronto, Canada",
    description:
      "Canada’s busiest airport, serving domestic and international routes.",
    carryOnRules: [
      "1 carry-on bag + 1 personal item",
      "Liquids in containers ≤ 100 ml in a clear resealable 1L bag",
    ],
    checkIn: [
      "Online check-in opens 24 hrs before departure",
      "Arrive at least 2 hrs before domestic, 3 hrs before international flights",
    ],
    amenities: [
      "Maple Leaf Lounge",
      "Free airport-wide WiFi",
      "Multiple dining & retail options",
    ],
    links: {
      departuresGuide: "https://www.torontopearson.com/en/ready-to-travel",
      advancedCustomsDeclaration:
        "https://www.canada.ca/en/border-services-agency/services/arrivecan.html",
      interactiveMap: "https://maps.torontopearson.com/?lang=en&vid=yyz",
      terminalMaps:
        "https://www.torontopearson.com/en/while-you-are-here/terminal-maps",
    },
  },

  PUJ: {
    code: "PUJ",
    name: "Punta Cana International Airport",
    city: "Punta Cana, Dominican Republic",
    description: "The primary gateway to all-inclusive resorts in Punta Cana.",
    carryOnRules: [
      "1 carry-on bag + 1 personal item",
      "Liquids in containers ≤ 100 ml in a clear resealable 1L bag",
    ],
    checkIn: [
      "Online check-in available via airline",
      "Arrive at least 3 hrs before departure",
    ],
    amenities: ["Duty-free shops", "Car rental counters", "Currency exchange"],
    links: {
      vipServices:
        "https://www.puntacanainternationalairport.com/en/vip-services",
      map: "https://www.puntacanainternationalairport.com/en/#tm-bottom-b",
      eTicketForm: "https://eticket.migracion.gob.do",
    },
  },

  CUN: {
    code: "CUN",
    name: "Cancún International Airport",
    city: "Cancún, Mexico",
    description:
      "One of the busiest airports in the Caribbean, serving Cancun and the Riviera Maya.",
    carryOnRules: [
      "1 carry-on bag + 1 personal item",
      "Liquids in containers ≤ 100 ml in a clear resealable 1L bag",
    ],
    checkIn: [
      "Online check-in opens 24 hrs before departure",
      "Arrive at least 2 hrs before international flights",
    ],
    amenities: [
      "VIP lounges",
      "Duty-free shopping",
      "Restaurant and snack bars",
    ],
    links: {},
  },

  MBJ: {
    code: "MBJ",
    name: "Sangster International Airport",
    city: "Montego Bay, Jamaica",
    description: "The main gateway to Jamaica’s resort areas in Montego Bay.",
    carryOnRules: [
      "1 carry-on bag + 1 personal item",
      "Liquids in containers ≤ 100 ml in a clear resealable 1L bag",
    ],
    checkIn: [
      "Online check-in if available",
      "Arrive at least 3 hrs before departure",
    ],
    amenities: [
      "Airport lounges",
      "Duty-free shops",
      "Taxi and shuttle services",
    ],
    links: {},
  },
};
