"use client";

import "../../workday.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function MyInformation(){

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

const [form,setForm]=useState({

firstName:"",
lastName:"",
phone:"",
address:"",
city:"",
state:"",
postalCode:"",
country:"",

governmentIdType:"",
governmentIdName:"",
governmentIdFile:"",

});

const handleChange=(e:any)=>{
setForm({
...form,
[e.target.name]:e.target.value
})
}


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
My Information
</div>

<div className="step">
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
My Information
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
First Name*
<input
name="firstName"
onChange={handleChange}
className="workday-input"
/>
</label>


<label className="workday-label">
Last Name*
<input
name="lastName"
onChange={handleChange}
className="workday-input"
/>
</label>


<label className="workday-label">
Phone*
<input
name="phone"
onChange={handleChange}
className="workday-input"
/>
</label>


<label className="workday-label">
City*
<input
name="city"
onChange={handleChange}
className="workday-input"
/>
</label>


<label className="workday-label">
Country*
<input
name="country"
onChange={handleChange}
className="workday-input"
/>
</label>


<label className="workday-label">
Address*
<input
name="address"
onChange={handleChange}
className="workday-input"
/>
</label>


<label className="workday-label">
State*
<input
name="state"
onChange={handleChange}
className="workday-input"
/>
</label>


<label className="workday-label">
Postal Code*
<input
name="postalCode"
onChange={handleChange}
className="workday-input"
/>
</label>

<hr style={{margin:"30px 0"}} />

<h3 className="form-title">
Government ID (Optional)
</h3>


<label className="workday-label">

ID Type

<select

name="governmentIdType"

onChange={handleChange}

className="workday-input"

>

<option value="">
Select ID
</option>

<option>
Driver License / State ID
</option>

<option>
US Passport
</option>

<option>
US Permanent Resident Card
</option>

<option>
Military ID
</option>

<option>
Other Government ID
</option>

</select>

</label>


<label className="workday-label">

Upload ID

<input

type="file"

accept="image/*,.pdf"

onChange={(e)=>{

const file =
e.target.files?.[0];

if(!file) return;

const reader =
new FileReader();

reader.onload=()=>{

setForm({

...form,

governmentIdName:
file.name,

governmentIdFile:
reader.result as string

});

};

reader.readAsDataURL(
file
);

}}

className="workday-input"

/>

</label>

<Link
href="/apply/create-account"
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
onClick={()=>{

if(
!form.firstName||
!form.lastName||
!form.phone||
!form.city||
!form.country||
!form.address||
!form.state||
!form.postalCode 
)
{
window.alert(
"Please complete all required fields"
);
return;
}

localStorage.setItem(
"applicantInfo",
JSON.stringify(form)
);

window.location.href=
"/apply/my-experience";

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

)
}
