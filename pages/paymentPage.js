import router from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function PaymentPage({ email, target, message, name, url }) {
  function GetOrderId() {
    var currentDate = new Date();
    var orderId =
      currentDate.getYear().toString() +
      currentDate.getHours().toString() +
      currentDate.getMinutes().toString() +
      currentDate.getSeconds().toString();
    return orderId;
  }

  const [amt, setAmount] = useState(0);

  //const target = 7
  return (
    <div class="container marginTop">
      <div class="row">
        <div class="col-lg-6">
          <Image
            src={url !=null ?url: "/public/house5.png"}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div class="col-lg-6">
          <h5 class="colorp">Target Amount:{target}</h5>
          <form action="https://fidelitypaygate.fidelitybank.ng/CIPG/MerchantServices/MakePayment.aspx" method = "POST">
            <div className={styles.margin}>
              {/* <label>Name</label> */}
              <input
                type="number"
                name="amt"
                id="amt"
                required
                placeholder="amount"
                className="form-control"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className={styles.margin}>
              {/* <label>Name</label> */}
              <input
                type="text"
                name="orderId"
                required
                hidden
                value={GetOrderId()}
                placeholder="Name"
                className="form-control"
              />
            </div>
            <div className={styles.margin}>
              {/* <label>Email</label> */}
              <input
                type="email"
                name="email"
                id="emailid"
                required
                hidden
                value = {email}
                className="form-control"
              />
            </div>
            <div className={styles.margin}>
              {/* <label></label> */}
              <input
                type="text"
                name="mercId"
                id="mercId"
                value="00037"
                required
                hidden
                placeholder="Tell your story here"
                className="form-control"
              />
            </div>

            <div className={styles.margin}>
              {/* <label></label> */}
              <input
                type="text"
                name="prod" 
                id="prodid"
                value="naija_fund"
                required
                hidden
                placeholder="Tell your story here"
                className="form-control"
              />
            </div>
            <button class="btn btn-success widthBtn" type="submit">
              Donate
            </button>
          </form>
          <div class="col-lg-12   marginTop">
            <h5>{name}</h5>
            <div class="card">
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// get the url and fetch the user details
export async function getServerSideProps(context) {
  //

  const fundName = context.query;
  console.log(fundName.email);
  const res = await fetch(
    "https://api.getform.io/v1/forms/6673e6dc-f6ac-45b3-a9f9-faadc97c3770?token=9NC1oS1RfklXbC4ccY3NcEO7ob7LpGpCu3IaY2f4cAnMOn4eqmQWOTbKhalx"
  ); // Get the user details from the form
  const response = await res.json();

  var myFund = response.data.submissions.filter(
    (x) => x.email === fundName.email
  )[0];

  console.log({ ...myFund });
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: myFund,
  };
}
