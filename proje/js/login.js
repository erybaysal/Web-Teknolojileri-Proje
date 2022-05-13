function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var pattern = ".+@hotmail\.com";

    if (username.match(pattern)) {
        if (username == "b201210351@hotmail.com" && password == "1234") {

            window.open("giris.html", "_self");
            return false;

        } else {
            alert("yetkisiz kullanıcı")
        }
    } else {
        alert("lütfen gecerli bir amail girin");
    }
}