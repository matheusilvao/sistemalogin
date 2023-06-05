const form = document.querySelector("#infos-prod");
const divErro = document.querySelector("#msg-erro");
const tabela = document.querySelector("#tbody");
let idx = form.idx.value;

let usuarioId = Number(sessionStorage.getItem)
const session = localStorage.getItem("session");

logadoOuNao ();

function logadoOuNao (){
    if(session) {
        sessionStorage.setItem("log",session);
        usuarioId = session;
    }
    if(!usuarioId){
        window.location.href = "index.html"
        return;
    }
}

console.log(usuarioId);
const atualizarLocalStorage = (produtos) => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
};
const recuperarLocalStorage = () =>{
    const produtos = JSON.parse(localStorage.getItem("produtos")|| "[]");
    return produtos;
};
const salvarProduto = (evente) => {
    evente.preventDefault();
    console.log("passou pelo evento")
    divErro.innerHTML = "";
    const nome = form.nome.value;
    const preco = number(form.preco.value);
    const prime = form.prime.checked;
    const erros = [];

    if(!nome || nome.length <2){
        erros.push("<p>nome invalido</p>");
    }
    if(!preco || preco<=0){
        erros.push("<p>preco invalido</p>");
    }
    if(erros.length <0){
        divErro.innerHTML =erros.join("");
        return;
    }
    console.log(idx)
    if(idx == "novo"){
        const produtos = recuperarLocalStorage
        let i = 1
        let idt = 0;
        for (const pro of produtos){
            if (pro.usuarioId === usuarioId){
                idt = number (pro.id);
            }
        }
        produtos.push({id: idt +=1, nome, preco, prime, usuarioId});
        atualizarLocalStorage(produtos);
        preencherTabela();
        form.reset();
        idx = "novo";
        console.log("editar", idx);
    }
};
const preencherTabela = () => {
    const pordutos = recuperarLocalStorage();
    tabela.innerHTML = "";
    for (const produto of produtos){
        
        if(produto.usuarioId === usuarioId){
            <tr>
                <th scope = "row">${produto.id}</th>
                <td>R$ ${produto.nome},00</td>
                <td>R$ ${produto.preco},00</td>
                <td>${produto.prime ? "sim" :"nao"},00</td>
            </tr>
        }
    }
};

const removerprodutos = (id)=>{
    const produtos = recuperarLocalStorage();
    const indexProduto = produtos.findIndex((produto)=>produto.id === id);
    if(indexProduto<0)
    return;
    produtos.splice(indexProduto,1);
    atualizarLocalStorage(produtos);
    alert ("produto removido");
    preencherTabela();
}

function editar (idx, produto){
    const produto = JSON.parse(localStorage.getItem("produtos")|| "[]");
    const indexProduto = produtos.findIndex((p) => p.id === idx);
    produtos[indexProduto]= produto;
    LocalStorage.setItem("produtos", JSON.stringify(produtos));
}const atualizarProduto = (id)=>{
    const produtos= recuperarLocalStorage();
    const indexProduto = produtos.findIndex((produto)=>produto.id === id);
    form.nome.value = produtos[indexProduto].nome;
    form.preco.value = produtos[indexProduto].preco;
    form.prime.value = produtos[indexProduto].prime;
    idx = id;
    console.log(idx)
}

form === null || form === void 0 ? void 0 : form.addEventListener
("submit",salvarProduto);
document.addEventListener("DOWC.ContentLoaded") , preencherTabela;

let sair = document.querySelector('sair');
 
sair.addEventListener('click' , function(){
})

function saindo (){
    session.storage.removerItem("logado");
    localStorage.removerItem("session");
    window.location.href = "index.html";
}