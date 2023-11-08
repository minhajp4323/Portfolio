function sendMail() {
    var params ={
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_x79uhrc";
    const templateID= "template_w8ql1yq";

    emailjs
    .send(serviceID,templateID,params)
    .then(
        res=>{
            document.getElementById("name").value ="";
            document.getElementById("email").value ="";
            document.getElementById("message").value ="";
            console.log(res);
            alert("Your message send succesfully");
    })
    .catch((err) => console.log(err));
}
