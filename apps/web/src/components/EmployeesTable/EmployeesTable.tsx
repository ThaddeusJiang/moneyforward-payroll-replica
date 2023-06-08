import { MockEmployees } from "../../data/mock/MockEmployees";
import { DataTable } from "@omakase-ui/react-table";

import "@omakase-ui/react-table/dist/index.css";

const EmployeesTable = () => {
  const data = MockEmployees.items;
  const columns = [
    {
      Header: "name",
      accessor: "name",
      width: 300,
    },
    {
      Header: "kana",
      accessor: "kana",
    },
    {
      Header: "code",
      accessor: "code",
    },
    {
      Header: "business",
      accessor: "business",
    },
    {
      Header: "contractType",
      accessor: "contractType",
    },
  ];
  return <DataTable data={data} columns={columns} />;
};

export default EmployeesTable;
