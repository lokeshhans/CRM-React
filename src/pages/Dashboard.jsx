import DataTable from "react-data-table-component";
import { FaDownload } from "react-icons/fa";
import { usePDF } from "react-to-pdf";

import HomeLayout from "../HomeLayout/HomeLayout";
import useTickets from "../hooks/useTickets";


const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
const Dashboard = () => {
  const [ticketState] = useTickets();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const columns = [
    {
      name: "Ticket Id",
      selector: (row) => row._id,
      reorder: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      reorder: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      reorder: true,
    },
    {
      name: "Reporter",
      selector: (row) => row.assignedTo,
      reorder: true,
    },
    {
      name: "Priority",
      selector: (row) => row.ticketPriority,
      reorder: true,
      sortable: true,
    },
    {
      name: "Assignee",
      selector: (row) => row.assignee,
      reorder: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      reorder: true,
      sortable: true,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
        fontSize: "18px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  return (
    <div className="">
      <HomeLayout>
        <div className="min-h-[90vh] w-full bg-red-50  flex flex-col items-center justify-center gap-2">
          <div className="bg-yellow-500 w-full text-black text-center text-3xl py-4 font-bold hover:bg-yellow-400 transition-all ease-in-out duration-300">
            Tickets Records{" "}
            <FaDownload
              onClick={() => toPDF()}
              className="inline cursor-pointer"
            />
          </div>

          {/* Table */}

          <div className="flex flex-col w-full" >
            {/* Title row */}
            <div className="flex text-white font-bold justify-between items-center gap-3 bg-purple-600 px-2 py-2 grid-cols-7">
              <div className="table-title basis-[8%] justify-start">
                Ticket Id
              </div>
              <div className="table-title basis-[12%]">Title</div>
              <div className="table-title basis-[20%]">Description</div>
              <div className="table-title basis-[20%]">Reporter</div>
              <div className="table-title basis-[5%]">Priority</div>
              <div className="table-title basis-[22%]">Assignee</div>
              <div className="table-title basis-[13%] justify-end mr-4">
                Status
              </div>
            </div>

            {/* ticket details */}
            

            <div ref={targetRef}>
              {ticketState && (
                <DataTable
                  columns={columns}
                  data={ticketState.ticketList}
                  expandableRows
                  expandableRowsComponent={ExpandedComponent}
                  customStyles={customStyles}
                />
              )}
            </div>
          </div>
        </div>
      </HomeLayout>
    </div>
  );
};

export default Dashboard;
