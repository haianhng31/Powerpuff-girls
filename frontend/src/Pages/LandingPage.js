import React, { useEffect, useState } from "react";
import howitstartedimage from "../Images/howitstarted.png";
import aboutUsImage from "../Images/aboutusscreenshot.png";
import ArticleForm from "../Components/Article/ArticleForm";
import MembershipPrompt from "../Components/MembershipPrompt";
import { supabase } from "../lib/supabaseClient";

function LandingPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [user, setUser] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL;

  useEffect(() => {
    let aborted = false;
    (async () => {
      try {
        const res = await fetch("http://localhost:8000/api/articles?sort=recent&limit=3");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!aborted) setItems((Array.isArray(data) ? data : []).slice(0, 3));
      } catch (e) {
        if (!aborted) setErr(e.message);
      } finally {
        if (!aborted) setLoading(false);
      }
    })();
    return () => {
      aborted = true;
    };
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user ?? null);
    })();

    const { data: sub } = supabase.auth.onAuthStateChange((_evt, session) => {
      setUser(session?.user ?? null);
      if (session?.user) setShowPrompt(false);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <div className="bg-[#FFF5F8] min-h-screen text-gray-800">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-pink-600 mb-4">About Us</h1>
            <p className="text-lg mb-8">
              Powerpuff is a website by women for women. You can find articles, travel guides, health advice, and more,
              all in one place!
            </p>
          </div>
          {user ? (
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                setUser(null);
              }}
              className="mt-1 rounded-xl bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 whitespace-nowrap"
            >
              Log out
            </button>
          ) : (
            <button
              onClick={() => setShowPrompt(true)}
              className="mt-1 rounded-xl bg-pink-600 px-4 py-2 text-white hover:bg-pink-700 whitespace-nowrap"
            >
              Log in / Sign up
            </button>
          )}
          {user?.email === ADMIN_EMAIL && (
            <a
              href="/Admin"
              className="mt-1 ml-2 rounded-xl bg-green-600 px-4 py-2 text-white hover:bg-green-700 whitespace-nowrap"
            >
              Admin Dashboard
            </a>
          )}
        </div>
        <img src={aboutUsImage} alt="About Us" className="rounded-lg shadow-lg w-full object-cover" />
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-pink-600 mb-4">How It Started</h2>
        <p className="text-lg mb-8">
          We wanted to create a space where girls and women could feel truly seen, supported, and safe. Our site brings
          together inspiring blogs, an interactive map, health tips, and travel safety advice — all designed to help
          women navigate the world with confidence.
        </p>
        <img src={howitstartedimage} alt="How It Started" className="rounded-lg shadow-lg w-full object-cover" />
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold text-pink-600 mb-6">Featured Articles</h2>
        {loading && <div>Loading featured…</div>}
        {!loading && err && <div className="text-red-600">Couldn’t load featured: {err}</div>}
        {!loading && !err && items.length === 0 && (
          <div className="rounded-xl border p-4 text-sm">No articles yet.</div>
        )}
        {!loading && !err && items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((a) => (
              <div
                key={a._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {a.imageUrl ? (
                  <img src={a.imageUrl} alt={a.title} className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-gray-200" />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {a.description?.slice(0, 140)}
                    {a.description?.length > 140 ? "…" : ""}
                  </p>
                  {a.link && (
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-3 text-pink-600 hover:underline text-sm"
                    >
                      Read more →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold text-pink-600 mb-4">
          Have a recommendation? Put it here for others to discover it!
        </h2>
        {user ? (
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <ArticleForm />
          </div>
        ) : (
          <div className="rounded-xl border border-pink-200 bg-white p-6">
            <p className="text-gray-700">You need to be a member to submit a recommendation.</p>
            <div className="mt-4">
              <button
                onClick={() => setShowPrompt(true)}
                className="rounded-xl px-4 py-2 font-medium text-white bg-pink-600 hover:bg-pink-700"
              >
                Sign up / Log in
              </button>
            </div>
          </div>
        )}
      </section>

      <MembershipPrompt open={showPrompt} onClose={() => setShowPrompt(false)} />
    </div>
  );
}

export default LandingPage;
