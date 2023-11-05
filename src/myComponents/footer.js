import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className=" text-center">Follow us on social media</h5>
              <ul className="list-unstyled d-flex justify-content-center gap-4">
                <li>
                  <a href="mailto:you@example.com" className="text-dark ">
                    <i className="fas fa-envelope"></i>Mail
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/maitilabs" className="text-dark ">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/maitilabs?igshid=NjIwNzIyMDk2Mg=="
                    className="text-dark mr-2"
                  >
                    <i className="fab fa-instagram"></i>Instagram
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.linkedin.com/company/maitilabs"
                    className="text-dark"
                  >
                    <i className="fab fa-linkedin"></i>Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center ">
              <hr></hr>
              <p>&copy; 2023 Maiti Labs. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
