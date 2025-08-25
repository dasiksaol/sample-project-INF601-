document.addEventListener("DOMContentLoaded",function(){
    function createParagraph(){
        let para = document.createElement("p");
        para.textContent = "You clicked me hehe";
        document.body.appendChild(para);
    }

    const buttons = document.querySelector("button");

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", createParagraph)
}

});

