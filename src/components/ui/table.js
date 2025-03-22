import DataTable from "react-data-table-component";
import { FaInfoCircle } from "react-icons/fa";

const Table = ({
  table,
  width,
  border,
  onRowClicked,
  background,
  customStyles,
  ...props
}) => {
  return (
    <DataTable
      noHeader
      sortServer
      fixedHeader
      selectableRows={props.selectedRowsActionsItems ? true : false}
      responsive={true}
      columns={table.columns}
      data={table.data}
      customStyles={{
        table: {
          style: {
            background: "#3333",
            color: "red",
            width: "100%",
            overflowY: "auto",
            overflowX: "auto",
            maxHeight: "600px",
            scrollbarWidth: "thin",
            borderRadius: "0px !important",
          },
        },
        tableWrapper: {
          style: {
            width: "100%",
            borderRadius: "0px",
            scrollbarWidth: "thin",
          },
          className: "tableWrapper",
        },
        header:{
      style:{
        borderRadius:"0px"
      }
        },
        headCells: {
          style: {
            color: "#00C0FF",
            fontWeight: "500",
            fontSize: "15px",
            display: "flex",
            justifyContent: "center",
            paddingInline: "10px",
            width: "fit-content",
            background: "#10253F",
            border: "none",
            textWrap: "wrap",
            textAlign:"center",
            opacity:"0.9"
          },
        },
        rows: {
          style: {
            border: "none",
          },
        },
        cells: {
          style: {
            color: "white",
            fontWeight: "400",
            fontSize: "12px",
            display: "flex",
            justifyContent: "center",
            padding: "3px",
            background: "#061534",
            border: "none",
            textWrap: "wrap",
            textAlign:"center   "
          },
        },
      }}
      onRowClicked={onRowClicked}
      progressPending={table.loading}
      noDataComponent={
        <div
          className={`flex h-[400px] w-full items-center justify-center gap-4 rounded-lg border-none bg-background p-2 text-2xl text-gray-400 ${
            props.pageTabs ? "border-t-0" : ""
          }`}
        >
          <FaInfoCircle className="text-[#1a1a1a] text-xl" />
          <h3 className="py-12 text-center font-semibold">لا يوجد بيانات</h3>
        </div>
      }
    />
  );
};

export default Table;
