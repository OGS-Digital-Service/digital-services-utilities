const feedbackText = document.getElementById('nysds-feedback-helpful');
const feedbackArea = document.getElementById('nysds-feedback-options-area');
const feedbackLink = document.getElementsByClassName('nysds-feedback-link');
const linkArr = Array.from(feedbackLink);


for (let i = 0; i < linkArr.length; i++) {
    linkArr[i].addEventListener("click", feedbackChange) // change area on click
        function feedbackChange () {
            feedbackArea.setAttribute("style", "display:none;");
            feedbackText.innerText = "Thank you for your feedback!"
        }
}
