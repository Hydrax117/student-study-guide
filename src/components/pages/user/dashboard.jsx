import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UserDashboard = () => {
  // const [user, setUser] = useState("");
  const [student, setStudent] = useState("");
  const [level, setLevel] = useState("");
  const user = window.localStorage.getItem("user");

  const [isLoggedin, setIsLoggedin] = useState("");

  const getCourses = async (req, res) => {
    console.log("f", student.level);
  };

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const regNo = user;

    fetch(
      `http://localhost:4000/student/profile?regNo=${regNo}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        var a = result.data.level;
        setLevel(a);
      })
      .catch((error) => console.log("s error", error.message));

    // if (loggedInUser) {
    //   const foundUser = JSON.parse(loggedInUser);
    //   setUser(foundUser);
    // }
  }, []);

  return (
    <>
      <div className="container">
        <h1>
          hello {user},{level}
        </h1>
      </div>
    </>
  );
};

export default UserDashboard;
