export default function validateLoginData(email, password) {

    const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    const regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

    let result = regexEmail.test(email)
    if (result) {
        result = regexPassword.test(password)
        if (result) {
            alert("Welcome to The Jungle")
        }

        else {
            alert("tolong masukan password sesuai ketentuan")
        }
    }

    else {
        alert("tolong masukan email yang valid")
    }
}