"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type ApplicationRecord = {
  id: string | number;
  name: string;
  role: string;
  status: string;
  email?: string;
  phone?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  address?: string;
  submittedAt?: string;
  company?: string;
  education?: string;
  years?: string;
  skills?: string;
  experienceText?: string;
  resumeName?: string;
  authorized?: string;
  relocate?: string;
};

export default function ApplicationDetailsPage() {
  const params = useParams();
  const [application, setApplication] = useState<ApplicationRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("applications") || "[]") as ApplicationRecord[];
      const found = saved.find((item) => String(item.id) === String(params?.id));
      setApplication(found || null);
    } catch {
      setApplication(null);
    } finally {
      setIsLoading(false);
    }
  }, [params?.id]);

  if (isLoading) {
    return (
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <p>Loading application details...</p>
      </main>
    );
  }

  if (!application) {
    return (
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Application not found</h1>
        <p>The selected application could not be found.</p>
        <Link href="/application-status" style={{ color: "#0056a4", textDecoration: "underline" }}>
          Back to applications
        </Link>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "sans-serif",
        maxWidth: "980px",
        margin: "0 auto",
        background: "#f8fafc",
        color: "#111827",
        lineHeight: 1.6,
      }}
    >
      <Link
        href="/application-status"
        style={{
          color: "#0056a4",
          textDecoration: "underline",
          display: "inline-block",
          marginBottom: "1rem",
          fontWeight: 600,
        }}
      >
        ← Back to applications
      </Link>

      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
          padding: "1.5rem",
        }}
      >
        <h1 style={{ marginBottom: "0.35rem", fontSize: "1.8rem", color: "#0f172a" }}>{application.role}</h1>
        <p style={{ color: "#374151", marginBottom: "1.25rem", fontSize: "1rem" }}>
          Status: <strong>{application.status || "Pending"}</strong>
        </p>

        <section style={{ background: "#f9fafb", padding: "1.25rem", borderRadius: "12px", marginBottom: "1rem", border: "1px solid #e5e7eb" }}>
          <h2 style={{ marginBottom: "0.75rem", fontSize: "1.1rem", color: "#111827" }}>Applicant details</h2>
          <p style={{ margin: "0.25rem 0" }}><strong>Name:</strong> {application.name}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>Email:</strong> {application.email || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>Phone:</strong> {application.phone || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>Address:</strong> {application.address || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>City:</strong> {application.city || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>State:</strong> {application.state || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>Postal code:</strong> {application.postalCode || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>Country:</strong> {application.country || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>Submitted:</strong> {application.submittedAt || "—"}</p>
        </section>

        <section style={{ background: "#f9fafb", padding: "1.25rem", borderRadius: "12px", marginBottom: "1rem", border: "1px solid #e5e7eb" }}>
          <h2 style={{ marginBottom: "0.75rem", fontSize: "1.1rem", color: "#111827" }}>Experience</h2>
          <p style={{ margin: "0.25rem 0" }}><strong>Company:</strong> {application.company || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>Education:</strong> {application.education || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>Years of experience:</strong> {application.years || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>Skills:</strong> {application.skills || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>Experience summary:</strong> {application.experienceText || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>Resume:</strong> {application.resumeName || "—"}</p>
        </section>

        <section style={{ background: "#f9fafb", padding: "1.25rem", borderRadius: "12px", border: "1px solid #e5e7eb" }}>
          <h2 style={{ marginBottom: "0.75rem", fontSize: "1.1rem", color: "#111827" }}>Questions</h2>
          <p style={{ margin: "0.25rem 0" }}><strong>Authorized to work:</strong> {application.authorized || "—"}</p>
          <p style={{ margin: "0.25rem 0" }}><strong>Willing to relocate:</strong> {application.relocate || "—"}</p>
        </section>
      </div>
    </main>
  );
}
