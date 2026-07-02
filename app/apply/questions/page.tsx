"use client";
import "../../workday.css";
import Link from "next/link";
import { useState, useEffect  } from "react";

export default function Questions(){
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
const [authorized,setAuthorized]=useState("");
const [relocate,setRelocate]=useState("");
const [experience,setExperience]=useState("");


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
Questions
</div>

<div className="step">
Review
</div>

</div>


<h1 className="form-title">
Application Questions
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

<label className="workday-label">

Are you legally authorized to work?

<div style={{marginTop:"12px"}}>

<label>

<input
type="radio"
value="Yes"
checked={authorized==="Yes"}
onChange={(e)=>
setAuthorized(
e.target.value
)
}
/>

{" "}Yes

</label>

</div>


<div style={{marginTop:"10px"}}>

<label>

<input
type="radio"
value="No"
checked={authorized==="No"}
onChange={(e)=>
setAuthorized(
e.target.value
)
}
/>

{" "}No

</label>

</div>

</label>



<label className="workday-label">

Are you willing to relocate?

<select
value={relocate}
onChange={(e)=>
setRelocate(
e.target.value
)
}
className="workday-input"
>

<option value="">
Select
</option>

<option>
Yes
</option>

<option>
No
</option>

</select>

</label>



<label className="workday-label">

Years of Experience

<input
value={experience}
onChange={(e)=>
setExperience(
e.target.value
)
}
className="workday-input"
/>

</label>



<div
style={{
display:"flex",
justifyContent:"space-between",
marginTop:"40px"
}}
>

<Link
href="/apply/my-experience"
className="workday-btn"
style={{
width:"120px",
display:"flex",
alignItems:"center",
justifyContent:"center",
textDecoration:"none"
}}
>
Back
</Link>



<button
onClick={()=>{

if(
!authorized ||
!relocate
){

window.alert(
"Please answer all questions"
);

return;

}

localStorage.setItem(

"questionData",

JSON.stringify({

authorized,

relocate,

experience

})

);

window.location.href=
"/apply/review-submit";

}}
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