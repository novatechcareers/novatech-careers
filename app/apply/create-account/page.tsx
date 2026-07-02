"use client";
import "../../workday.css";
import FeedbackModal from "../../components/feedback-modal";
import { useState, useEffect  } from "react";
import { useRouter, useSearchParams  } from "next/navigation";

export default function CreateAccount(){
const [job,setJob] = useState("");

useEffect(()=>{
  const storedJob = localStorage.getItem("selectedJob") || "";
  setJob(storedJob);
},[]);

const formattedJob = job
  .split("-")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [showPassword,setShowPassword]=useState(false);
const [modalOpen,setModalOpen]=useState(false);
const [modalTitle,setModalTitle]=useState("");
const [modalMessage,setModalMessage]=useState("");
const [modalType,setModalType]=useState<"success"|"error">("error");
const router = useRouter();
const searchParams = useSearchParams();

useEffect(()=>{

const job = searchParams.get("job");

const existingJob =
localStorage.getItem("selectedJob");

if(job && !existingJob){
localStorage.setItem("selectedJob", job);
}

},[searchParams]);

return(

<div className="workday-page">

<div className="top-bar">
<span>Fox Careers</span>
</div>

<div className="workday-container">

<h2 className="job-title">
Applying for: {formattedJob || "Loading..."}
</h2>

<div className="stepper">

<div className="step active">
Create Account
</div>

<div className="step">
My Information
</div>

<div className="step">
My Experience
</div>

<div className="step">
Application Questions
</div>

<div className="step">
Review
</div>

</div>

<h1 className="form-title">
Create Account
</h1>

<div className="center-form">

<label className="workday-label">
Email Address*
<input
type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="workday-input"
/>
</label>

<label className="workday-label">
Password*
<div className="password-field">
<input
type={showPassword ? "text" : "password"}
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="workday-input"
style={{ paddingRight: "44px" }}
/>
<button
type="button"
onClick={() => setShowPassword(!showPassword)}
className="password-toggle-btn"
aria-label={showPassword ? "Hide password" : "Show password"}
>
{showPassword ? (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3l18 18" />
    <path d="M10.6 10.6A3 3 0 0013.4 13.4" />
    <path d="M9.88 5.08A10.94 10.94 0 0112 5c4.22 0 6.4 2.44 8 6a11.1 11.1 0 01-2.4 3.5" />
    <path d="M6.53 6.53A10.93 10.93 0 002 11c1.6 3.56 5.18 6 10 6a10.7 10.7 0 003.47-.57" />
  </svg>
) : (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)}
</button>
</div>
</label>

<div className="password-box">

<strong>Password must include:</strong>

<ul>
<li>• Uppercase letter</li>
<li>• Lowercase letter</li>
<li>• Number</li>
<li>• Special character</li>
<li>• Minimum 8 characters</li>
</ul>

</div>

<button
type="button"
onClick={() => {

const passwordHasUpper = /[A-Z]/.test(password);
const passwordHasLower = /[a-z]/.test(password);
const passwordHasNumber = /\d/.test(password);
const passwordHasSpecial = /[^A-Za-z0-9]/.test(password);

if(
!email.includes("@") ||
!email.includes(".") ||
password.length < 8 ||
!passwordHasUpper ||
!passwordHasLower ||
!passwordHasNumber ||
!passwordHasSpecial
){
setModalTitle("Invalid Password");
setModalMessage("Please enter a valid email and a password that includes uppercase, lowercase, a number, a special character, and at least 8 characters.");
setModalType("error");
setModalOpen(true);
return;
}

const normalizedEmail = email.trim().toLowerCase();

const existingAccounts =
JSON.parse(
localStorage.getItem("accounts") || "[]"
);

const alreadyExists = existingAccounts.find(
(acc:any)=>acc.email?.toLowerCase() === normalizedEmail
);

if(alreadyExists){
setModalTitle("Account Exists");
setModalMessage("An account with this email already exists. Please sign in instead.");
setModalType("error");
setModalOpen(true);
return;
}

existingAccounts.push({
email: normalizedEmail,
password
});

localStorage.setItem(
"accounts",
JSON.stringify(existingAccounts)
);

localStorage.setItem("isLoggedIn","true");
localStorage.setItem("currentUser", normalizedEmail);

setModalTitle("Account Created");
setModalMessage("Your account has been created. Redirecting to your application.");
setModalType("success");
setModalOpen(true);
setTimeout(() => router.push("/apply/my-information"), 800);

}}
className="workday-btn"
>
Create Account
</button>

<div className="workday-link">

Already have an account?

<a href="/login">
 Sign In
</a>

</div>

</div>

</div>

<FeedbackModal
open={modalOpen}
title={modalTitle}
message={modalMessage}
type={modalType}
onClose={() => setModalOpen(false)}
/>

</div>

)
}