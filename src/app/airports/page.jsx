"use client";

export default function AirportsPage() {
  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        Airports & Travel Tips for Canadian Travelers
      </h2>

      {/* General Guidelines */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-dark mb-4">
          General Guidelines
        </h3>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li>
            <strong>Plan Ahead:</strong> Arrive at least 2 hours before domestic
            flights and 3 hours before international departures.
          </li>
          <li>
            <strong>Online Check-in:</strong> Check in online to save time and
            select your preferred seat.
          </li>
          <li>
            <strong>Travel Documents:</strong> Ensure you have a valid passport,
            boarding pass, and any required visas or eTA.
          </li>
          <li>
            <strong>Airport Apps:</strong> Download your airport’s app for
            real-time flight updates, terminal maps, and security wait times.
          </li>
        </ul>
      </section>

      {/* Carry-On & Baggage Restrictions */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-dark mb-4">
          Carry-On & Baggage Restrictions
        </h3>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li>
            <strong>Liquid Restrictions:</strong> All liquids must be in
            containers of 100 ml (3.4 oz) or less and fit within a single,
            clear, resealable 1-litre bag.
          </li>
          <li>
            <strong>Electronics:</strong> Laptops, tablets, and other
            electronics should be easily accessible as you may be asked to
            remove them during security screening.
          </li>
          <li>
            <strong>Sharp Objects:</strong> Items like knives and scissors are
            prohibited in carry-on luggage.
          </li>
          <li>
            <strong>Carry-On Size:</strong> Adhere to airline-specific size and
            weight restrictions—typically around 22 x 14 x 9 inches for domestic
            flights.
          </li>
        </ul>
      </section>

      {/* Security & Customs Tips */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-dark mb-4">
          Security & Customs Tips
        </h3>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li>
            <strong>Security Screening:</strong> Remove electronics and liquids
            from your bag before entering the scanner.
          </li>
          <li>
            <strong>Minimize Metal:</strong> Avoid wearing belts or large
            jewelry to speed up security checks.
          </li>
          <li>
            <strong>Customs Declarations:</strong> Be prepared to declare any
            high-value items or gifts.
          </li>
          <li>
            <strong>Prohibited Items:</strong> Familiarize yourself with items
            that are not allowed in carry-on or checked baggage.
          </li>
        </ul>
      </section>

      {/* Additional Tips for Canadian Travelers */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-dark mb-4">
          Additional Tips for Canadian Travelers
        </h3>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
          <li>
            <strong>Weather Considerations:</strong> Check local forecasts to
            pack appropriately—especially for winter conditions.
          </li>
          <li>
            <strong>Currency & Payments:</strong> Bring some Canadian dollars
            for small expenses; better rates are often available at ATMs.
          </li>
          <li>
            <strong>Emergency Contacts:</strong> Save local emergency numbers
            and embassy/consulate contact information.
          </li>
          <li>
            <strong>Mobile Roaming:</strong> Consider an international plan or
            local SIM card if traveling abroad.
          </li>
        </ul>
      </section>

      <p className="text-center text-gray-800 dark:text-gray-200 mt-8">
        <em>
          Tip: Always verify the latest guidelines on official airport and
          government websites, as requirements can change.
        </em>
      </p>
    </div>
  );
}
