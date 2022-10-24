
// send email 

function showAlert(){
    alert("Thank you for contacting us!\nWe aim to reply to all enquiries within 2 working days.");
  }
  
  function sendMail(contactForm) {
    emailjs.send("service_yi9bw89","template_udmxaai", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_tel": contactForm.tel.value,
        "from_product": contactForm.product.value,
        "from_quantity": contactForm.quantity.value,
        "from_port": contactForm.port.value,
        "from_price": contactForm.price.value,
        "from_term": contactForm.term.value,
        "message": contactForm.info.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            showAlert();
            document.getElementById("fromName").value = '';
                      document.getElementById("fromEmail").value = '';
                      document.getElementById("fromProduct").value = '';
                      document.getElementById("fromTel").value = ''; 
                      document.getElementById("fromQuantity").value = '';
                      document.getElementById("fromPort").value = '';
                      document.getElementById("fromPrice").value = '';
                      document.getElementById("fromTerm").value = '';
                      document.getElementById("info").value = '';





        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
  }