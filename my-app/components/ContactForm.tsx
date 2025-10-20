"use client";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Thanks for reaching out! I will get back to you soon.");
    setState({ name: "", email: "", message: "" });
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
            className="mt-2 rounded-full border border-accent bg-[color:var(--surface-chip)] px-4 py-2 text-sm text-[color:var(--foreground)] focus:border-accent focus:outline-none"
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
            className="mt-2 rounded-full border border-accent bg-[color:var(--surface-chip)] px-4 py-2 text-sm text-[color:var(--foreground)] focus:border-accent focus:outline-none"
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
        className="self-start btn-primary px-6"
      >
        Submit
      </button>
      {status ? (
        <p className="text-xs uppercase tracking-[0.25em] text-accent-light opacity-80">{status}</p>
      ) : null}
    </form>
  );
}
