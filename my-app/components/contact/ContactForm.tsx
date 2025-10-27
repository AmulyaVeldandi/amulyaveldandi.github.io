"use client";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type Status = {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
};

export default function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({
        type: "success",
        message: "Thanks for reaching out! I will get back to you soon.",
      });
      setState({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col gap-4 rounded-3xl border card-border bg-[color:var(--surface-chip-strong)] p-6 sm:p-8"
      data-reveal
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col text-left text-xs uppercase tracking-[0.3em] text-slate-300/80">
          Name
          <input
            name="name"
            value={state.name}
            onChange={handleChange}
            className="mt-2 rounded-full border border-accent bg-[color:var(--surface-chip)] px-4 py-3 text-sm text-[color:var(--foreground)] focus:border-accent focus:outline-none"
            placeholder="Your name"
            required
          />
        </label>
        <label className="flex flex-col text-left text-xs uppercase tracking-[0.3em] text-slate-300/80">
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="mt-2 rounded-full border border-accent bg-[color:var(--surface-chip)] px-4 py-3 text-sm text-[color:var(--foreground)] focus:border-accent focus:outline-none"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <label className="flex flex-col text-left text-xs uppercase tracking-[0.3em] text-slate-300/80">
        Message
        <textarea
          name="message"
          value={state.message}
          onChange={handleChange}
          className="mt-2 rounded-3xl border border-accent bg-[color:var(--surface-chip)] px-4 py-3 text-sm text-[color:var(--foreground)] focus:border-accent focus:outline-none"
          rows={5}
          placeholder="How can I help?"
          required
        />
      </label>
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="self-start btn-primary px-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status.type === "loading" ? "Sending..." : "Submit"}
      </button>
      {status.message && (
        <p
          className={`text-xs uppercase tracking-[0.25em] ${
            status.type === "error"
              ? "text-red-500"
              : "text-accent-light opacity-80"
          }`}
          role={status.type === "error" ? "alert" : "status"}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
