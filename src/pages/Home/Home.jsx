import { Bar, Line, Pie } from "react-chartjs-2";
import { FaHandHolding } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoLockOpenSharp } from "react-icons/io5";
import { LiaResolving } from "react-icons/lia";
import { TiCancel } from "react-icons/ti";

import Card from "../../Components/Card";
import HomeLayout from "../../HomeLayout/HomeLayout";
import useCharts from "../../hooks/useCharts.js";
import useTickets from "../../hooks/useTickets";

function Home() {
  const [ticketsState] = useTickets();
  const [pieChartData, lineChartData, barChartData] = useCharts();
  return (
    <HomeLayout>
      <div className="flex flex-wrap gap-10 items-center justify-center  ">
        <Card
          titleText="Open"
          status={
            ticketsState.ticketDistribution.open /
            ticketsState.downloadedTickets.length
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
            ticketsState.downloadedTickets.length
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
            ticketsState.downloadedTickets.length
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
            ticketsState.downloadedTickets.length
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
            ticketsState.downloadedTickets.length
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

      <div className="mt-10 flex justify-center items-center gap-10">
        <div className="w-80 h-80 ">
          <Pie data={pieChartData} />
        </div>
      </div>

      <div className="mt-10 flex justify-center items-center gap-10">
        <div className="w-[40rem] h-[40rem]">
          <Line data={lineChartData} />
        </div>
      </div>

      <div className="mt-10 mb-10 flex justify-center items-center gap-10">
        <div className="w-[50rem] bg-[wheat]">
          <Bar data={barChartData} />
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
