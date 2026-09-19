"use client"

import { FormEvent, useState } from "react"

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage("")
    window.setTimeout(() => {
      setIsSubmitting(false)
      setMessage("Demo mode: connect this form to your admin authentication endpoint.")
    }, 700)
  }

  return (
    <main className="login-shell">
      <div className="ambient-glow ambient-glow-one" />
      <div className="ambient-glow ambient-glow-two" />

      <section className="login-panel" aria-labelledby="login-title">
        <div className="brand-mark" aria-label="Valore home">
          <span className="brand-symbol">V</span>
          <span className="brand-name">valore</span>
        </div>

        <div className="eyebrow"><span className="status-dot" /> Admin workspace</div>
        <h1 id="login-title">Welcome back.</h1>
        <p className="intro">Sign in to manage your workspace, insights, and team.</p>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />

          <div className="password-label-row">
            <label htmlFor="password">Password</label>
            <a href="#forgot-password">Forgot password?</a>
          </div>
          <div className="password-wrap">
            <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" autoComplete="current-password" required />
            <button type="button" className="show-password" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <label className="remember-row">
            <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} />
            <span>Keep me signed in</span>
          </label>

          <button className="submit-button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign in to admin"}
            {!isSubmitting && <span aria-hidden="true">↗</span>}
          </button>
          {message && <p className="form-message" role="status">{message}</p>}
        </form>

        <div className="security-note"><span aria-hidden="true">✦</span> Secure access for authorized team members</div>
        <p className="copyright">© 2026 Valore, Inc. <a href="#privacy">Privacy</a><span>·</span><a href="#support">Need help?</a></p>
      </section>

      <aside className="login-aside" aria-label="Valore overview">
        <div className="aside-content">
          <div className="quote-mark">“</div>
          <blockquote>Clarity is not a feature.<br />It is the foundation.</blockquote>
          <div className="quote-rule" />
          <p>One calm place for the decisions<br />that move your business forward.</p>
        </div>
        <div className="aside-footer"><span>VALORE / 01</span><span>BUILT FOR MOMENTUM</span></div>
      </aside>
    </main>
  )
}
