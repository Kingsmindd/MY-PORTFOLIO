import { useEffect, useRef, useState, type SubmitEvent } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/Profile";
const ContactInfo = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const sending = useRef(false);

  useEffect(() => {
    if (status !== "success" && status !== "error") return;

    const dismissTimer = window.setTimeout(() => {
      setStatus("idle");
      setFeedback("");
    }, 15000);

    return () => window.clearTimeout(dismissTimer);
  }, [status, feedback]);

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const name = String(fields.get("name") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const message = String(fields.get("message") ?? "").trim();
    if (!form.reportValidity()) return;
    if (!name || message.length < 10) {
      setStatus("error");
      setFeedback("Please enter your name and a message of at least 10 characters.");
      return;
    }

    sending.current = true;
    setStatus("sending");
    setFeedback("Sending your message…");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name, email, message,
          _subject: "New message from KingsMind portfolio",
          _template: "table",
        }),
      });
      const result: unknown = await response.json();
      if (!response.ok || !result || typeof result !== "object" ||
          !("success" in result) || (result.success !== true && result.success !== "true")) {
        throw new Error("Submission was not accepted");
      }
      setStatus("success");
      setFeedback("Thank you! Your message has been submitted successfully.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback(controller.signal.aborted
        ? "Sending took too long. We couldn’t confirm receipt. Your message is still here; please try again or email me directly."
        : "We couldn’t confirm your message was sent. Your message is still here; check your connection and try again, or email me directly.");
    } finally {
      window.clearTimeout(timeout);
      sending.current = false;
    }
  };

  return (
  <section
    className="section container contact-layout"
    id="contact"
    aria-labelledby="contact-title"
  >
    <div>
      <span className="eyebrow">05 / Get in touch</span>
      <h2 id="contact-title">Let’s work together.</h2>
      <p>
        {profile.availability} Have something in mind? Send me a message about
        your project or team.
      </p>
      <p>Lagos, Nigeria</p>
      <a
        className="contact-email contact-direct"
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {profile.email} <span aria-hidden="true">↗</span>
      </a>
      <div className="contact-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </a>
        )}
      </div>
      {profile.resumeUrl && (
        <div className="actions">
          <a className="button" href={profile.resumeUrl} download>
            Download résumé
          </a>
        </div>
      )}
    </div>
    <form
      className="contact-form"
      action={`https://formsubmit.co/${profile.email}`}
      method="POST"
      onSubmit={handleSubmit}
      aria-labelledby="message-title"
      aria-describedby="message-note"
    >
      <h3 id="message-title">Send me a message</h3>
      <fieldset className="contact-fields" disabled={status === "sending"}>
      <legend className="contact-sr-only">Message details</legend>
      <input type="hidden" name="_subject" value="New message from KingsMind portfolio" />
      <input type="hidden" name="_template" value="table" />
      <div className="contact-field">
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} pattern=".*\S.*" />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-email">Email address</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="alex@example.com" required maxLength={254} />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">Your message</label>
        <textarea id="contact-message" name="message" placeholder="Tell me about your project or opportunity…" rows={6} required minLength={10} maxLength={5000} />
      </div>
      <p id="message-note" className="contact-note">Your details are sent through FormSubmit to my inbox.</p>
      <button className="button button-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"} <span aria-hidden="true">↗</span>
      </button>
      </fieldset>
      <div className={`contact-status contact-status-${status}`} role="status" aria-live="polite" aria-atomic="true">
        {feedback}
        {status === "error" && <> <a className="text-link" href={`mailto:${profile.email}`}>Email me directly</a></>}
      </div>
    </form>
  </section>
);
};
export default ContactInfo;
