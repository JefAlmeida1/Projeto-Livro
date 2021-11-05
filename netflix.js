$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//Funsão para força o usuario preencher todos os dados
alert("Bem vindo ao site Livro!")
function cadastro(){
    let nome1 = document.getElementById('nome')
    let cp = document.getElementById('cpf')
    let mail = document.getElementById('email')
    let pass = document.getElementById('sen')
    let bot = document.getElementById('botao')
    if(nome1.value.length == 0 || cp.value.length == 0 || mail.value.length == 0 || pass.value.length == 0){

        window.alert('Falta dados para serem preenchidos. Por favor, complete o formulário!')

    }else{
        window.alert('Cadastrado com sucesso!')
        
    }

}
//tentativa para trocar imagem de fundo ao clicar no livro.
function troca(){
    var img = document.getElementsByClassName('box-livro')
    var img_src = img.src
    var img_idx = imagem.indexOf(img_src)
    img.src = imagem[img.idx == imagem.length - 1 ? 0 : img_idx + 1]
}

