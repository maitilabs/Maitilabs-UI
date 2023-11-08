import React from "react";
import contentIntern from "../assets/images/content-intern.jpg";
import productIntern from "../assets/images/productintern.jpg";
import SoftwareIntern from "../assets/images/softwareintern.jpg";
import marketIntern from "../assets/images/marketingintern.jpg";
import videoEditor from "../assets/images/videoediting.jpg";
import campusIntern from "../assets/images/campusamba.jpg";
import founderIntern from "../assets/images/founder_intern.jpg";

export default function Career() {
  return (
    <div>
      <div className="container-fluid bg-image">
        <div className="row">
          <div className="col-12 centered-text">
            <h1
              style={{
                lineHeight: "85px",
                fontSize: "85px",
                marginTop: "200px",
              }}
            >
              Careers
            </h1>
          </div>
        </div>
      </div>

      <div className="content">
        <p>
          Join Maiti Labs, a global youth-led Non-Profit Organization, to combat
          the climate crisis through innovative technology and community-driven
          action. Help build a cutting-edge climate information site, breaking
          language barriers with AI and supporting UN Goals. Join a diverse and
          passionate community, making a lasting impact on our planet. Together,
          let's raise awareness and accelerate climate action worldwide.
        </p>
      </div>

      <section>
        <div className="card-container">
          <div className="card">
            <img src={contentIntern} alt="noimg1" />
            <div className="card-content">
              <a href="https://docs.google.com/document/d/1ip34WXfaoFreozv99Uaid180624qzKSLizw3KQei8z8/edit?usp=sharing">
                <span
                  className="card-link"
                  style={{ fontVariant: "normal", textDecoration: "underline" }}
                >
                  Content Intern
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={founderIntern} alt="noimg2" />
            <div className="card-content">
              <a href="https://forms.gle/p3Za7M3kozQDg5ZX7">
                <span
                  className="card-link"
                  style={{ fontVariant: "normal", textDecoration: "underline" }}
                >
                  (Founder's Office) Generalist Intern
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={productIntern} alt="noimg3" />
            <div className="card-content">
              <a href="https://docs.google.com/document/d/1ck7VFIDPzWe4oIEpi1CpM6l-OAO1bigwS_X-s_bsw1A/edit?usp=sharing">
                <span
                  className="card-link"
                  style={{ fontVariant: "normal", textDecoration: "underline" }}
                >
                  Product Intern
                </span>
              </a>
            </div>
          </div>

          <div className="card">
            <img src={marketIntern} alt="noimg3" />
            <div className="card-content">
              <a href="https://docs.google.com/document/d/1Qs4nJXhNa51YOj1YPIfhMZXZM7818eCqxYdoG801t4c/edit?usp=sharing">
                <span
                  className="card-link"
                  style={{ fontVariant: "normal", textDecoration: "underline" }}
                >
                  Marketing Intern
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={videoEditor} alt="noimg3" />
            <div className="card-content">
              <a href="https://forms.gle/EKMBhPiVWfUbuBS89">
                <span
                  className="card-link"
                  style={{ fontVariant: "normal", textDecoration: "underline" }}
                >
                  Video Editor Intern
                </span>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={campusIntern} alt="noimg3" />
            <div className="card-content">
              <a href="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=600">
                <span
                  className="card-link"
                  style={{ fontVariant: "normal", textDecoration: "underline" }}
                >
                  Campus Ambassador
                </span>
              </a>
            </div>
          </div>
          <div className="card-container centered-row">
            <div className="card">
              <img src={SoftwareIntern} alt="noimg4" />
              <div className="card-content">
                <a href="https://docs.google.com/document/d/1sljlua87ssKnJx_s8u_C1N0Z-mludt9BpDG-MtBMBao/edit?usp=sharing">
                  <span
                    className="card-link"
                    style={{
                      fontVariant: "normal",
                      textDecoration: "underline",
                    }}
                  >
                    Software Intern
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          Join the community for more job updates
        </p>

       
          <div
            className="text-center"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            <a
              href="https://www.google.com/url?q=https%3A%2F%2Fchat.whatsapp.com%2FHToo6tS5XFO0bxbcOQTdy7&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2jP6yJms6M04eeE0NaLo1P"
              className="btn btn-primary wide-button"
            >
              Community link
            </a>
          </div>
        

        <br />
      </section>
    </div>
  );
}
