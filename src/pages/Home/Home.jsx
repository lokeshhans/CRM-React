import { useEffect } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../Components/Card";
import HomeLayout from "../../HomeLayout/HomeLayout";
import { getAllTicketsForTheUser } from "../../Redux/Slices/TicketSlice";
function Home() {
  const authState = useSelector((state)=>state.auth);
  const ticketsState = useSelector((state)=> state.tickets);
  const dispatch = useDispatch();
  async function loadTickets(){
    const response = await dispatch(getAllTicketsForTheUser());
    console.log(response);
  }
  useEffect(() => {
    loadTickets();
  }, [authState.token]);

  return (
    <HomeLayout>
      <div className="flex flex-wrap gap-10  items-center justify-between">
        <Card>
          <BsFillPencilFill className="inline mr-2" />
        </Card>

        <Card
          status={30}
          background="bg-yellow-300"
          borderColor="border-green-300"
          fontColor="text-black"
          dividerColor="bg-black"
        >
          <BsFillPencilFill className="inline mr-2" />
        </Card>
        <Card
          status={30}
          background="bg-yellow-300"
          borderColor="border-green-300"
          fontColor="text-black"
          dividerColor="bg-black"
        >
          <BsFillPencilFill className="inline mr-2" />
        </Card>
        <Card
          status={30}
          background="bg-yellow-300"
          borderColor="border-green-300"
          fontColor="text-black"
          dividerColor="bg-black"
        >
          <BsFillPencilFill className="inline mr-2" />
        </Card>
      </div>
    </HomeLayout>
  );
}

export default Home;
