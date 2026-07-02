"use client";
import "../workday.css";
import FeedbackModal from "../components/feedback-modal";

import { useState,useEffect } from "react";
export default function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [showPassword,setShowPassword]=useState(false);
const [job,setJob]=useState("");
const [modalOpen,setModalOpen]=useState(false);
const [modalTitle,setModalTitle]=useState("");
const [modalMessage,setModalMessage]=useState("");
const [modalType,setModalType]=useState<"success"|"error">("error");

useEffect(()=>{

const storedJob =
localStorage.getItem("selectedJob") || "";

setJob(storedJob);

},[]);

const formattedJob =
job
.split("-")
.map(
word=>
word.charAt(0).toUpperCase()+
word.slice(1)
)
.join(" ");

const handleLogin=()=>{

const normalizedEmail = email.trim().toLowerCase();

if(!normalizedEmail || !password){
setModalTitle("Missing Fields");
setModalMessage("Please enter both email and password.");
setModalType("error");
setModalOpen(true);
return;
}

const accounts =
JSON.parse(
localStorage.getItem("accounts") || "[]"
);

const user = accounts.find(
(acc:any)=>acc.email?.toLowerCase() === normalizedEmail && acc.password === password
);

if(user){

localStorage.setItem("isLoggedIn","true");
localStorage.setItem("currentUser", normalizedEmail);

setModalTitle("Signed In");
setModalMessage("Welcome back. Redirecting to your application status.");
setModalType("success");
setModalOpen(true);
setTimeout(()=>window.location.href="/application-status", 1200);

}else{

setModalTitle("Sign In Failed");
setModalMessage("Invalid email or password. Please try again.");
setModalType("error");
setModalOpen(true);

}

};

return(


<div className="workday-page">

<div className="top-bar">
<span>Fox Careers</span>
</div>

<div className="workday-container">

<h2 className="job-title">

Applying for:

{" "}

{formattedJob || "Loading..."}

</h2>

<div className="stepper">

<div className="step active">
Create Account/Sign In
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
Sign In
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
    <path d="M9.88 5.08A10.94 10.94 0 0112 5c4.22 0 7.8 2.44 9.4 6a11.1 11.1 0 01-2.4 3.5" />
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

<button
onClick={handleLogin}
className="workday-btn"
>
Sign In
</button>

<div className="workday-link">
Don't have an account?
<a href="/apply/create-account">
 Create Account
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