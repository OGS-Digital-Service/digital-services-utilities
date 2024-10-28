const feedbackText = document.getElementById('nysds-feedback-helpful');
const feedbackArea = document.getElementById('nysds-feedback-options-area');
const feedbackLink = document.getElementsByClassName('nysds-feedback-link');
const linkArr = Array.from(feedbackLink);


var referrerURL = window.location;
    console.log(referrerURL)

for (let i = 0; i < linkArr.length; i++) {
    linkArr[i].addEventListener("click", feedbackChange) // change area on click
        function feedbackChange () {
            feedbackArea.setAttribute("style", "display:none;");
            feedbackText.innerText = "Thank you for your feedback!"
        }
}

document.addEventListener('DOMContentLoaded', function() {
    const feedback = document.getElementById('nysds-feedback-id');
    if (feedback) {
        const container = feedback.closest(".o-wysiwyg");
        container.style.maxWidth = '100%';
        container.style.padding = "0px";
    }
    else {
        return;
    }
    

})