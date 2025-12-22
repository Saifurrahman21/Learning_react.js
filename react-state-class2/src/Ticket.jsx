import "./Ticket.css";
import TicketNum from "./TicketNum";
export default function Ticket({ ticket }) {
  return (
    <>
      <p className="Heading">Ticket</p>
      <div className="Ticket">
        {ticket.map((num, idx) => (
          <TicketNum num={num} key={idx} />
        ))}
      </div>
    </>
  );
}
