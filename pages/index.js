import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavHeader from "../Components/Nav/NavHeader";
import Profile from "../Components/User/Profile";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
export default function Home(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  const [url, setImageUrl] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();

    //let isValidForm = handleValidation();

    const res = await fetch("/api/uploadForm", {
      body: JSON.stringify({
        email: email,
        name: name,
        message: message,
        title: title,
        url: url,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div class="container marginTop">
      <div class="row">
        <div class="col-md-6 mb-4">
          <h5>How it works</h5>
          <ul class="list-group">
            <li class="list-group-item disabled">
              <div class="fas fa-cog"><i class="fas fa-stamp"></i>
              <h6>Create and set up an account on Naijafundme</h6>
                 <p>
                   Once your account is created, verify your email and proceed with setting up a naijafundme donation
                 </p>
                </div>
                
                </li>
                <li class="list-group-item disabled">
              <div class="fas fa-cog">
              <h6>Create a donation</h6>
                 <p>
                   Please ensure ensure that you create only once single donation at a time and upload an image correctly describing your situation
                 </p>
                </div>
                
                </li>
                <li class="list-group-item disabled">
              <div class="fas fa-cog">
              <h6>Share the donation link to friends on social media</h6>
                 <p>
                   Immediately the donation is created, you can proceed with sharing the link online
                 </p>
                </div>
                
                </li>
                <li class="list-group-item disabled">
              <div class="fas fa-cog">
              <h6>Widthrawal Policy</h6>
                 <p>
                  Please ensure your withrawal request is sent 5 business days before your expected date of cash withrawal
                 </p>
                </div>
                
                </li>
          </ul>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
              <h3 class="colorp">Report a fraud</h3>
              <form onSubmit={formSubmit}>
                <div className={styles.margin}>
                  {/* <label>Name</label> */}
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="subject"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className={styles.margin}>
                  {/* <label>Name</label> */}
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className={styles.margin}>
                  {/* <label>Email</label> */}
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.margin}>
                  {/* <label></label> */}
                  <textarea
                    type="text"
                    name="message"
                    required
                    placeholder="message"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button class="btn btn-success widthBtn" type="submit">
                  Next
                </button>
              </form>
            </div>
            <div class="col-lg-3"></div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
