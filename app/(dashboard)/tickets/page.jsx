import { Suspense } from "react";
import Link from "next/link";

import TicketList from "./TicketList";
import Loading from "../loading";

export const metadata = {
  title: "Helpdesk | Tickets",
  description: "Welcome to the Helpdesk: Your Next-Gen Support",
};

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Current open tickets</small>
          </p>
        </div>
        <Link href="tickets/create" className="ml-auto">
          <button className="btn-primary">New Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Tickets;
