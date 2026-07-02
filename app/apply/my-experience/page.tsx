"use client";

import "../../workday.css";
import { useState, useEffect  } from "react";
import Link from "next/link";

export default function MyExperience() {

const [job,setJob] = useState("");

useEffect(()=>{
  const storedJob =
localStorage.getItem("selectedJob") || "";
  setJob(storedJob);
},[]);

const formattedJob = job
  .split("-")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

const [resume,setResume] = useState<File | null>(null);

const [skills,setSkills] = useState("");
const [experienceText,setExperienceText] = useState("");
const [education,setEducation] = useState("");
const [company,setCompany] = useState("");
const [years,setYears] = useState("");

const handleFileChange = (
e: React.ChangeEvent<HTMLInputElement>
)=>{
if(e.target.files?.[0]){
setResume(e.target.files[0]);
}
};


const handleContinue = () => {

if(
!experienceText ||
!skills ||
!resume ||
!company ||
!education ||
!years
){
window.alert("Please complete all fields and upload resume");
return;
}

const reader = new FileReader();

reader.onload = () => {

const experienceData = {

company,

education,

years,

skills,

experienceText,

resumeName:
resume.name,

resumeFile:
reader.result

};

localStorage.setItem(
"experienceData",
JSON.stringify(experienceData)
);

window.location.href="/apply/questions";

};

reader.readAsDataURL(resume);

};

return(

<div className="workday-page">

<div className="top-bar">
<span>Fox Careers</span>
</div>

<div className="workday-container">

<h2 className="job-title">
{formattedJob || "loading..."}
</h2>

<div className="stepper">

<div className="step active">
✓ Create Account
</div>

<div className="step active">
✓ My Information
</div>

<div className="step active">
Experience
</div>

<div className="step">
Questions
</div>

<div className="step">
Review
</div>

</div>


<h1 className="form-title">
My Experience
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
{formattedJob || "loading..."}
</p>


<div className="center-form">

<label className="workday-label">
Work Experience*
<textarea
value={experienceText}
onChange={(e)=>
setExperienceText(
e.target.value
)
}
placeholder="Describe your experience"
style={{
width:"280px",
height:"140px",
padding:"10px",
border:"1px solid #8f9aa7"
}}
/>
</label>
<label className="workday-label">
Most Recent Employer*

<input
value={company}
onChange={(e)=>setCompany(e.target.value)}
className="workday-input"
/>

</label>


<label className="workday-label">
Highest Education*

<select
value={education}
onChange={(e)=>setEducation(e.target.value)}
className="workday-input"
>

<option value="">
Select Education
</option>

<option>
High School
</option>

<option>
Diploma
</option>

<option>
Bachelor Degree
</option>

<option>
Master Degree
</option>

<option>
PhD
</option>

</select>

</label>


<label className="workday-label">
Years Experience*

<input
value={years}
onChange={(e)=>setYears(e.target.value)}
className="workday-input"
/>

</label>


<label className="workday-label">
Skills*
<input
value={skills}
onChange={(e)=>
setSkills(
e.target.value
)
}
className="workday-input"
/>
</label>


<label className="workday-label">

Resume Upload*

<div
style={{
border:"2px dashed #ccc",
padding:"25px",
textAlign:"center",
borderRadius:"12px"
}}
>

<p>
Upload Resume
</p>

<input
type="file"
accept=".pdf,.doc,.docx"
onChange={handleFileChange}
/>

</div>

</label>


{resume && (

<div
style={{
marginTop:"20px",
background:"#f0fff4",
padding:"15px",
borderRadius:"10px"
}}
>

Uploaded:

<strong>

{" "}
{resume.name}

</strong>

</div>

)}


<div
style={{
display:"flex",
justifyContent:"space-between",
marginTop:"40px"
}}
>

<Link
href="/apply/my-information"
className="workday-btn"
style={{
width:"120px",
textDecoration:"none",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}
>
Back
</Link>


<button
onClick={handleContinue}
className="workday-btn"
>
Continue
</button>

</div>

</div>


<div className="footer">
© Fox Careers
</div>

</div>

</div>

)
}

