import { useEffect } from "react";
import { FaHandHolding } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoLockOpenSharp } from "react-icons/io5";
import { LiaResolving } from "react-icons/lia";
import { TiCancel } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../Components/Card";
import HomeLayout from "../../HomeLayout/HomeLayout";
import { getAllTicketsForTheUser } from "../../Redux/Slices/TicketSlice";
function Home() {
  const authState = useSelector((state) => state.auth);
  const ticketsState = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  async function loadTickets() {
    const response = await dispatch(getAllTicketsForTheUser());
    console.log(response);
  }
  useEffect(() => {
    loadTickets();
  }, [authState.token]);

  return (
    <HomeLayout>
      <div className="flex flex-wrap gap-10 items-center justify-center ">
        <Card
          titleText="Open"
          status={
            ticketsState.ticketDistribution.open /
            ticketsState.ticketList.length
          }
          quantity={ticketsState.ticketDistribution.open}
          background="bg-yellow-300"
          borderColor="border-green-300"
          fontColor="text-black"
          dividerColor="bg-black"
        >
          <IoLockOpenSharp className="inline mr-2" />
        </Card>
        <Card
          titleText="In Progress"
          status={
            ticketsState.ticketDistribution.inProgress /
            ticketsState.ticketList.length
          }
          quantity={ticketsState.ticketDistribution.inProgress}
          background="bg-purple-300"
          borderColor="border-red-300"
          fontColor="text-black"
          dividerColor="bg-black"
        >
          <GiProgression className="inline mr-2" />
        </Card>
        <Card
          titleText="Resolved"
          status={
            ticketsState.ticketDistribution.resolved /
            ticketsState.ticketList.length
          }
          quantity={ticketsState.ticketDistribution.resolved}
          background="bg-blue-300"
          borderColor="border-voilet-300"
          fontColor="text-black"
          dividerColor="bg-black"
        >
          <LiaResolving className="inline mr-2" />
        </Card>
        <Card
          titleText="On Hold"
          status={
            ticketsState.ticketDistribution.onHold /
            ticketsState.ticketList.length
          }
          quantity={ticketsState.ticketDistribution.onHold}
          background="bg-orange-300"
          borderColor="border-black"
          fontColor="text-black"
          dividerColor="bg-black"
        >
          <FaHandHolding className="inline mr-2" />
        </Card>

        <Card
          titleText="Cancelled"
          status={
            ticketsState.ticketDistribution.cancelled /
            ticketsState.ticketList.length
          }
          quantity={ticketsState.ticketDistribution.cancelled}
          background="bg-pink-300"
          borderColor="border-sky-300"
          fontColor="text-black"
          dividerColor="bg-black"
        >
          <TiCancel className="inline mr-2" />
        </Card>
      </div>
    </HomeLayout>
  );
}

export default Home;
