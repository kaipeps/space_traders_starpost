import _ from 'lodash';
const cap = _.capitalize;

const frameRename = (frameName) => frameName.replace("Frame ", "");

const convertSymbolNotation = (symbol) => symbol
  .split('_').join(' ');

const displayStatusAndLocation = (nav) => {
  const status = convertSymbolNotation(nav.status)
  const location = nav.waypointSymbol
  return <>Currently: {status} {status === "In Transit" ? "To" : "At"} {location}</>
}

export default function ShipCard({ ship }) {
  const { symbol, nav, frame, registration } = ship;
  return (
    <div className="ShipCard" href="/ship">
      <span className="symbol"> Ship: {symbol} </span>
      <br />
      <span className="ship-type">
        Type: {registration.role} {frameRename(frame.name)} </span>
      <br />
      <span className="status"> {displayStatusAndLocation(nav)} </span>
    </div>
  );
};