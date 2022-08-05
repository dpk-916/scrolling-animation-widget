const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()


function checkBoxes() {
	const triggerBottom = window.innerHeight / 6 * 5

	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top

		if (boxTop < triggerBottom && boxTop > -box.offsetHeight/2){
			box.classList.add('show')
		} else{
			box.classList.remove('show')
		}
	})
}