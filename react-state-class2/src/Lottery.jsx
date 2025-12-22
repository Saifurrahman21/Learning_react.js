import { useState } from "react";
import Ticket from "./Ticket";
import { sum, genTicket } from "./helper";
import "./Lottery.css";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h2>Lottery Ticket</h2>
      <Ticket ticket={ticket} />
      <button className="BuyTicket" onClick={buyTicket}>
        Buy New Ticket
      </button>
      <h3>{isWinning && "Congratulation you won!"}</h3>
    </div>
  );
}
