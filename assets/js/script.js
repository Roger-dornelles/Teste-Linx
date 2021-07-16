
 async function products (){
    let url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`
    let req = await fetch(url);
    let json = await req.json();
    console.log(json.products);

    assembleList(json.products);
}
products();
function assembleList(list) {
    
    let card = document.querySelector('.card');
    card.cloneNode(true);
    for(let i in list) {
        card.querySelector('#description').innerHTML = list[i].description;
        card.querySelector('img').src = list[i].image;
        card.querySelector('#name').innerHTML= list[i].name;
        card.querySelector('#oldPrice').innerHTML = `de R$: ${list[i].oldPrice.toFixed(2)}`;
        card.querySelector('#price').innerHTML =`Por R$ ${list[i].price.toFixed(2)}`;
        card.querySelector('#division').innerHTML = `ou 2X de ${(list[i].price / 2).toFixed(2)}`;

        console.log('DESC : ',list[i])


    }
    document.querySelector('.container').append(card);


}



// (compartilhe a novidade) 
// validação de campo email  ( SECTION SHARE-INFO )
function validator(){
   
    let input = document.querySelector('#email').value;
    if(input.value !== ''){
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
        if(!regex.test(input)){
            document.querySelector('.warning').style.display="flex";

            setTimeout(()=>{
                document.querySelector('.warning').style.display="none";
            },1750);
        }
        
    }
    console.log("Input",input)
};

