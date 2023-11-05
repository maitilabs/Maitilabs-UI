import React from "react";
import vrisha from "../assets/images/vrishabavathi.jpg";
import ganga from "../assets/images/ganga.jpg";
import tungabhadra from "../assets/images/tungabhadra.jpg";
import yamuna from "../assets/images/yamuna.jpg";
import { Button } from "reactstrap";
export default function Awareness() {
  return (
    <div>
      <div className="container-fluid bg-image">
        <div className="row">
          <div className="col-12 centered-text">
            <h1 className="heading1">Awareness Portal</h1>
            <h3 className="heading2">The planet speaks, we listen.</h3>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4">
      <div>
      <Button color="success" size="lg" outline href="/addBlog" style={{marginLeft:150}}>
       add Blog
      </Button>
      </div>
      &nbsp;
      &nbsp;
        <div className="row">
          <div className="col-md-6">
            <div className="card custom-card1">
              <img src={vrisha} className="card-img-top" alt="noimg1" />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="/"
                    style={{
                        fontWeight: 700,
                        color: '#1a3520',
                        fontSize: '25px',
                        lineHeight: '35px',
                        fontFamily: 'Lora',
                        textAlign: 'center',
                      }}
                  >
                    Vrishabawathi River: A Lifeline Lost and the Crusade for its
                    Revival
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card custom-card2">
              <img src={ganga} className="card-img-top" alt="noimg2" />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="/"
                    style={{
                        fontWeight: 700,
                        color: '#1a3520',
                        fontSize: '25px',
                        lineHeight: '35px',
                        fontFamily: 'Lora',
                        textAlign: 'center',
                      }}
                  >
                    Ganga Pollution Case: A Case Study
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card custom-card1">
              <img src={yamuna} className="card-img-top" alt="noimg2" />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="/"
                    style={{
                        fontWeight: 700,
                        color: '#1a3520',
                        fontSize: '25px',
                        lineHeight: '35px',
                        fontFamily: 'Lora',
                        textAlign: 'center',
                      }}
                  >
                    Chasing a Dying River: The Yamuna in Delhi
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card custom-card2">
              <img src={tungabhadra} className="card-img-top" alt="noimg2" />
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="/"
                    style={{
                      fontWeight: 700,
                      color: "#1a3520",
                      fontSize: "25px",
                      lineHeight: "35px",
                      fontFamily: "Lora",
                      textAlign: "center",
                    }}
                  >
                    The poisoning of the Tungabhadra
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
