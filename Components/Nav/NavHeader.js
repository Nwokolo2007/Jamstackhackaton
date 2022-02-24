import { useUser } from "@auth0/nextjs-auth0";
import SignInUser from "./SignInUser";
import SignOutUser from "./SignOutUser";
import "bootstrap/dist/css/bootstrap.css";
export default function NavHeader(pageProps) {
  const { user, error, isLoading } = useUser();
  return (
    <nav
      class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-primary"
      style={{ backgroundColor: "#65784F!important;" }}
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <i class="fa fa-home"></i>

             
            </a>
          </li>
          <li class="nav-item">
            <a
              className="createFunds btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3"
              href="https://github.com/twbs/bootstrap/archive/v4.0.0.zip"
            >
              Naijafundme
            </a>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <span class="badge badge-warning">
              {" "}
              {user ? <SignOutUser user={user} /> : <SignInUser />}
            </span>
          </li>
          <li class="nav-item">
            <a
              className="createFund btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3"
              href="/contact"
            >
              Start a funding
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
