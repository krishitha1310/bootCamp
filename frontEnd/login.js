const logBtn = document.getElementById("login-btn")
//console.log(logBtn)
logBtn.addEventListener("click", function () {
    event.preventDefault()
    const emaiL = document.getElementById("email").value
    const passworD = document.getElementById("password").value
    console.log(passworD)
    if (emaiL === '' || passworD === '') {
        alert("please fill all the fields")
        return
    }
    const users = JSON.parse(localStorage.getItem("users"))
    const matchedUser = users.find(function (user) {
        return user.email === emaiL && user.password === passworD
    })
    if (matchedUser) {
        alert("Login successfull")
        window.location.href = "index.html"
    }
    else {
        alert("Incorrect username or password")
    }
})
