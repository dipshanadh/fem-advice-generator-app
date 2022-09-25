const button = document.getElementById("button"),
	id = document.getElementById("id"),
	advice = document.getElementById("advice")

const update = async () => {
	advice.textContent = "Loading advice..."
	id.textContent = "advice"

	const res = await fetch("https://api.adviceslip.com/advice")
	const data = await res.json()

	const { slip } = data

	id.textContent = `advice #${slip.id}`
	advice.innerHTML = `<q>${slip.advice}</q>`
}

button.addEventListener("click", update)
update()
