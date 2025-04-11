import { useEffect, useState } from "react";
import { API_URL } from "../components/Login";
import { Button, Container } from "reactstrap";
import { useLogin } from "../components/LoginContext";
const Gallery = () => {

  const [details, setDetails] = useState({username:"",email:"", firstname:""});
  const [error, setError] = useState("");
  const {toggleLogin} = useLogin();

  const getDetails = () => {
    const url = `${API_URL}/auth/me`
    const token = localStorage.getItem("token");

    return fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      }).then((res) => {
        if (res.status === 401) {
          setError(
            "You need an account to access this content"
          )
        }
        res.json()
        .then((res) => {
          console.log(res);
          setDetails({
            username: res.username, 
            email: res.email,
            firstname: res.firstName,
          })
        });

      }
      )
      .catch( error => console.error(error))
  }

  useEffect( () => {getDetails()}, []);

  return (
    <>
      <Container>
        <h1 className="text-center">Gallery</h1>
        <div className={`d-${error ? "block" : "none"} mt-5 text-center`}>
          <h4>{error}</h4>
          <Button onClick={toggleLogin}>Log in</Button>
        </div>
        
        <div className={
          `d-${details.firstname != "" ? "none" : "block"} 
          text-center mt-5`
        }>
          <h3>{details.firstname}'s username:  {details.username}</h3>
          <h5>{details.email}</h5>
        </div>
      </Container>
    </>
  )
};

export default Gallery;
