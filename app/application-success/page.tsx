"use client";

import Link from "next/link";
import "../workday.css";

export default function SuccessPage(){

return(

<div className="workday-page">

<div className="top-bar">
<span>Fox Careers</span>
</div>


<div className="workday-container">

<h1 className="form-title">

Application Submitted

</h1>


<div
className="center-form"
style={{
textAlign:"center"
}}
>

<div
style={{
fontSize:"80px",
marginBottom:"20px"
}}
>

✅

</div>


<p
style={{
color:"#000",
fontSize:"18px",
lineHeight:"1.8",
marginBottom:"35px"
}}
>

Thank you for applying with NovaTech.

Your application has been submitted successfully.

Our recruitment team will review your application and update your status soon.

</p>


<Link

href="/application-status"

className="workday-btn"

style={{
textDecoration:"none",
display:"inline-flex",
alignItems:"center",
justifyContent:"center",
width:"260px"
}}

>

View Application Status

</Link>


</div>

</div>


<div className="footer">

© Fox Careers

</div>

</div>

)

}