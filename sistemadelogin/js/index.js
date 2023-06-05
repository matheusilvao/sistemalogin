document.querySelector('#logar').addEventListener('click', (e)=>{
    e.preventDefault();
    entrar()
})

function entrar(){
    let usuario = document.querySelector('#login');
    let senha = document.querySelector('#senha');

    let listaUser = [];

    let usuarioValido = {
        login: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('usuarios'));
    listaUser.forEach(elemento=>{
        if(usuario.value === elemento.login && senha.value === elemento.senha){
            usuarioValido = {
                id: item.id,
                login: elemento.login,
                senha: elemento.senha
            }
        }
     }
     
    )}

    if(usuario.value === usuarioValido.login && senha.value === usuarioValido.senha){
        alert('deu certo')
        saveSession.senha(usuarioValido.id);
        window.location.href = 'recados.html'

    }else{
        alert('deu errado')
    }
    
    function saveSession(data){
        if(saveSession){

        }
        sessionStorage.setItem("logado", JSON.stringify(data));
    }