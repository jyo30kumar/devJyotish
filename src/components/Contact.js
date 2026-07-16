import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Contact = () => {
  const [data, setData] = useState({});
  useEffect(async () => {
    setData(await fatchData("/static/info.json"));
  }, []);

  const [formObj, setFormObj] = useState({
    subject: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    // if (!isValidEmail(event.target.value)) {
    //     toast.error("Not a ValidEmail")
    // }

    setFormObj({ ...formObj, email: event.target.value });
  };

  const sendContactMail = async (e) => {
    e.preventDefault();
    if (!isValidEmail(formObj.email)) {
      toast.error("Please enter a valid email address");
    } else {
      const response = await axios({
        method: "post",
        url: "https://formspree.io/f/mzboynnq",
        data: {
          ...formObj,
        },
      });

      if (response.status === 200) {
        setFormObj({
          subject: "",
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        toast.success(
          "Your mail is sent. We will contact you as soon as possible.",
        );
        console.log(
          "Your mail is sent. We will contact you as soon as possible.",
        );
      } else {
        toast.error("Oops. Something went wrong");
        console.log("Oops. Something went wrong");
      }
    }
  };

  return (
    <div className="dizme_tm_section" id="contact">
      <ToastContainer theme="colored" />
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h3>We Want To Hear From You</h3>
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {data && data.contact && (
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon orangeBackground">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="short">
                        <h3>Address</h3>
                        <span>{data.contact.address}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="#">{data.contact.email}</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>{data.contact.phn}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form autoComplete="off">
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          value={formObj.name}
                          onChange={(e) =>
                            setFormObj({ ...formObj, name: e.target.value })
                          }
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                          value={formObj.email}
                          onChange={handleChange}
                        />
                      </li>
                      <li>
                        <input
                          id="phone"
                          type="number"
                          placeholder="Your Phone"
                          value={formObj.phone}
                          onChange={(e) =>
                            setFormObj({ ...formObj, phone: e.target.value })
                          }
                        />
                      </li>
                      <li>
                        <input
                          id="subject"
                          type="text"
                          placeholder="Subject"
                          value={formObj.subject}
                          onChange={(e) =>
                            setFormObj({ ...formObj, subject: e.target.value })
                          }
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Write your message here"
                      value={formObj.message}
                      onChange={(e) =>
                        setFormObj({ ...formObj, message: e.target.value })
                      }
                    />
                  </div>
                  <div className="dizme_tm_button" onClick={sendContactMail}>
                    <a id="send_message" href="#">
                      <span>Submit Now</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
              <img src="img/brushes/contact/2.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/contact/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
