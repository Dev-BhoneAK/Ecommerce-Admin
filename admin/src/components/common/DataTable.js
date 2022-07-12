import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const DataTable = ({ data, columns }) => {
  const NoDataIndication = () => (
    <div className="spinner">No data available!</div>
  );

  const options = {
    alwaysShowAllBtns: true,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    disablePageTitle: true,
  };

  return (
    <div className="card-body vendor-table">
      <BootstrapTable
        keyField="_id"
        data={data}
        columns={columns}
        pagination={paginationFactory(options)}
        striped
        hover
        bordered={false}
        noDataIndication={() => <NoDataIndication />}
      />
    </div>
  );
};
export default DataTable;
