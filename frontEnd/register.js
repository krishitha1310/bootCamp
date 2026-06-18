const regBtn = document.getElementById("reg-button")
//console.log(regBtn)
regBtn.addEventListener("click", function () {
    event.preventDefault()
    const nAme = document.getElementById("name").value
    const eMail = document.getElementById("email").value
    const pAssword = document.getElementById("password").value
    const rEpassword = document.getElementById("repassword").value
    console.log(nAme)
    console.log(eMail)
    console.log(pAssword)
    console.log(rEpassword)
    if (nAme === '' || eMail === '' || pAssword === '' || rEpassword === '') {
        alert("please fill all the fields")
        return
    }
    if (pAssword !== rEpassword) {
        alert("password mismatch")
        return
    }
    const user = {
        Name: name,
        Email: eMail,
        Password: pAssword
    }
    let users = JSON.parse(localStorage.getItem("users")) || []
    users.push(user)
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users))
    alert("Registration successfull")
    window.location.href = "login.html"
})
