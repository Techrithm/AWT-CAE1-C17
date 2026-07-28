const technicalEvents = [
    "Hackathon",
    "Web Development Workshop",
    "Coding Contest",
    "App Development Challenge"
];

// Display array using DOM
const list = document.getElementById("eventList");

technicalEvents.forEach(function(item){
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});

// Function for participation level
function participationLevel(count){

    if(count >= 10){
        return "Excellent Participation";
    }
    else if(count >= 5){
        return "Good Participation";
    }
    else{
        return "Needs More Participation";
    }

}

// Form Validation
document.getElementById("eventForm").addEventListener("submit",function(e){

    e.preventDefault();

    let name=document.getElementById("name").value.trim();
    let roll=document.getElementById("roll").value.trim();
    let event=document.getElementById("event").value.trim();
    let age=document.getElementById("age").value;
    let attended=document.getElementById("events").value;

    // Name Regex
    let namePattern=/^[A-Za-z ]{3,30}$/;

    if(name=="" || roll=="" || event=="" || age=="" || attended==""){
        alert("Please fill all fields");
        return;
    }

    if(!namePattern.test(name)){
        alert("Enter valid student name");
        return;
    }

    if(age<16 || age>30){
        alert("Age must be between 16 and 30");
        return;
    }

    let message=participationLevel(Number(attended));

    document.getElementById("result").innerHTML=
    "<h3>Registration Successful</h3>"+
    "<p><b>Name:</b> "+name+"</p>"+
    "<p><b>Roll Number:</b> "+roll+"</p>"+
    "<p><b>Event:</b> "+event+"</p>"+
    "<p><b>Participation Level:</b> "+message+"</p>";

});