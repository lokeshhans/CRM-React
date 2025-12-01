import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import {
  filterTickets,
  getAllTicketsForTheUser,
  resetTicketList,
} from "../Redux/Slices/TicketSlice";

function useTickets() {
  const authState = useSelector((state) => state.auth);
  const ticketState = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  async function loadTickets() {
    if (ticketState.downloadedTickets.length == 0) {
      await dispatch(getAllTicketsForTheUser());
    }
    if (searchParams.get("status")) {
      // dispatch a filter action
      dispatch(filterTickets({ status: searchParams.get("status") }));
    } else {
      dispatch(resetTicketList());
    }
  }

  useEffect(() => {
    loadTickets();
  }, [authState.token, searchParams.get("status")]);

  return [ticketState];
}
export default useTickets;
