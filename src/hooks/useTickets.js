import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllTicketsForTheUser } from "../Redux/Slices/TicketSlice";

function useTickets() {
  const authState = useSelector((state) => state.auth);
  const ticketState = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  async function loadTickets() {
    const response = await dispatch(getAllTicketsForTheUser());
    console.log(response);
  }

  useEffect(() => {
    if (ticketState.ticketList.length == 0) {
      loadTickets();
    }
  }, [authState.token]);

  return [ticketState];
}
export default useTickets;