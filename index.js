function updateSkill (id, number) {
    document.querySelector(id + " .skill__value").textContent = `${number} / 100`
    document.querySelector(id + " .skill__progress").style.width = number + "%"
}

const html = Number(prompt("Zadej svojí úroveň dovedností v HTML jako číslo mezi 0-100: "))
const css = Number(prompt("Zadej svojí úroveň dovedností v CSS jako číslo mezi 0-100: "))
const js = Number(prompt("Zadej svojí úroveň dovedností v JavaScriptu jako číslo mezi 0-100: "))

console.log('funguju!');

if (html >= 0 && html <= 100 && css >= 0 && css <= 100 && js >= 0 && js <= 100) {
    updateSkill("#skill1", html)
    updateSkill("#skill2", css)
    updateSkill("#skill3", js)
} else {
    document.body.innerHTML = "<h1>Zadané neplatné hodnoty</h1>"
}