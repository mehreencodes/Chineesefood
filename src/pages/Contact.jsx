import { useEffect, useRef, useState } from "react";
import {
  FiCheck,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

// edit your details in ONE place (delete a line to hide it)
const contact = {
  location: "Lahore, Pakistan",
  phone: "+92 356 4567329",
  email: "dragonbite@gmail.com",
  hours: "Mon - Sun: 10:00 AM - 11:00 PM",
};

// To send real emails, create a form on formspree.io and paste its URL here,
// for example "https://formspree.io/f/xxxxxxxx".
// Left empty, the form opens the visitor's email app instead.
const FORM_ENDPOINT = "";

const topics = ["Feedback", "Suggestion", "Collaboration", "Other"];
const MAX = 600;
const initial = { name: "", email: "", topic: "Feedback", message: "" };

const info = [
  { icon: FiMapPin, label: "Location", value: contact.location },
  {
    icon: FiPhone,
    label: "Phone",
    value: contact.phone,
    href: `tel:${(contact.phone || "").replace(/\s/g, "")}`,
  },
  {
    icon: FiMail,
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  { icon: FiClock, label: "Opening Hours", value: contact.hours },
].filter((i) => i.value);

const validate = (v) => {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim()))
    e.email = "Please enter a valid email address.";
  if (v.message.trim().length < 10)
    e.message = "Please write at least 10 characters.";
  return e;
};

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | opened | error
  const fields = useRef({});

  useEffect(() => {
    const previous = document.title;
    document.title = "Contact | DragonBite";
    return () => {
      document.title = previous;
    };
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      fields.current[firstInvalid]?.focus();
      return;
    }

    // no service connected: open the visitor's email app
    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(
        `${values.topic} from ${values.name.trim()}`
      );
      const body = encodeURIComponent(
        `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus("opened");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          topic: values.topic,
          message: values.message.trim(),
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setStatus("idle");
  };

  const done = status === "sent" || status === "opened";

  return (
    <div className="ctPage">
      <div className="ctWrap">

        {/* HEADING */}
        <header className="ctHead">
          <span className="ctLabel">Contact</span>
          <h1 className="ctTitle">
            Get in <span>Touch</span>
          </h1>
          <p className="ctSub">
            We’d love to hear your feedback, suggestions, or collaboration ideas.
          </p>
          <div className="ctOrnament" aria-hidden="true">
            <i></i>
          </div>
        </header>

        <div className="ctLayout">

          {/* FORM */}
          <div className="ctFormCard">
            {done ? (
              <div className="ctDone" role="status">
                <span className="ctDoneIcon" aria-hidden="true">
                  <FiCheck />
                </span>
                <h2>{status === "sent" ? "Message sent" : "Almost there"}</h2>
                <p>
                  {status === "sent"
                    ? "Thanks for reaching out. We’ll get back to you soon."
                    : `Your email app should have opened with your message ready to send. If nothing happened, email us at ${contact.email}.`}
                </p>
                <button type="button" className="ctBtnGhost" onClick={reset}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h2>Send a Message</h2>

                <fieldset className="ctTopics">
                  <legend>What is this about?</legend>
                  <div className="ctChips">
                    {topics.map((t) => (
                      <label
                        key={t}
                        className={`ctChip ${values.topic === t ? "active" : ""}`}
                      >
                        <input
                          type="radio"
                          name="topic"
                          value={t}
                          checked={values.topic === t}
                          onChange={onChange}
                        />
                        {t}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="ctField">
                  <label htmlFor="ct-name">Your name</label>
                  <input
                    id="ct-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={values.name}
                    onChange={onChange}
                    ref={(el) => (fields.current.name = el)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "ct-name-err" : undefined}
                  />
                  {errors.name && (
                    <p id="ct-name-err" className="ctError">{errors.name}</p>
                  )}
                </div>

                <div className="ctField">
                  <label htmlFor="ct-email">Your email</label>
                  <input
                    id="ct-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={onChange}
                    ref={(el) => (fields.current.email = el)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "ct-email-err" : undefined}
                  />
                  {errors.email && (
                    <p id="ct-email-err" className="ctError">{errors.email}</p>
                  )}
                </div>

                <div className="ctField">
                  <label htmlFor="ct-message">Your message</label>
                  <textarea
                    id="ct-message"
                    name="message"
                    rows="5"
                    maxLength={MAX}
                    placeholder="Tell us what’s on your mind..."
                    value={values.message}
                    onChange={onChange}
                    ref={(el) => (fields.current.message = el)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "ct-message-err" : undefined}
                  ></textarea>
                  <span className="ctCount">{values.message.length}/{MAX}</span>
                  {errors.message && (
                    <p id="ct-message-err" className="ctError">{errors.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="ctAlert" role="alert">
                    Something went wrong, and your message was not sent. Please
                    try again, or email us at {contact.email}.
                  </p>
                )}

                <button
                  type="submit"
                  className="ctSubmit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <FiSend aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* DETAILS */}
          <aside className="ctInfo">
            <h2>Contact Details</h2>

            <ul>
              {info.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <span className="ctInfoIcon" aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <h3>{label}</h3>
                    {href ? <a href={href}>{value}</a> : <p>{value}</p>}
                  </div>
                </li>
              ))}
            </ul>

            <p className="ctNote">We usually reply within 24 hours.</p>
          </aside>

        </div>

        {/* MAP */}
        <section className="ctMapSection">
          <div className="ctHead compact">
            {/* <span className="ctLabel">Find Us</span> */}
            <h2 className="ctMapTitle">Our Location</h2>
            <div className="ctOrnament" aria-hidden="true">
              <i></i>
            </div>
          </div>

          <div className="ctMap">
            <iframe
              title={`Map showing ${contact.location}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(contact.location)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

      </div>
    </div>
  );
}