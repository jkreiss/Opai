"use client";

import { FormEvent, useRef, useState } from "react";
import { Turnstile, type TurnstileRef } from "nextjs-turnstile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function Contact() {
  const turnstileRef = useRef<TurnstileRef>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");
    setSubmitMessage("");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    if (!TURNSTILE_SITE_KEY) {
      setSubmitError("Turnstile is not configured. Add NEXT_PUBLIC_TURNSTILE_SITE_KEY.");
      return;
    }

    if (!turnstileToken) {
      setSubmitError("Please complete the CAPTCHA.");
      return;
    }

    const botFieldValue = String(formData.get("bot-field") ?? "").trim();
    if (botFieldValue) {
      setSubmitMessage("Thanks, your message has been submitted.");
      return;
    }

    setIsSubmitting(true);

    try {
      const verifyResponse = await fetch("/api/turnstile/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: turnstileToken }),
      });

      if (!verifyResponse.ok) {
        setSubmitError("Verification failed. Please try again.");
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        return;
      }

      const encodedBody = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        if (typeof value === "string") {
          encodedBody.append(key, value);
        }
      }

      const submitResponse = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedBody.toString(),
      });

      if (!submitResponse.ok) {
        setSubmitError(`Unable to submit your message right now (/ returned ${submitResponse.status}).`);
        return;
      }

      setSubmitMessage("Thanks, your message has been submitted.");
      formElement.reset();
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } catch {
      setSubmitError("Unable to submit your message right now (network error).");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-sm shadow-xl overflow-hidden flex flex-col md:flex-row">

          {/* Left Side: Info */}
          <div className="w-full md:w-2/5 bg-secondary p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-foreground/80 text-lg mb-8">
                Ready to transform your timber floors? Get in touch today for a free quote.
                We&apos;ll assess your needs and provide expert advice on the best finish for your home.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Or speak to us directly</p>
              <div className="flex flex-col gap-3">
                <a
                  className="w-full text-lg font-semibold py-4 px-6 bg-primary hover:brightness-110 hover:scale-101 text-primary-foreground rounded-sm flex items-center justify-center gap-3 transition-all"
                  href="tel:0210320182"
                >
                  <Phone size={20} />
                  0210 320 182
                </a>
                <a
                  className="w-full text-lg font-semibold py-4 px-6 bg-white hover:brightness-110 hover:scale-101 text-foreground border border-border rounded-sm flex items-center justify-center gap-3 transition-all"
                  href="mailto:opaiflooring@gmail.com"
                >
                  <Mail size={20} />
                  opaiflooring@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-3/5 p-10">
            <form
              name="contact"
              method="POST"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Name</label>
                  <Input id="name" name="name" required placeholder="John Doe" className="bg-secondary/50 border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</label>
                  <Input id="phone" name="phone" type="tel" required placeholder="021 123 4567" className="bg-secondary/50 border-border" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">Email</label>
                <Input id="email" name="email" type="email" required placeholder="john@example.com" className="bg-secondary/50 border-border" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Message / Job Details</label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder={"Tell us about your job… \nIs it a new or existing floor? \nHas it been treated or polished before? \nIs there carpet that needs removing? \nApproximate area or size?"}
                  className="min-h-[150px] bg-secondary/50 border-border resize-none"
                />
              </div>

              {TURNSTILE_SITE_KEY ? (
                <Turnstile
                  ref={turnstileRef}
                  siteKey={TURNSTILE_SITE_KEY}
                  action="contact_form"
                  onSuccess={(token) => {
                    setTurnstileToken(token);
                    setSubmitError("");
                  }}
                  onExpire={() => setTurnstileToken(null)}
                  onError={() => setTurnstileToken(null)}
                />
              ) : (
                <p className="text-sm font-medium text-destructive">
                  Missing NEXT_PUBLIC_TURNSTILE_SITE_KEY.
                </p>
              )}

              {submitError ? <p className="text-sm font-medium text-destructive">{submitError}</p> : null}
              {submitMessage ? <p className="text-sm font-medium text-primary">{submitMessage}</p> : null}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 text-lg font-semibold rounded-sm hover:brightness-110 hover:scale-101 transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
