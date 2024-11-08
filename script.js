document.getElementById('contact-form').addEventListener('submit'), function(event) {
    Event.preventDefault();
    const name = document.getElementById('name').value;
    const email  = document.getElementById('email').value;
    alert('Спасибо {name} Ваш email {email} был успешно отправлен');
    this.reset();

}
