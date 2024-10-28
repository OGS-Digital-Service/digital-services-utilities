const feedbackText = document.getElementById('nysds-feedback-helpful');
const feedbackArea = document.getElementById('nysds-feedback-options-area');
const feedbackLink = document.getElementsByClassName('nysds-feedback-link');
const linkArr = Array.from(feedbackLink);
const referrerURL = window.location.href;
const thumbsDown = document.getElementById('nysds-feedback-no');
const thumbsUp = document.getElementById('nysds-feedback-yes');
const feedbackForm = "https://forms.ny.gov/s3/Thank-you-for-your-Feedback"
const fragmentUp = "?thumbs=Up?referrerUrl="
const fragmentDown = "?thumbs=Down?referrerUrl="
const urlUp = feedbackForm + fragmentUp + referrerURL
const urlDown = feedbackForm + fragmentDown + referrerURL

for (let i = 0; i < linkArr.length; i++) {
    linkArr[i].addEventListener("click", feedbackChange) // change area on click
        function feedbackChange () {
            feedbackArea.setAttribute("style", "display:none;");
            feedbackText.innerText = "Thank you for your feedback!"
        }
}

function fullPage () {
    var feedbackId = document.getElementById('nysds-feedback-id');
    if (feedbackId) {
        const container = feedbackId.closest(".o-wysiwyg");
        container.style.maxWidth = '100%';
        container.style.padding = "0px";
    }
}    

function replaceUrl () {
    thumbsUp.href = urlUp;
    thumbsDown.href = urlDown;
}

document.addEventListener('DOMContentLoaded', fullPage)
document.addEventListener('DOMContentLoaded', replaceUrl)