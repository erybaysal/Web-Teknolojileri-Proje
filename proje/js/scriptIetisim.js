function validate() {

    var username = document.getElementById("isim").value;
    var tel = document.getElementById("telefon").value;
    var mail = document.getElementById("mail").value;
    var mesaj = document.getElementById("mesaj").value;
    var pattern = ".+@hotmail\.com"


    if (mail.match(pattern)) {

        if (username.length < 1) {
            alert("isim bos bırakılamaz...")

        } else if (tel.length < 1) {
            alert("tel bos bırakılamaz...")

        } else
        if (mail.length < 1) {
            alert("mail bos bırakılamaz...")

        } else if (mesaj.length < 1) {
            alert("mesaj bos bırakılamaz...")

        } else {
            alert("mesajınız alindi.")

            username

        }

    } else {
        alert("lütfen mail adresinizi dogru formatta giriniz...")
    }







}

function formClear() {
    document.getElementById("form").reset();
}