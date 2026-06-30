const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const data={

name:document.getElementById("name").value.trim(),

email:document.getElementById("email").value.trim(),

mobile:document.getElementById("mobile").value.trim(),

school:document.getElementById("school").value.trim(),

className:document.getElementById("class").value,

gender:document.getElementById("gender").value,

dob:document.getElementById("dob").value,

olympiad:document.getElementById("olympiad").value,

olympiadName:document.getElementById("olympiadName").value.trim(),

trxid:document.getElementById("trxid").value.trim(),

comment:document.getElementById("comment").value.trim()

};

if(data.name===""){

alert("নাম লিখুন");

return;

}

if(data.email===""){

alert("ইমেইল লিখুন");

return;

}

if(data.mobile===""){

alert("মোবাইল নম্বর লিখুন");

return;

}

if(data.school===""){

alert("বিদ্যালয়ের নাম লিখুন");

return;

}

if(data.trxid===""){

alert("bKash Transaction ID লিখুন");

return;

}

localStorage.setItem("registration",JSON.stringify(data));

window.location.href="success.html";

});
