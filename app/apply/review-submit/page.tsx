"use client";

import { useEffect,useState } from "react";
import Link from "next/link";
import "../../workday.css";
import FeedbackModal from "../../components/feedback-modal";
import { supabase } from "@/lib/supabase";

export default function ReviewSubmit(){
const [job,setJob] = useState("");

useEffect(()=>{

const loadStatus =
async ()=>{

const email =
localStorage.getItem(
"currentUser"
);

if(!email){

window.location.href =
"/login";

return;

}

const {
data,
error

} =

await supabase

.from(
"applications"
)

.select("*")

.eq(
"email",
email
)

.order(
"created_at",
{
ascending:false
}
)

.limit(1);

if(error){

console.log(error);

return;

}

if(data?.length){

setApplication(
data[0]
);

}

};

loadStatus();

},[]);

const [

application,

setApplication

]=useState<any>(null);

const formattedJob = job
  .split("-")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
const [info,setInfo]=useState<any>(null);
const [exp,setExp]=useState<any>(null);
const [questions,setQuestions]=useState<any>(null);
const [modalOpen,setModalOpen]=useState(false);
const [modalTitle,setModalTitle]=useState("");
const [modalMessage,setModalMessage]=useState("");
const [modalType,setModalType]=useState<"success"|"error">("error");
useEffect(()=>{

setInfo(
JSON.parse(
localStorage.getItem("applicantInfo") || "{}"
)
);

setExp(
JSON.parse(
localStorage.getItem("experienceData") || "{}"
)
);

setQuestions(
JSON.parse(
localStorage.getItem("questionData") || "{}"
)
);

},[])

return(

<div className="workday-page">

<div className="top-bar">
<span>Fox Careers</span>
</div>

<div className="workday-container">

<h2 className="job-title">
{formattedJob || "Loading..."}
</h2>


<div className="stepper">

<div className="step active">
✓ Create Account
</div>

<div className="step active">
✓ My Information
</div>

<div className="step active">
✓ Experience
</div>

<div className="step active">
✓ Questions
</div>

<div className="step active">
Review
</div>

</div>


<h1 className="form-title">
Review Application
</h1>

<p
style={{
textAlign:"center",
marginBottom:"30px",
fontWeight:"600",
color:"#0056a4"
}}
>
Applying for:
{" "}
{formattedJob || "Loading..."}
</p>


<div className="center-form">

{info && (

<>

<h3 className="form-title">
Personal Information
</h3>

<p><b>Name:</b> {info.firstName} {info.lastName}</p>

<p><b>Phone:</b> {info.phone}</p>

<p><b>City:</b> {info.city}</p>

<p><b>State:</b> {info.state}</p>

<p><b>Postal Code:</b> {info.postalCode}</p>

<p><b>Country:</b> {info.country}</p>

<p><b>Address:</b> {info.address}</p>

<hr style={{margin:"25px 0"}} />

</>

)}


{exp && (

<>

<h3 className="form-title">
Experience
</h3>

<p>
<b>Employer:</b>
{" "}
{exp.company}
</p>

<p>
<b>Education:</b>
{" "}
{exp.education}
</p>

<p>
<b>Years Experience:</b>
{" "}
{exp.years}
</p>

<p>
<b>Skills:</b>
{" "}
{exp.skills}
</p>

<p>
<b>Work Experience:</b>
{" "}
{exp.experienceText}
</p>

<p>
<b>Resume:</b>
{" "}
{exp.resumeName}
</p>

<hr style={{margin:"25px 0"}} />

</>

)}


{questions && (

<>

<h3 className="form-title">
Questions
</h3>

<p>
<b>Authorized:</b>
{" "}
{questions.authorized}
</p>

<p>
<b>Relocate:</b>
{" "}
{questions.relocate}
</p>

<hr style={{margin:"25px 0"}} />

</>

)}



<div
style={{
display:"flex",
flexDirection:"column",
gap:"15px",
marginTop:"40px",
alignItems:"center"
}}
>

<Link
href="/apply/questions"
className="workday-btn"
style={{
width:"120px",
display:"flex",
justifyContent:"center",
alignItems:"center",
textDecoration:"none"
}}
>
Back
</Link>


<button
type="button"
onClick={async () => {
  try {

    alert("step 1")
  const info = JSON.parse(localStorage.getItem("applicantInfo") || "{}");
  const exp = JSON.parse(localStorage.getItem("experienceData") || "{}");
  const questions = JSON.parse(localStorage.getItem("questionData") || "{}");
if (
  !info.firstName ||
  !exp.company ||
  !questions.authorized
) {
  alert("Application data is missing. Please go back and complete all sections again.");
  return;
}
const currentUser =
localStorage.getItem("currentUser")?.trim().toLowerCase();

const existingApps =
JSON.parse(
localStorage.getItem("applications") || "[]"
);

const newApplication = {

id: Date.now(),

name:
`${info.firstName} ${info.lastName}`,

role:
localStorage.getItem("selectedJob") ||
"Unknown Role",

status:"Pending",

email: currentUser,

submittedAt: new Date().toLocaleString(),

phone: info.phone,

city: info.city,

country: info.country,

address: info.address,

state: info.state,

postalCode: info.postalCode,

governmentIdType:
info.governmentIdType,

governmentIdName:
info.governmentIdName,

governmentIdFile:
info.governmentIdFile,

company:
exp.company,

education:
exp.education,

years:
exp.years,

skills: exp.skills,

experienceText:
exp.experienceText,

resumeName:
exp.resumeName,

resumeFile:
exp.resumeFile,

authorized:
questions.authorized,

relocate:
questions.relocate,


};

existingApps.push(newApplication);
localStorage.setItem("applications", JSON.stringify(existingApps));

const { error } =
await supabase
.from("applications")
.insert([
newApplication
]);

console.log(
"SUPABASE ERROR:",
error
);

if(error){

window.alert(
error.message
);

return;

}

/* KEEP USER LOGGED IN */

localStorage.setItem(
"isLoggedIn",
"true"
);

/* REMOVE FORM DATA ONLY */

localStorage.removeItem(
"applicantInfo"
);

localStorage.removeItem(
"experienceData"
);

localStorage.removeItem(
"questionData"
);


setTimeout(()=>{
setModalTitle("Application Submitted");
setModalMessage("Your application was submitted successfully. You will be redirected shortly.");
setModalType("success");
setModalOpen(true);
setTimeout(()=>window.location.href="/application-status", 1000);
},300);

  } catch (err) {
    console.error(err);
    alert("ERROR: " + String(err));
  }
}}

className="workday-btn"
>
Submit Application
</button>


</div>

</div>

<FeedbackModal
open={modalOpen}
title={modalTitle}
message={modalMessage}
type={modalType}
onClose={() => setModalOpen(false)}
/>

<div className="footer">
© Fox Careers
</div>

</div>

</div>

)
}