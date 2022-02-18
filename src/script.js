document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault();
    console.log("loaded!!")
    let parents , child , i ,Datecopy
parents= document.querySelector("section")
console.log(parents.childNodes[1])
for(i=0; i<parents.childNodes.length; i++){
    /*local*/
    console.log(parents.childNodes[i])

}
    /* dans le dom comment creer un élément html */
    /*for(data of child){
        el.innerHTML +=`<li>${data}</li>`;
       }*/
       for(index in child){
        let value = child[index]
     el.innerHTML +=`<li>${index} : ${value}</li>`;
    }
/* ajouter la date dans footer par le DOM */
Datecopy = new Date ()
console.log(Datecopy)
})