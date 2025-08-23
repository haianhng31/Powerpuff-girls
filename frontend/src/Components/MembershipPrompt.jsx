import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function MembershipPrompt({ open, onClose }) {
  const [mode, setMode] = useState("sign_in"); // "sign_in" | "sign_up"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null); // "loading" | "ok" | "error"
  const [msg, setMsg] = useState("");

  if (!open) return null;

  const handleAuth = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    try {
      if (mode === "sign_up") {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setStatus("ok");
        setMsg("Check your email to confirm your account.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        setStatus("ok");
        setMsg("Logged in!");
        onClose(); // close modal on successful login
      }
    } catch (err) {
      setStatus("error");
      setMsg(err.message || "Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">
            {mode === "sign_up" ? "Create your account" : "Log in to continue"}
          </h3>
          <button onClick={onClose} className="rounded px-2 py-1 hover:bg-gray-100">✕</button>
        </div>

        <form onSubmit={handleAuth} className="space-y-3">
          <input
            type="email"
            className="w-full border p-2 rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full border p-2 rounded"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
          <button
            type="submit"
            className="w-full rounded-xl px-4 py-2 font-medium text-white bg-pink-600 hover:bg-pink-700"
            disabled={status === "loading"}
          >
            {mode === "sign_up" ? "Sign up" : "Log in"}
          </button>
        </form>

        {status === "loading" && <p className="mt-3 text-sm">Working…</p>}
        {msg && <p className="mt-3 text-sm">{msg}</p>}

        <div className="mt-4 text-sm text-gray-600">
          {mode === "sign_in" ? (
            <>Don’t have an account?{" "}
              <button className="text-pink-600 hover:underline" onClick={() => setMode("sign_up")}>
                Sign up
              </button>
            </>
          ) : (
            <>Already have an account?{" "}
              <button className="text-pink-600 hover:underline" onClick={() => setMode("sign_in")}>
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
