import Link from "next/link";
import "./home.css"
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function CareersPage() {
  return (
    <main className="nova-page">
      <header className="hero">
        <h1 className="text-5xl font-bold text-blue-900">
          NovaTech Careers
        </h1>

        <p className="text-xl mt-4 text-gray-600">
          Choose a job and apply
        </p>
      </header>

      <section className="jobs">

        {/* Job 1 */}
        <div className="job-card">
          <div
            className="job-image"
            style={{ backgroundImage: 'url("/images/nova-inventorymgr.jpg")' }}
            aria-hidden="true"
          />

          <h2 className="text-2xl font-semibold mb-6">
            Inventory Manager
          </h2>

          <Link
            href="/jobs/associate-producer"
            className="apply-btn pulse"
          >
            View Job
          </Link>
        </div>

        {/* Job 2 */}
        <div className="job-card">
          <div
            className="job-image"
            style={{ backgroundImage: 'url("/images/nova-qualityctrl.jpg")' }}
            aria-hidden="true"
          />

          <h2 className="text-2xl font-semibold mb-6">
            Quality Control Manager
          </h2>

          <Link
            href="/jobs/backend-engineer"
            className="apply-btn"
          >
            View Job
          </Link>
        </div>

      </section>

      {/* CUSTOMER SUPPORT: placed below the jobs as requested */}
      <section className="support" aria-labelledby="support-heading">
        <div className="support-inner">
          <div className="support-card" role="region" aria-label="Customer support">
            <h3 id="support-heading">Customer Support</h3>

            {/* EMAIL */}
            <div className="contact-row">

<a
href="https://mail.google.com/mail/?view=cm&fs=1&to=workdaysupport.novatech@gmail.com&su=Careers%20Inquiry"
target="_blank"
rel="noopener noreferrer"
className="contact-icon email"
title="Email Us"
>

<MdEmail />

</a>


<a
href="https://wa.me/2347059457760"
target="_blank"
rel="noopener noreferrer"
className="contact-icon whatsapp"
title="Chat on WhatsApp"
>

<FaWhatsapp />

</a>

</div>

            
          </div>
        </div>
      </section>

    </main>
  );
}