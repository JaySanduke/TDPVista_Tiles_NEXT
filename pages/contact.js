import React from "react";
// reactstrap components

import DocumentMeta from "react-document-meta";
import "assets/css/contact.css";
import "aos/dist/aos.css";
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
import AOS from "aos";

class Home extends React.Component {
  constructor() {
    super();
    AOS.init({});
  }
  onentDidMount() {
    //document.body.classList.add("bg-default");
  }
  componentWillUnmount() {
    //document.body.classList.remove("bg-default");
  }

  render() {
    const meta = {
      title: "TDPVista TILES",
      description: "TDPVista",
      canonical: "https://tiles.tdpvista.in",
      meta: {
        charset: "utf-8",
        name: {
          keywords:
            "tdpvista,support,contact,form,registration,learning,education,call,helpline,helpdesk,query",
        },
      },
    };
    return (
      <>
        <DocumentMeta {...meta} />
        <div className="contact-landing">
          <AuthNavbar />
          <div className="c-body-div">
            <div className="c-body">
              <section className="contact_wrapper">
                <div className="contact_info">
                  <h3 className="title">Contact Us</h3>

                  <ul className="icons_wrapp">
                    <li>
                      <div className="icon">
                        <span className="material-icons-outlined"> web </span>
                      </div>
                      <div className="text">https://tiles.tdpvista.in</div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="material-icons-outlined">
                          {" "}
                          mail_outline{" "}
                        </span>
                      </div>
                      <div className="text">mail@tdpvista.in</div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="material-icons-outlined">
                          {" "}
                          phone_in_talk{" "}
                        </span>
                      </div>
                      <div className="text">+91 70890 11423</div>
                    </li>
                  </ul>
                </div>

                <div className="contact_msg">
                  <h3 className="title">Drop a Message</h3>

                  <div className="form_fild">
                    <div className="input_group w_50">
                      <input type="text" className="input" required />
                      <label className="placeholder">First Name</label>
                    </div>

                    <div className="input_group w_50">
                      <input type="text" className="input" required />
                      <label className="placeholder">Last Name</label>
                    </div>

                    <div className="input_group w_50">
                      <input type="text" className="input" required />
                      <label className="placeholder">Emal Address</label>
                    </div>

                    <div className="input_group w_50">
                      <input type="tel" className="input" required />
                      <label className="placeholder">Mobile Number</label>
                    </div>

                    <div className="input_group w_100">
                      <textarea
                        className="input input_textarea "
                        rows="6"
                        required
                      ></textarea>
                      <label className="placeholder textarea">
                        Write your message here...
                      </label>
                    </div>

                    <div className="input_group">
                      <input type="submit" className="btn" value="Send" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <AuthFooter />
      </>
    );
  }
}

export default Home;
