"use client";

import { useEffect, useState } from "react";
import "./application-status.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { supabase } from "@/lib/supabase";

export default function ApplicationStatus() {
  const [applications, setApplications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const currentUser = localStorage.getItem("currentUser")?.trim().toLowerCase();

    const loadApplications = async () => {
      if (!currentUser) {
        setApplications([]);
        setIsLoading(false);
        return;
      }

      try {
        const saved = JSON.parse(localStorage.getItem("applications") || "[]");
        const localApps = saved.filter(
          (app: any) => String(app.email || "").trim().toLowerCase() === currentUser
        );

        if (localApps.length > 0) {
          setApplications(localApps);
        }

        const { data, error } = await supabase.from("applications").select("*");

        if (error) {
          console.error("Supabase load error:", error);
          setIsLoading(false);
          return;
        }

        const filteredApps = (data || []).filter((app: any) => {
          const appEmail = String(app.email || "").trim().toLowerCase();
          return appEmail === currentUser;
        });

        if (filteredApps.length > 0) {
          localStorage.setItem("applications", JSON.stringify(filteredApps));
          setApplications(filteredApps);
        } else if (localApps.length > 0) {
          setApplications(localApps);
        }
      } catch (err) {
        console.error("Application load failed:", err);
        const saved = JSON.parse(localStorage.getItem("applications") || "[]");
        const fallbackApps = saved.filter(
          (app: any) => String(app.email || "").trim().toLowerCase() === currentUser
        );
        setApplications(fallbackApps);
      } finally {
        setIsLoading(false);
      }
    };

    loadApplications();
  }, []);

  if (!mounted || isLoading) return null;

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  };

  return (
    <main className="status-page">
      <header className="status-hero">
        <div className="status-hero-inner">
          <h1>Application Status</h1>
          <p className="muted">Track the progress of your submitted applications</p>
        </div>
        <div className="status-hero-decor" aria-hidden />
      </header>

      <div className="status-container">
        <section className="status-list" aria-label="Applications list">
          <div className="status-toolbar">
            <div>
              <h2 className="small-title">Your Applications</h2>
              <p className="muted-sm">Summary of current application statuses</p>
            </div>

            <div>
              <button onClick={handleLogout} className="btn-logout" aria-label="Logout">
                Logout
              </button>
            </div>
          </div>

          {applications.length === 0 ? (
            <div className="empty-card">
              <p>No applications found for your account.</p>
            </div>
          ) : (
            <div className="cards-grid">
              {applications.map((app) => (
                <article key={app.id} className="app-card" aria-labelledby={`app-${app.id}-title`}>
                  <div className="app-card-left">
                    <h3 id={`app-${app.id}-title`} className="app-role">{app.role}</h3>
                    <p className="app-meta">
                      Applicant: <strong>{app.name}</strong>
                    </p>
                    <p className="app-meta">
                      Submitted: <span className="muted-sm">{app.submittedAt || "—"}</span>
                    </p>
                  </div>

                  <div className="app-card-right">
                    <a href={`/applications/${app.id}`} className="view-link">
                      View
                    </a>

                    <span
                      className={`status-badge ${
                        app.status === "Approved"
                          ? "approved"
                          : app.status === "Pending"
                          ? "pending"
                          : "rejected"
                      }`}
                      aria-label={`Status: ${app.status}`}
                    >
                      {app.status}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <aside className="status-aside" aria-label="Illustration">
          <div className="aside-inner">
            <h3 className="small-title"></h3>
            <p className="muted-sm"></p>

            <div className="aside-image-wrap" role="img" aria-label="Application illustration placeholder">
              <img src="/images/status.jpg" alt="Application approved illustration" className="aside-image" />
            </div>

            <div className="contact-row"></div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=workdaysupport.novatech@gmail.com&su=Careers%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon email"
              title="Email Support"
            >
              <MdEmail />
            </a>

            <a
              href="https://wa.me/2347059457760"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
