
const nav = document.getElementById('navbar');
const burger = document.getElementById('burger');

burger.addEventListener('click', function (){
  console.log('the button clicked')
  nav.classList.toggle('open');
  
})
nav.addEventListener('click', function (){
  console.log('the button clicked')
  nav.classList.toggle('open');
  
})

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  alert(`Thanks, ${name}! Your message was sent successfully.`);
  this.reset();
});
