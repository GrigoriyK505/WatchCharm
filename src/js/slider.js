document.addEventListener("click", documentActions);

function documentActions(event) {
	const targetElement = event.target;

	// Click on small image
	if (targetElement.closest(".sale-item")) {
		const smallImg = targetElement.closest(".sale-item");
		const numberSmallImg = smallImg.getAttribute("data-smallimage");
		showBigImage(numberSmallImg);

		// Click outside the slider
		document.addEventListener("click", showOriginalImage);
		function showOriginalImage(event) {
			const clickOnSlider = event.target.closest(".sale-img-wrapper");
			if (!clickOnSlider) {
				showBigImage();
				document.removeEventListener("click", showOriginalImage);
			}
		}

		// Show big image
		function showBigImage(curentImg = "original") {
			const bidImgs = document.querySelectorAll('.sale-main-picture');
			bidImgs.forEach(bigImg => {
				if (!bigImg.classList.contains("_hidden")) {
					bigImg.classList.add("_hidden");
				}
			});
			const bigImg = document.querySelector(`[data-bigimage="${curentImg}"]`);
			bigImg.classList.remove("_hidden");
		}
	}
}