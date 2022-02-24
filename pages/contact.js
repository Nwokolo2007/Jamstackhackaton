import { UploadButton } from "../Components/images/uploadButton";
import React, { useEffect, useState } from "react";
import Router from "next/router";

import styles from "../styles/Home.module.css";

export default function contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState("");

  const [url, setImageUrl] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();

    //let isValidForm = handleValidation();

    const res = await fetch("/api/uploadForm", {
      body: JSON.stringify({
        email: email,
        name: name,
        message: message,
        target: target,
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

    const { pathname } = Router;
    if (pathname == "/contact") {
      Router.push({ pathname: "/sharePage", query: { email: email } });
    }
  };

  return (
    <div class="container marginTop">
      <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">
          <h3 class="colorp">Set up</h3>
          <form onSubmit={formSubmit}>
            <div className={styles.margin}>
              {/* <label>Name</label> */}
              <input
                type="number"
                name="target"
                required
                placeholder="target amount"
                className="form-control"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
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
                placeholder="Tell your story here"
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className={styles.margin}>
              <UploadButton email={email} setImageUrl={setImageUrl} />
            </div>
            <button class="btn btn-success" type="submit">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
