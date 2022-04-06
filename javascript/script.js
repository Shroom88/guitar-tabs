function progress(){
	alert("Page still in progress.");
	console.log("Hello World.");
	// Ello
}

// Contacts Submit Form
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
	alert("Form sent!");
  });