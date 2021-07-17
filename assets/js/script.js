// requisição inicial a Api
 async function products (){
    let url =  new URL(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`)
    let req = await fetch(url);
    let json = await req.json();
    assembleList(json);

}

products();
function assembleList(lista) {

    let list  = lista.products;//receber os produtos
   
    //listar os produtos iniciais
    for(let i in list) {
        let card = document.querySelector('.models .card').cloneNode(true);
        card.querySelector('.description_c').innerHTML = list[i].description;
        card.querySelector('img').src = 'https:'+list[i].image;
        card.querySelector('.name_c').innerHTML= list[i].name;
        card.querySelector('.oldPrice_c').innerHTML = `de R$: ${list[i].oldPrice.toFixed(2)}`;
        card.querySelector('.price_c').innerHTML =`Por R$ ${list[i].price.toFixed(2)}`;
        card.querySelector('.division_c').innerHTML = `ou 2X de ${(list[i].price / 2).toFixed(2)}`;
        
        document.querySelector('.container').append(card);
        
    }
    
    
}

// exibir nova lista 
function next() {

    let number = 1;
    document.getElementById('next').addEventListener('click', async()=>{
        number += 1;

        // pega url inicial e altera os parametros da page
        var url = new URL(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`);
        url.searchParams.set('page', number);

        let f  = await fetch(url);
        let res = await f.json();
        let list = res.products;

        //listar novos produtos
        for(let i in list) {
            let card = document.querySelector('.models .card').cloneNode(true);
            card.querySelector('.description_c').innerHTML = list[i].description;
            card.querySelector('img').src = 'https:'+list[i].image;
            card.querySelector('.name_c').innerHTML= list[i].name;
            card.querySelector('.oldPrice_c').innerHTML = `de R$: ${list[i].oldPrice.toFixed(2)}`;
            card.querySelector('.price_c').innerHTML =`Por R$ ${list[i].price.toFixed(2)}`;
            card.querySelector('.division_c').innerHTML = `ou 2X de ${(list[i].price / 2).toFixed(2)}`;
            
            document.querySelector('.container').append(card);
        
    }
    
    });




}
next()



// (compartilhe a novidade) 
// validação de campo email  ( SECTION SHARE-INFO )
function validator(e){
   e.preventDefault();
    let email = document.querySelector('.email-form').value;
  
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!regex.test(email)){
        document.getElementById('warning').style.display="flex";

        setTimeout(()=>{
            document.getElementById('warning').style.display="none";
        },1750);
    }
        
    
};
