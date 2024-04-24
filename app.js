const showImageButton = document.getElementById("show-image-button1");
const popupContainer = document.getElementById("popup-container1");
const popupImage = document.getElementById("popup-page");
const closeButton = document.getElementById("close-button");

popupContainer.style.display = "none";
showImageButton.style.display = "block";

showImageButton.addEventListener("click", () => {
  popupContainer.style.display = "block";
  showImageButton.style.display = "none";
});

closeButton.addEventListener("click", () => {
  popupContainer.style.display = "none";
  showImageButton.style.display = "block"; 
});



/*------------------------------progress section-----------------------------*/

// const progress = document.getElementById('progress');
// const previousBtn = document.getElementById('previous');
// const nextBtn = document.getElementById('next');

// let currentStep = 1;
// const totalSteps = 4;

// updateProgress();

// previousBtn.addEventListener('click', () => {
//   if (currentStep > 1) {
//     currentStep--;
//     updateProgress();
//   }
// });

// nextBtn.addEventListener('click', () => {
//   if (currentStep < totalSteps) {
//     currentStep++;
//     updateProgress();
//   }
// });

// function updateProgress() {
//   progress.style.width = `${((currentStep - 1) / (totalSteps - 1)) * 100}%`;
//   progress.textContent = currentStep;
// }
