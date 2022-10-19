function getYear() {
    var year = new Date().getFullYear()
    document.getElementById("year").innerHTML = `
    ${year}
    `
}
getYear()