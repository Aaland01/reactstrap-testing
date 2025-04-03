import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-balham.css"

const table = {
  columns: [
    { headerName: "Title", field: "title"},
    { headerName: "Author", field: "author"},
    { headerName: "Pages", field: "pages"},
  ],
  rowData: [
    { title: "Alfa", author: "Romeo", pages: 42},
    { title: "Beta", author: "Tate", pages: 69},
    { title: "Charlie", author: "Chaplin", pages: 1914},
  ]
}

const Bookdata = () => {
  return (
    <>
      <h1 className="text-center"> Books</h1>
      
      <div className="ag-theme-balham whitetext">
        <AgGridReact
          columnDefs={table.columns}
          rowData={table.rowData}
          pagination
        />

      </div>
    

    </>
  )
};

export default Bookdata;

