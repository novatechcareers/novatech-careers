"use client";
// app/jobs/[slug]/page.tsx

import React from "react";
import "./job-detail.css";
import Link from "next/link";

const heroImage = "/images/inventory-hero.jpg"; // REPLACE with your chosen hero image
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
        <div className="fc-hero-text">INVENTORY MANAGER</div>
        <img
          src={heroImage || "https://via.placeholder.com/1200x600"}
          alt="Warehouse / Inventory management hero"
          className="fc-hero-img"
        />
      </div>

      {/* Main content */}
      <div className="fc-main-bg">
        <div className="fc-main-area">
          {/* Title, metadata, and logo */}
          <div className="fc-title-row">
            <div>
              <h1 className="fc-job-title">Inventory Manager</h1>
              <div className="fc-metadata">
                <div><b>Job Number:</b> INV-2026-517</div>
                <div><b>Brand:</b> NovaTech Logistics</div>
                <div><b>Job Type:</b> Full-Time, Operations</div>
                <div><b>Location Type:</b> Onsite / Hybrid</div>
                <div><b>Experience Level:</b> Mid - Senior</div>
                <div><b>Location:</b> Chicago, IL (Primary)</div>
                <div><b>Job Posting Date:</b> June 10, 2026</div>
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
                localStorage.setItem("selectedJob", "Inventory Manager");
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
              The Inventory Manager will lead day-to-day inventory control and warehousing operations for NovaTech Logistics. You will ensure accurate stock levels, streamline inbound/outbound receiving, implement inventory controls, and partner with procurement and operations to maintain service levels and reduce carrying costs. This role is hands-on and a key contributor to continuous improvement initiatives across the supply chain.
            </div>
          </section>

          {/* Job Description / Responsibilities */}
          <section className="fc-section" id="job-requirements">
            <h2 className="fc-section-title">KEY RESPONSIBILITIES</h2>
            <ul>
              <li>Own inventory accuracy across multiple SKUs and warehouse locations; achieve and maintain ≥ 98% inventory accuracy through cycle counts and reconciliations.</li>
              <li>Supervise receiving, put-away, picking, packing, and shipping workflows to ensure on-time, accurate deliveries.</li>
              <li>Design and implement cycle counting programs, including frequency, sampling methods, and variance remediation procedures.</li>
              <li>Work with Procurement to monitor stock levels, lead times, and safety stock to prevent stockouts and overstock situations.</li>
              <li>Develop KPIs and dashboard reporting for inventory turns, days of inventory, backorder rates, and carrying costs; present results to Operations leadership weekly.</li>
              <li>Lead and coach a small team of inventory analysts/warehouse supervisors; manage schedules, performance reviews, and training.</li>
              <li>Coordinate physical audits and root-cause investigations for discrepancies; own corrective action plans and process changes.</li>
              <li>Optimize warehouse layout and slotting to improve throughput and reduce picking times.</li>
              <li>Manage cycle count and inventory adjustment workflows in the WMS/ERP and ensure proper documentation and approvals for inventory movements.</li>
              <li>Partner with continuous improvement/lean teams to run projects that reduce waste and improve throughput (e.g., Kaizen events).</li>
              <li>Ensure compliance with safety, regulatory, and company policies in all inventory and warehousing activities.</li>
            </ul>

            <h3 className="fc-subsection-title">REQUIRED EXPERIENCE & QUALIFICATIONS</h3>
            <ul>
              <li>5+ years of progressive inventory / warehouse management experience in distribution, manufacturing, or retail environments.</li>
              <li>Proven track record of managing multi-SKU operations and driving measurable improvements in inventory accuracy and turns.</li>
              <li>Strong knowledge of warehouse processes (receiving, put-away, picking, cycle counting, shipping) and inventory control best practices.</li>
              <li>Hands-on experience with Warehouse Management Systems (WMS) and Enterprise Resource Planning (ERP) systems (examples: NetSuite, Oracle, SAP, Manhattan); ability to own system inventory workflows and processes.</li>
              <li>Excellent Microsoft Excel skills for data analysis (VLOOKUP, pivot tables, data validation) and experience building simple dashboards or reports.</li>
              <li>Demonstrated leadership experience supervising and developing operational teams.</li>
              <li>Strong analytical and problem-solving skills with the ability to translate data into operational improvements.</li>
              <li>Bachelor’s degree in Supply Chain, Logistics, Business Administration, or equivalent experience preferred (or 5+ years progressive experience in lieu of degree).</li>
            </ul>

            <h3 className="fc-subsection-title">PREFERRED / NICE-TO-HAVE</h3>
            <ul>
              <li>APICS / ASCM certification (CPIM or CSCP) or other supply chain certifications.</li>
              <li>Experience with demand planning, inventory optimization tools, or network optimization projects.</li>
              <li>Experience with barcode/RFID technologies and material handling equipment selection.</li>
              <li>Familiarity with Lean, Six Sigma, Kaizen methodologies or project leadership training.</li>
              <li>Experience managing third-party logistics (3PL) relationships and integrating systems with partners.</li>
            </ul>

            <h3 className="fc-subsection-title">KEY SKILLS</h3>
            <ul>
              <li>Inventory modeling and safety stock calculation</li>
              <li>Root-cause analysis and variance reconciliation</li>
              <li>Cross-functional communication (Procurement, Operations, Sales)</li>
              <li>Contract and vendor management basics for inbound/outbound carriers</li>
              <li>Process documentation and SOP creation</li>
            </ul>

            <h3 className="fc-subsection-title">KPIs YOU'LL OWN</h3>
            <ul>
              <li>Inventory accuracy (%)</li>
              <li>Inventory turns (annual)</li>
              <li>Backorder rate (%)</li>
              <li>Order fulfillment accuracy (%)</li>
              <li>Carrying cost as % of inventory value</li>
              <li>Cycle count completion & variance closure time</li>
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