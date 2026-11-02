function showError(element, message) {
    if (element) {
        element.textContent = message;
    }
}

function clearError(element) {
    if (element) {
        element.textContent = "";
    }
}

var accordions = document.querySelectorAll(".accordion");

for (var i = 0; i < accordions.length; i++) {

    accordions[i].addEventListener("click", function () {

        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

    });

}

var galleryImages = document.querySelectorAll(".gallery-image");

var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightboxImage");
var closeLightbox = document.getElementById("closeLightbox");

for (var i = 0; i < galleryImages.length; i++) {

    galleryImages[i].addEventListener("click", function () {

        if (lightbox && lightboxImage) {

            lightboxImage.src = this.src;
            lightboxImage.alt = this.alt;

            lightbox.style.display = "flex";

        }

    });

}

if (closeLightbox && lightbox) {

    closeLightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

}

var searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        var searchText = searchInput.value.toLowerCase();

        var mediaContent = document.querySelectorAll(
            "h2, h3, h4, p"
        );

        for (var i = 0; i < mediaContent.length; i++) {

            var content = mediaContent[i].textContent.toLowerCase();

            if (content.indexOf(searchText) > -1) {
                mediaContent[i].style.display = "";
            } else {
                mediaContent[i].style.display = "none";
            }

        }

    });

}

var enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        var name = document.getElementById("enquiryName");
        var email = document.getElementById("enquiryEmail");
        var type = document.getElementById("enquiryType");
        var message = document.getElementById("enquiryMessage");

        var nameError = document.getElementById("enquiryNameError");
        var emailError = document.getElementById("enquiryEmailError");
        var typeError = document.getElementById("enquiryTypeError");
        var messageError = document.getElementById("enquiryMessageError");

        var response = document.getElementById("enquiryResponse");

        var isValid = true;

        clearError(nameError);
        clearError(emailError);
        clearError(typeError);
        clearError(messageError);

        if (name.value.trim().length < 3) {

            showError(nameError, "Please enter a name with at least 3 characters.");
            isValid = false;

        }

        if (email.value.trim() === "" || !email.checkValidity()) {

            showError(emailError, "Please enter a valid email address.");
            isValid = false;

        }

        if (type.value === "") {

            showError(typeError, "Please select an enquiry type.");
            isValid = false;

        }

        if (message.value.trim().length < 10) {

            showError(messageError, "Your enquiry must contain at least 10 characters.");
            isValid = false;

        }

        if (isValid) {

            var enquiryResponse = "Thank you, " + name.value +
                ". Your " + type.value +
                " enquiry has passed validation. The Xperiment Digital Archive is an informational website, so this form does not confirm paid services, prices or availability. You can use the Contact page for further communication.";

            response.textContent = enquiryResponse;

            enquiryForm.reset();

        }

    });

}


var contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        var name = document.getElementById("contactName");
        var email = document.getElementById("contactEmail");
        var type = document.getElementById("messageType");
        var message = document.getElementById("contactMessage");

        var nameError = document.getElementById("contactNameError");
        var emailError = document.getElementById("contactEmailError");
        var typeError = document.getElementById("messageTypeError");
        var messageError = document.getElementById("contactMessageError");

        var isValid = true;

        clearError(nameError);
        clearError(emailError);
        clearError(typeError);
        clearError(messageError);

        if (name.value.trim().length < 3) {

            showError(nameError, "Please enter your full name.");
            isValid = false;

        }

        if (email.value.trim() === "" || !email.checkValidity()) {

            showError(emailError, "Please enter a valid email address.");
            isValid = false;

        }

        if (type.value === "") {

            showError(typeError, "Please select a message type.");
            isValid = false;

        }

        if (message.value.trim().length < 10) {

            showError(messageError, "Your message must contain at least 10 characters.");
            isValid = false;

        }

        if (isValid) {

            var recipient = "obakengmotloutsi14@gmail.com";

            var subject = encodeURIComponent(type.value);

            var body = encodeURIComponent(
                "Name: " + name.value +
                "\nEmail: " + email.value +
                "\nMessage Type: " + type.value +
                "\n\nMessage: " + message.value
            );

            window.location.href =
                "mailto:" + recipient +
                "?subject=" + subject +
                "&body=" + body;

        }

    });

}

console.log("Xperiment Digital Archive JavaScript loaded successfully.");