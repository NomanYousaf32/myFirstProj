/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../Api/Api";
import NavigationLayout from "../Layout/NavgationLayout";

const ContactUs = () => {
  const [emailUser, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [btnDisabled, setDisabled] = useState(false);
  const [wrongStatement, setWorngStatment] = useState(false);
  const [message, setmessage] = useState("");
  const navigate = useNavigate();

  // console.log(localStorage.getItem("userData"))

  useEffect(()=>{
    if(localStorage.getItem(`token`)){
      

      const fetchposts = async () => {
        try {
          // setIsLoading(true)
          const response = await Api.get(`/users/7`);
          // setChecked(false)
          console.log(response.data)
          localStorage.setItem("userData",JSON.stringify({"user":response.data}));
          navigate("/products/2");
          // setIsLoading(false);
        } catch (err) {
          if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else {
            // eslint-disable-next-line no-template-curly-in-string
            console.log(`Error: ${err.message}`);
          }
        }
      };
      fetchposts();
    }

  }, [btnDisabled, navigate]);
  

  const submitHandler = (e) => {
    console.log("clicked now the Button is disabled");
    setDisabled(true);
    e.preventDefault();
    const fetchposts = async () => {
      try {
        await Api.post("/auth/login", {
          username: emailUser,
          password: userPassword,
        }).then((response) => {
          localStorage.setItem("token", response.data.token);
          
          console.log("clicked now the Button is enable");
        });
      } catch (err) {
        if (err.response) {
          setmessage(err.response.data.msg);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          // eslint-disable-next-line no-template-curly-in-string

          console.log(`Error: ${err.message}`);
        }
        setWorngStatment(true);
      }

      setDisabled(false);
    };
    fetchposts()
  
  };

  return (
    <>
    <NavigationLayout />
    <div className="contact-page">

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h1>Login User</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div id="map">

              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907"
                width="100%"
                height="500px"
                frameborder="0"
                style="border:0"
                allowfullscreen
              /> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-content">
              <div className="container">
                <form
                  id="contact"
                  action=""
                  method="post"
                  onSubmit={submitHandler}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="name"
                          value={emailUser}
                          disabled={btnDisabled}
                          placeholder="Enter Your Email"
                          autoComplete="on"
                          required=""
                          onChange={(e) => {
                            setUserEmail(e.target.value);
                            setWorngStatment(false);
                          }}
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="email"
                          type="password"
                          className="form-control"
                          autoComplete="on"
                          disabled={btnDisabled}
                          value={userPassword}
                          id="email"
                          placeholder="Your Password"
                          required=""
                          onChange={(e) => {
                            setUserPassword(e.target.value);
                            setWorngStatment(false);
                          }}
                        />
                      </fieldset>
                    </div>

                    <div className="col-md-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="button"
                          disabled={btnDisabled}
                        >
                          Login
                        </button>
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <div className="share">
                        <h6>
                          {wrongStatement === true ? <p>{message}</p> : null}
                          <span>
                            <a href="">
                              <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default ContactUs;
