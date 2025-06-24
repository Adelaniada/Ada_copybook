alert("Привет! Это моя тетрадь для отработки функций и прочих прикольностей.");


//1

let inputText = document.querySelector(".input-text")
let send = document.querySelector(".send")

document.getElementById('send-id').addEventListener('click', 
    function() {
        document.getElementById('txt_1').innerHTML = myFunction(inputText.value)
    })

    function myFunction(a) {
        if (a > 0) {a = true}
        else {a = false}
        return a
    }
