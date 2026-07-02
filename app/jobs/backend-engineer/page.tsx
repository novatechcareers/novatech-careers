"use client";
// app/jobs/[slug]/page.tsx

import React from "react";
import "./job-detail.css";
import Link from "next/link";

const heroImage = "/images/quality-hero.jpg"; // REPLACE with your chosen hero image
const companyLogo = "/images/company-logo.png"; // REPLACE with your brand/job logo
const brandLogo = "/images/brand-logo.png"; // optional

export default function JobDetailPage() {
  return (
    <div className="foxcareers">
      {/* Header */}
      <header className="fc-header">
        <div className="fc-header-inner">
          <div className="fc-logo-section">
            <img src={companyLogo} alt="Company logo" className="fc-logo" />
            <span className="fc-careers">| CAREERS</span>
          </div>
          <nav className="fc-nav" aria-label="Primary navigation">
            <a href="#">OUR BRANDS</a>
            <a href="#">LIFE AT FOX</a>
            <a href="#">INTERNSHIPS</a>
            <a href="#">PROGRAMS</a>
            <a href="#">JOB SEARCH</a>
            <a href="#">MY ACCOUNT</a>
          </nav>
        </div>
      </header>

      {/* Hero/Jumbotron */}
      <div className="fc-hero" role="banner" aria-label="Job hero">
        <div className="fc-hero-text">QUALITY CONTROL MANAGER</div>
        <img
          src={heroImage || "https://via.placeholder.com/1200x600"}
          alt="Warehouse / Quality control manager hero"
          className="fc-hero-img"
        />
      </div>

      {/* Main content */}
      <div className="fc-main-bg">
        <div className="fc-main-area">
          {/* Title, metadata, and logo */}
          <div className="fc-title-row">
            <div>
              <h1 className="fc-job-title">Quality Control Manager</h1>
              <div className="fc-metadata">
                <div><b>Job Number:</b> QCM-2026-0417</div>
                <div><b>Brand:</b> NovaTech Logistics</div>
                <div><b>Job Type:</b> Full-Time/Part-Time, Operations</div>
                <div><b>Location Type:</b> Onsite / Hybrid</div>
                <div><b>Experience Level:</b> Mid - Senior</div>
                <div><b>Location:</b> Washington DC, Logan (Primary)</div>
                <div><b>Job Posting Date:</b> May 15, 2026</div>
              </div>
            </div>

            {/* optional brand/logo */}
            <img src={brandLogo} alt="Brand logo" className="fc-joblogo-img" />
          </div>

          {/* Buttons */}
          <div className="fc-button-row">
            <Link
              href="/apply/create-account"
              onClick={() => {
                localStorage.setItem("selectedJob", "Quality Control Manager");
              }}
            >
              <button className="fc-apply-btn">
                APPLY NOW
              </button>
            </Link>

            <a className="fc-outline-btn" href="#job-requirements">
              View Requirements
            </a>
          </div>

          {/* Overview */}
          <section className="fc-section">
            <h2 className="fc-section-title">OVERVIEW</h2>
            <div>
              The Quality Control Manager will oversee quality assurance and quality control operations across NovaTech to ensure products, services, and internal processes consistently meet company standards and customer expectations. This role is responsible for developing inspection procedures, monitoring quality performance, leading audits, investigating defects, and driving continuous improvement initiatives. You will work closely with Operations, Engineering, and Production teams to maintain compliance, reduce errors, and deliver reliable, high-quality outcomes across the business.
            </div>
          </section>

          {/* Job Description / Responsibilities */}
          <section className="fc-section" id="job-requirements">
            <h2 className="fc-section-title">KEY RESPONSIBILITIES</h2>
            <ul>
              <li>
Develop, implement, and maintain company-wide quality control standards, procedures, and inspection processes.
</li>
<li>
Monitor product and service quality to ensure compliance with internal requirements and regulatory standards.
</li>
<li>
Lead routine quality inspections, audits, and testing activities across operations and production teams.
</li>
<li>
Investigate customer complaints, defects, non-conformance reports, and quality incidents; implement corrective and preventive actions.
</li>
<li>
Analyze quality data and generate reports on trends, root causes, and improvement opportunities.
</li>
<li>
Collaborate with Operations, Engineering, and Production teams to improve workflows and reduce defects.
</li>
<li>
Create and maintain quality documentation including SOPs, quality manuals, and compliance records.
</li>
<li>
Supervise and mentor quality inspectors, analysts, and quality assurance staff.
</li>
<li>
Develop KPIs and dashboards to track quality performance and operational efficiency.
</li>
<li>
Coordinate internal and external audits and ensure readiness for regulatory reviews.
</li>
<li>Drive continuous improvement initiatives focused on reducing waste and increasing process reliability.</li>
<li>Review supplier quality performance and work with vendors to improve incoming material standards.
</li>
<li>Train employees on quality policies, procedures, and best practices.</li>
<li>Ensure all products and services meet customer expectations before final release or delivery.</li>
<li>Support leadership with strategic recommendations for quality enhancement and risk reduction.</li>
            </ul>

            <h3 className="fc-subsection-title">REQUIRED EXPERIENCE & QUALIFICATIONS</h3>
            <ul>
              <li>
Bachelor’s degree in Quality Management, Engineering, Industrial Technology, Operations Management, or related field preferred.
</li>

<li>
5+ years of progressive experience in Quality Control, Quality Assurance, Manufacturing, Operations, or related environments.
</li>

<li>
Demonstrated experience developing and implementing quality standards and control procedures.
</li>

<li>
Strong knowledge of quality management systems, inspection processes, and compliance requirements.
</li>

<li>
Hands-on experience conducting audits, root-cause analysis, and corrective action implementation.
</li>

<li>
Experience working with quality reporting tools, metrics, and performance dashboards.
</li>

<li>
Strong understanding of regulatory standards and operational compliance practices.
</li>

<li>
Experience supervising and developing quality teams and cross-functional collaboration.
</li>

<li>
Advanced analytical and problem-solving skills with attention to detail.
</li>

<li>
Excellent communication, leadership, and organizational abilities.
</li>

<li>
Proficiency in Microsoft Excel, reporting tools, and business process documentation.
</li>

<li>
Ability to manage multiple projects and maintain quality under tight deadlines.
</li>
            </ul>

            <h3 className="fc-subsection-title">PREFERRED / NICE-TO-HAVE</h3>
            <ul>
              <li>
Certified Quality Manager (CQM), Certified Quality Engineer (CQE), or related quality certification.
</li>

<li>
Lean Six Sigma Green Belt or Black Belt certification.
</li>

<li>
Experience implementing and managing Quality Management Systems (QMS).
</li>

<li>
Knowledge of ISO standards, audits, and regulatory compliance.
</li>

<li>
Experience leading continuous improvement and operational excellence initiatives.
</li>
            </ul>

            <h3 className="fc-subsection-title">KEY SKILLS</h3>
            <ul>
              <li>
Quality inspection and quality assurance management
</li>

<li>
Root-cause analysis and problem solving
</li>

<li>
Process improvement and continuous improvement
</li>

<li>
Audit management and regulatory compliance
</li>

<li>
Data analysis, reporting, and decision making
</li>
            </ul>

            <h3 className="fc-subsection-title">KPIs YOU'LL OWN</h3>
          

<h3 className="fc-subsection-title">
KEY SKILLS
</h3>

<ul>

<li>
Quality inspection and quality assurance management
</li>

<li>
Root-cause analysis and problem solving
</li>

<li>
Process improvement and continuous improvement
</li>

<li>
Audit management and regulatory compliance
</li>

<li>
Data analysis, reporting, and decision making
</li>

</ul>



<h3 className="fc-subsection-title">
KPIs YOU'LL OWN
</h3>

<ul>

<li>
Defect rate (%)
</li>

<li>
Quality compliance score (%)
</li>

<li>
Customer complaint resolution time
</li>

<li>
Audit pass rate (%)
</li>

<li>
First-pass approval rate (%)
</li>
            </ul>

            <p className="fc-meta">
              NovaTech is an equal opportunity employer. We value diverse perspectives and thrive when our teams represent a variety of backgrounds and experiences.
            </p>
          </section>

          {/* Additional sections (benefits, compensation summary) */}
          <section className="fc-section">
            <h2 className="fc-section-title">COMPENSATION & BENEFITS</h2>
            <p>
              The pay range for this role depends on experience and location, and will be communicated during the hiring process. NovaTech provides a competitive benefits package including medical, dental, 401(k) match, paid time off, and professional development allowances.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="fc-footer">
        <div className="fc-footer-inner">
          <span>© {new Date().getFullYear()} NovaTech. All rights reserved.</span>
          <div className="fc-footer-links">
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}