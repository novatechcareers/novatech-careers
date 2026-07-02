"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminLogin(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login = async () => {

const { data, error } = await supabase
.from("admins")
.select("*")
.eq("email", email)
.eq("password", password)
.single();

if(error || !data){

alert("Invalid Admin Credentials");

return;

}

sessionStorage.setItem(
"isAdmin",
"true"
);

window.location.href =
"/admin-dashboard";

};

return(

<div
style={{

minHeight:"100vh",

display:"flex",

justifyContent:"center",

alignItems:"center",

background:"#000"

}}
>

<div
style={{

width:"420px",

padding:"40px",

background:"#111",

border:"1px solid #333",

borderRadius:"20px",

color:"white"

}}
>

<h1
style={{

marginBottom:"25px"

}}
>

Admin Login

</h1>

<input

placeholder="Email"

value={email}

onChange={(e)=>

setEmail(
e.target.value
)

}

style={{

width:"100%",

padding:"14px",

marginBottom:"15px",

background:"#222",

color:"white",

border:"1px solid #444",

borderRadius:"10px"

}}

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>

setPassword(
e.target.value
)

}

style={{

width:"100%",

padding:"14px",

marginBottom:"20px",

background:"#222",

color:"white",

border:"1px solid #444",

borderRadius:"10px"

}}

/>

<button

onClick={login}

style={{

width:"100%",

padding:"14px",

background:"white",

color:"black",

border:"none",

borderRadius:"10px",

cursor:"pointer"

}}

>

Login

</button>

</div>

</div>

)
 }