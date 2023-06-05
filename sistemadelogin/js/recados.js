const form = document.querySelector('#infos-prod');
const tabela = document.querySelector('tbody');

const atualizarLocalStorage = (produtos) => {localStorage.setItem('produtos', JSON.stringify(produtos))}

const recuperarLocalStorage = () => {const produtos = JSON.parse(localStorage.getItem('produtos')) || []}

const salvarProduto = (e) =>{}
e.preventDefautlt()
const nome = form.nome.value;
const preco = Number(form.nome.value)
const prime = form.prime.checked;

const produtos = recuperarLocalStorage();
produtos.push({id:produtos.length +1, nome,preco, prime})
atualizarLocalStorage(produtos);

form.addEventListener('submit', salvarProduto)
