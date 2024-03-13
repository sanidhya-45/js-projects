
let qrInput= document.getElementById("qr-input")
let qrImage= document.getElementById("qr-image")


function generate()
{
   console.log("Hello")
   qrImage.src=  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value

}