
window.onload = function(){

    const names = document.querySelector("#names");
    const link = document.getElementById("link");
    const cost = document.getElementById("cost");
    const description = document.getElementById("description");
    let button = document.querySelector("#clicked");
    const section = document.querySelector("section");

    button.onclick = function()
    {
        //card
        let div = document.createElement("div");
        div.setAttribute("class","card"); 
        div.setAttribute("id","card");
        section.append(div);

        //image
        let img = document.createElement("img");
        img.setAttribute("src",link.value); 
        img.setAttribute("alt","Imagem inválida"); 
        div.append(img);

        //product name
        let p1 = document.createElement("p");
        p1.setAttribute("class","productName"); 
        p1.append(names.value);
        div.append(p1);

        //product value
        let p2 = document.createElement("p");
        p2.setAttribute("class","productValue"); 
        p2.append("R$"+cost.value);
        div.append(p2);

        //product description
        let p3 = document.createElement("p");
        p3.setAttribute("class","productDescription"); 
        p3.append(description.value);
        div.append(p3);

        //section overflow
        section.style.overflowX = "scroll";

    
    };

}