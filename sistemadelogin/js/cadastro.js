document.querySelector('#cadastro').addEventListener('click', (w)=>{
    w.preventDefault();
    let email = document.querySelector('#login').value;
    let senha = document.querySelector('#senha').value;

    salvar(email, senha);
});

function salvar(e, s){

    let db = JSON.parse(localStorage.getItem('usuarios') || '[]');

    let usuario = {
        Id: db.length + 1,
        login: e, 
        senha: s
    }
    db.push(usuario);
    localStorage.setItem('usuario', JSON.stringify(db));
    location.href = 'index.html';
}