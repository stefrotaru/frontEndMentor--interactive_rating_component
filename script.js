const submitButton = document.getElementById('submitBtn');
const ratingContainer = document.getElementById('ratingComp');
const thanksContainer = document.getElementById('thanksComp');
const ratingCounter = document.getElementById('ratingCounter');
const ratingCounterResult = document.getElementById('counterRes');
const ratingLabels = document.querySelectorAll('.rating__label');

const getRating = (e) => {
    let target = e.target;
    ratingLabels.forEach(function(ratingLabel) {
        ratingLabel.classList.remove('active')
    });
    target.classList.add('active');
    ratingCounterResult.innerText = target.innerText;
};
ratingLabels.forEach(function(ratingLabel) {
    ratingLabel.addEventListener('click', getRating)
});

const showThanksComponent = () => {
    ratingContainer.classList.add("hide");
    thanksContainer.classList.add("show");
};
submitButton.addEventListener('click', showThanksComponent);