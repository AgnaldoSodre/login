const img = document.querySelector('.olho-img');
const senha = document.querySelector('.senha');



img.addEventListener("click",function(){
    const type = senha.type === "password" ? "text" : "password"
    senha.type = type;

    const troca = img.src.endsWith("olho1.png") ? "./imagens/olho2.png" : "./imagens/olho1.png"
    img.src = troca;
})


const forget = document.getElementById('forget');
const login = document.getElementById('login');
const logi = document.getElementById('logi');
const criar = document.getElementById('criar')
const index2 = document.querySelector('.index2');
const index1 = document.querySelector('.index');
const cadastro = document.querySelector('.cadastro');


forget.addEventListener('click', function(){
    index1.style.top = ('-50%');
    index2.style.top = ('50%');
})

login.addEventListener('click', function(){
    index1.style.top = ('50%');
    index2.style.top = ('140%');
})

logi.addEventListener('click', function(){
    index1.style.top = ('50%');
    cadastro.style.top = ('-130%');
})

criar.addEventListener('click', function(){
    cadastro.style.top = ('50%');
    index1.style.top = ('140%');
})



const img2 = document.querySelector('.olho-img2');
const senha2 = document.querySelector('.senha2');
const senha3 = document.querySelector('.senha3');



img2.addEventListener("click",function(){
    const type2 = senha2.type === "password" ? "text" : "password"
    senha2.type = type2;
    const type3 = senha3.type === "password" ? "text" : "password"
    senha3.type = type3;

    const troca2 = img2.src.endsWith("olho1.png") ? "./imagens/olho2.png" : "./imagens/olho1.png"
    img2.src = troca2;
})

