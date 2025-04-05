import { AgGridReact } from "ag-grid-react";
import { Badge, Container } from "reactstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-balham.css"

const table = {
  columns: [
    { headerName: "Title", field: "title"},
    { headerName: "Author", field: "author", filter:true},
    { headerName: "Editions", field: "editions", filter: true},
    { headerName: "Cover ID", field: "coverID"},
  ]
}



const Bookdata = () => {

  let loadingData = {title: "Loading", author: "Please wait ...", editions: "", coverID: ""}

  const [data, setData] = useState([loadingData])
  const [isLoading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect( () => {
    fetch("http://openlibrary.org/subjects/drama.json?published_in=2000")
      .then(response => response.json())
      .then(json => json.works)
      .then(works => 
        works.map( work => {
          return{
            title: work.title,
            author: work.authors[0].name,
            editions: work.edition_count,
            coverID: work.cover_id,
          } 
        })
      )
      .then(books => {
        setData(books);
        setLoading(false);
      })
  }, []);

  return (
    <>
      <Container>
      <h1 className="text-center"> Books</h1>

      <div className={
        `${ isLoading ? "invisible" : "visible"} 
        text-center mb-2`}>

        <p> 
          <Badge className="me-1" color="primary">
            {data.length}
          </Badge>
          Drama books published in 2000
        </p>

      </div>

      <div className="ag-theme-balham whitetext mx-auto"
        style={{height: "30em", width: "60em"}}
      >
        <AgGridReact
          columnDefs={table.columns}
          rowData={data}
          pagination
          paginationPageSize={10}
          paginationPageSizeSelector={false}
          onRowClicked={row => navigate(`/book?title=${row.data.title}&author=${row.data.author}`)}
        />

      </div>

      </Container>
    

    </>
  )
};

export default Bookdata;

