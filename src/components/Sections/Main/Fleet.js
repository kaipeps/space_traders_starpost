import { useState } from "react";
import { Link } from "react-router-dom";
import ShipCard from "../../ObjectCards/ShipCard";

export default function Fleet({ fleet }) {
  return (
    <div className="Fleet">
      <header>
        <h2>Your Ships</h2>
      </header>
      <section className="ships" >
        {fleet.map((ship, idx) => (
          <Link key={idx} to="/ship" state={{ shipSymbol: ship.symbol, nav: ship.nav }} >
            <ShipCard ship={ship} />
          </Link>
        ))}
      </section>
    </div>
  );
};