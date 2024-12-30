const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.button');
for(let i = 0; i<buttons.length; i++ ){
    buttons[i].addEventListener('click', (e) =>{
        let data = e.target.getAttribute('data');
        console.log(data);

        switch (data){
            case "C":
                result.innerText = "";
                break;

            case "=":
                try{
                    result.innerText = eval(result.innerText);
                }catch{
                    result.innerText = "Error";
                }
                break;
            case "back":
                if(result.innerText){
                    result.innerText = result.innerText.slice(0,-1)
                }
                break;
            case "+/-":
                result.innerText = -result.innerText;
                break;
            case "%":
                if(result.innerText) {
                    result.innerText /= 100;
                }

                break;
            default:
                result.innerText += data;
        }

    })
}