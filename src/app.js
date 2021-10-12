const bullseye = document.querySelector(".bullseye")
const menu = document.querySelector(".menu")
const particlesContainer = document.querySelector("#particles-js")
const card = document.querySelector(".card")
const front = document.querySelector(".front")
const back = document.querySelector(".back")

const showmenu = () => {
	menu.classList.add("visible")
	bullseye.classList.add("invisible")
}
const hidemenu = () => {
	menu.classList.remove("visible")
	bullseye.classList.remove("invisible")
}
const flipCard = () => {
	front.classList.toggle('hideFront')
	back.classList.toggle('showBack')
}

bullseye.addEventListener('click', () => { showmenu(); flipCard() })
particlesContainer.addEventListener('click', () => { hidemenu(); flipCard() })

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './particles.json', function () {
	console.log('callback - particles.js config loaded')
})

