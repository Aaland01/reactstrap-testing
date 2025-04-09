import { useState } from "react";
import { API_URL } from "../components/Login";
import { Button, Container } from "reactstrap";
const Gallery = () => {

  const [person, setPerson] = useState({name:"",year:""});
  const [name, setName] = useState("");

  const getPersonDetails = () => {
    const tempPerson = "nm0002354"
    const url = `${API_URL}/people/${tempPerson}`
    const token = localStorage.getItem("token");

    return fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      }).then((res) => 
        res.json()
          .then((res) => {
            console.log(res);
            setPerson({name: res.name, year: res.birthYear})
          })
      )
      .catch( error => console.error(error))
  }


  return (
    <>
      <Container>
        <h1 className="text-center">Gallery</h1>
        
        <div className="text-center mt-5">
          <label htmlFor="name"> Enter name: </label>
          <input type="text" name="name" id="name" 
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <br/>
          <Button onClick={getPersonDetails} color="primary" className="mt-3">
            Search { name ? `for ${name} ` : ""}
          </Button>
          <h3>{person.name}</h3>
          <h5>{person.year}</h5>
        </div>
      </Container>
    </>
  )
};

export default Gallery;
