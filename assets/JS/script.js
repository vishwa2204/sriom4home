

// window.addEventListener('scroll', reveal);
var reveals = document.querySelector('.reveal');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;

        var revealtop = reveals[i].getBoundingClientRect().top;

        var revealPoint = 50;

        if (revealtop < windowHeight - revealPoint) {

            let valueDisplay = document.querySelectorAll(".counts");
            let intervel = 1000;

            valueDisplay.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(intervel / endValue);
                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }

                }, duration);
            });

        } else {
            reveals[i].classList.remove('active');
        };



    };
};
const observer = new IntersectionObserver(reveal, options);
observer.observe(reveals);

// <!-- FAQ'S  -->

const buttons = document.querySelectorAll("#button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
})


// Whatsaapp 


function Whatsapp() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('mobile').value;
    var message = document.getElementById('message').value;





    //////////// Format the message content/////////////

    var formattedMessage = (
        " *Name* : " + name + "\n" +
        " *Email* : " + email + "\n" +
        " *Phone Number* : " + number + "\n" +
        " *Message* : " + message);


    // Encode the message for the URL
    var encodedMessage = encodeURIComponent(formattedMessage);

    // Construct the WhatsApp URL

    var url = "https://wa.me/+919080983415?text=" + encodedMessage;


    // Open the WhatsApp URL in a new tab/window
    window.open(url);

}

