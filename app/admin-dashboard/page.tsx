"use client";

import "./admin.css";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard(){

const [applicants,setApplicants] = useState<any[]>([]);
const [filter,setFilter] = useState("All");

// ✅ Load data
useEffect(()=>{
    const admin =

sessionStorage.getItem(
"isAdmin"
);

if(

admin !==

"true"

){

window.location.href=

"/admin-login";

return;

}


const loadApplicants =
async ()=>{
try{

const {

data,
error

}

=

await supabase

.from(
"applications"
)

.select("*");

if(error){

console.error("Admin applicant fetch failed:", error);

return;

}

const remoteApplicants = Array.isArray(data) ? data : [];

setApplicants(remoteApplicants);

}catch(err){
console.error("Admin applicant load failed:", err);
}

};

loadApplicants();

},[]);

const [selectedApplicant,setSelectedApplicant] =
useState<any>(null);

// ✅ Stats
const total = applicants.length;
const pending = applicants.filter(a => a.status === "Pending").length;
const shortlisted = applicants.filter(a => a.status === "Shortlisted").length;
const rejected = applicants.filter(a => a.status === "Rejected").length;

// ✅ Update status
const updateStatus = async (id:number,newStatus:string)=>{

const updated =
applicants.map(applicant =>
applicant.id === id
? {...applicant, status:newStatus}
: applicant
);

setApplicants(updated);


const { error } = await supabase
.from("applications")
.update({ status: newStatus })
.eq("id", id);

if(error){
console.error("Failed to update applicant status:", error);
}

};

// ✅ Delete
const deleteApplicant = async (id:number)=>{

const updated =
applicants.filter(app => app.id !== id);

setApplicants(updated);


const { error } = await supabase
.from("applications")
.delete()
.eq("id", id);

if(error){
console.error("Failed to delete applicant:", error);
}

};

return(

<main className="min-h-screen bg-gray-100 flex text-black">

{/* Sidebar */}
<div className="w-72 bg-gradient-to-b from-blue-950 to-blue-800 text-white p-8">

<h1 className="text-3xl font-black mb-10">
NovaTech Admin
</h1>

<div className="space-y-6">
<div>Dashboard</div>
<div>Applications</div>
<div>Candidates</div>
<div>Job Listings</div>
<div>Documents</div>
</div>

</div>

{/* Main */}
<div className="flex-1 p-10 text-black">

<h1 className="text-4xl font-bold mb-10">
Recruitment Dashboard
</h1>

{/* Stats */}
<div className="grid md:grid-cols-4 gap-6 mb-12">

<div className="bg-white p-6 rounded-2xl shadow">
<h2>Total Applications</h2>
<p className="text-4xl font-bold">{total}</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow">
<h2>Pending</h2>
<p className="text-4xl font-bold">{pending}</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow">
<h2>Shortlisted</h2>
<p className="text-4xl font-bold">{shortlisted}</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow">
<h2>Rejected</h2>
<p className="text-4xl font-bold">{rejected}</p>
</div>

</div>

{/* Filter */}
<div className="mb-6 space-x-3">
<button onClick={()=>setFilter("All")}>All</button>
<button onClick={()=>setFilter("Pending")}>Pending</button>
<button onClick={()=>setFilter("Shortlisted")}>Shortlisted</button>
<button onClick={()=>setFilter("Rejected")}>Rejected</button>
</div>

{/* Table */}
<div className="bg-white rounded-2xl shadow p-8 text-black">

<h2 className="text-2xl font-semibold mb-6">
Applicant Queue
</h2>

<table className="w-full text-black border-separate border-spacing-y-4">

<thead>
<tr className="bg-gray-50 text-left">
<th>Name</th>
<th>Role</th>
<th>Status</th>
<th>Email</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{applicants
.filter(app => filter === "All" || app.status === filter)
.map((applicant)=>(

<tr
key={applicant.id}
className="border-b text-black"
>

<td className="py-5 text-black-800 px-3">{applicant.name}</td>
<td>{applicant.role}</td>
<td>
<span
className={`px-3 py-1 rounded-full text-white text-sm
${
applicant.status === "Pending"
? "bg-yellow-500"
: applicant.status === "Shortlisted"
? "bg-green-600"
: "bg-red-600"
}`}
>
{applicant.status}
</span>
</td>
<td>{applicant.email}</td>
<td className="space-x-3">

<button
onClick={()=>updateStatus(applicant.id,"Shortlisted")}
className="bg-blue-900 text-white px-4 py-2 rounded-xl"
>
Approve
</button>

<button
onClick={()=>updateStatus(applicant.id,"Rejected")}
className="bg-blue-900 text-white px-4 py-2 rounded-xl"
>
Reject
</button>

<button
onClick={()=>updateStatus(applicant.id,"Pending")}
className="bg-blue-900 text-white px-4 py-2 rounded-xl"
>
Review
</button>

<button
onClick={() => setSelectedApplicant(applicant)}
className="bg-blue-900 text-white px-4 py-2 rounded-xl"
>
View
</button>

<button
onClick={() => {
if (!applicant.resumeFile) {
window.alert("Resume file not found");
return;
}

const link = document.createElement("a");
link.href = applicant.resumeFile;
link.download = applicant.resumeName || "resume.pdf";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}}
className="bg-blue-900 text-white px-4 py-2 rounded-xl"
>
Download CV
</button>

<button
onClick={()=>deleteApplicant(applicant.id)}
className="bg-blue-900 text-white px-4 py-2 rounded-xl"
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

{selectedApplicant && (

<div className="mt-10 bg-white p-8 rounded-2xl shadow text-black">

<h2 className="text-2xl font-bold mb-6">
Applicant Details
</h2>

<p>
<strong>Name:</strong>
{" "}
{selectedApplicant.name}
</p>

<p>
<strong>Email:</strong>
{" "}
{selectedApplicant.email}
</p>

<p>
<strong>Role:</strong>
{" "}
{selectedApplicant.role}
</p>

<p>
<strong>Status:</strong>
{" "}
{selectedApplicant.status}
</p>

<hr className="my-6" />


<h3 className="font-bold text-xl mb-3">
Personal Information
</h3>

<p>
<strong>Email:</strong>
{" "}
{selectedApplicant.email}
</p>

<p>
<strong>Phone:</strong>
{" "}
{selectedApplicant.phone}
</p>

<p>
<strong>City:</strong>
{" "}
{selectedApplicant.city}
</p>

<p>
<strong>State:</strong>
{" "}
{selectedApplicant.state}
</p>

<p>
<strong>Postal Code:</strong>
{" "}
{selectedApplicant.postalCode}
</p>

<p>
<strong>Country:</strong>
{" "}
{selectedApplicant.country}
</p>

<p>
<strong>Address:</strong>
{" "}
{selectedApplicant.address}
</p>

<hr className="my-6" />

<h3 className="font-bold text-xl mb-3">
Government ID
</h3>

<p>
<strong>ID Type:</strong>
{" "}
{selectedApplicant.governmentIdType || "Not Provided"}
</p>


<p>
<strong>Uploaded File:</strong>
{" "}
{selectedApplicant.governmentIdName || "No File"}
</p>


{selectedApplicant.governmentIdFile && (

<div
style={{
marginTop:"15px"
}}
>

<button

onClick={()=>{

window.open(
selectedApplicant.governmentIdFile,
"_blank"
);

}}

className="
bg-green-700
text-white
px-5
py-3
rounded-xl
mr-4
"

>

View ID

</button>



{selectedApplicant.governmentIdFile && (

<button
onClick={() => {

const link =
document.createElement("a");

link.href =
selectedApplicant.governmentIdFile;

link.download =
selectedApplicant.governmentIdName ||
"government-id";

link.click();

}}
className="
bg-green-700
text-white
px-6
py-3
rounded-xl
mt-4
"
>
Download Government ID
</button>

)}

</div>

)}

<hr className="my-6" />

<h3 className="font-bold text-xl mb-3">
Experience
</h3>

<p>
<strong>Employer:</strong>
{" "}
{selectedApplicant.company}
</p>

<p>
<strong>Education:</strong>
{" "}
{selectedApplicant.education}
</p>

<p>
<strong>Years:</strong>
{" "}
{selectedApplicant.years}
</p>

<p>
<strong>Skills:</strong>
{" "}
{selectedApplicant.skills}
</p>

<p>
<strong>Experience:</strong>
{" "}
{selectedApplicant.experienceText}
</p>

<p>
<strong>Resume:</strong>
{" "}
{selectedApplicant.resumeName}
</p>

<hr className="my-6" />

<h3 className="font-bold text-xl mb-3">
Application Questions
</h3>

<p>
<strong>Authorized:</strong>
{" "}
{selectedApplicant.authorized || "-"}
</p>

<p>
<strong>Relocate:</strong>
{" "}
{selectedApplicant.relocate || "-"}
</p>


<h3 className="font-bold text-xl mb-4">
Resume Actions
</h3>

<button
onClick={() => {

if(!selectedApplicant.resumeFile){
window.alert("Resume not found");
return;
}

window.open(
selectedApplicant.resumeFile,
"_blank"
);

}}
className="
bg-green-700
text-white
px-5
py-3
rounded-xl
mr-4
"
>
View CV
</button>


<button
onClick={() => {

if(!selectedApplicant.resumeFile){
window.alert("Resume not found");
return;
}

const link =
document.createElement("a");

link.href =
selectedApplicant.resumeFile;

link.download =
selectedApplicant.resumeName;

link.click();

}}
className="
bg-blue-900
text-white
px-5
py-3
rounded-xl
"
>

Download CV

</button>

</div>


)}

</div>

</div>

</main>

);
}