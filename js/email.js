// import Swal from 'sweetalert2/dist/sweetalert2.js';
function send(){
    emailjs.send("service_7iaffzl","template_c3usnfw",{
        from_name: `${document.getElementById('your_Name').value} with Mobil Number: ${document.getElementById("MobilInput").value}`,
        to_name: `Eng: Abo Badr `,
        message: document.querySelector('textarea').value,
        email_to: "almstr505@gmail.com",
    }).then(function(res){
        alert("Thanks For Message Me! "+ res.status);
        // Swal("Thanks For Message Me!", "...and here's the text!");
        document.getElementById("your_Name").value = "";
        document.getElementById("MobilInput").value = "";
        document.querySelector('textarea').value = "";        
    }),function(error){
        alert("Failed To Send" + error);

    }
}
document.getElementById("send").addEventListener("click", send);

