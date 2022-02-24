import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { UploadButton } from "../Components/images/uploadButton";
import { useRouter } from 'next/router'

import styles from "../styles/Home.module.css";


export default function sharePage() {;
    const router = useRouter()
    const {email} = router.query;
    console.log(email);
 
  return (
    <div class="container marginTop">
      <div class="row">
        <div class="col-lg-6">
          
          <form>
          <div className={styles.margin}>
              {/* <label>Name</label> */}
              <input
                type="text"
                name="target"
                required
                readOnly
                className="form-control"
                value = {encodeURI(`http://localhost:3000/paymentPage?email=${email}`)}
                
              
              />
            </div>
          
          </form>
          <a class = "btn btn-success" href={`https://facebook.com/sharer/sharer.php?u=${encodeURI(`http://localhost:3000/paymentPage?email=${email}`)}`}>Share on Facebook</a>
        </div>
      </div>
    </div>
  );
}
