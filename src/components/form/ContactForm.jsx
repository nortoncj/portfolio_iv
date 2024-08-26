"use client";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setname] = useState("");
  const [phone, setPhone] = useState("");
  const [reply_to, setreply_to] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(reply_to)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dtvncdq", "template_nm6gkqs", form.current, {
        publicKey: "user_w6rlx1Bt4stlf7oqlcKGQ",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Name is required!");
    } else if (phone === "") {
      toast.error("Phone Number is required!");
    } else if (reply_to === "") {
      toast.error("Please give your Email");
    } else if (!emailValidation(reply_to)) {
      toast.error("Give a valid Email!");
    } else if (subject === "") {
      toast.error("Please give your Subject");
    } else if (message === "") {
      toast.error("Message is required!");
    } else {
      emailjs
        .sendForm(
          "service_dtvncdq",
          "template_nm6gkqs",
          form.current,
          "user_w6rlx1Bt4stlf7oqlcKGQ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      toast.success("Thanks for your message!");
      setErrMsg("");
      setname("");
      setPhone("");
      setreply_to("");
      setSubject("");
    }
  };

  return (
    <>
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                onChange={(e) => setname(e.target.value)}
                value={name}
                placeholder="Name"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                placeholder="Subject"
                type="text"
                autoComplete="off"
              />
              <span className="alert-error"></span>
            </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="reply_to"
                onChange={(e) => setreply_to(e.target.value)}
                value={reply_to}
                placeholder="Email*"
                type="email"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="Phone"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea
                className="form-control"
                id="comments"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Tell Us About Project *"
                autoComplete="off"
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button
              type="submit"
              onClick={handleSend}
              value="Send"
              id="submit"
              className="btn btn-md circle btn-theme"
            >
              Send Message
            </button>
          </div>
        </div>
        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg"></div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
