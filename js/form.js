//  Nesse formulario quero treinar a classe Construtora

class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.form');

        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Formulário Enviado')
            this.formulario.submit();
        }

    }

    camposSaoValidos() {
        let valida = true;
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
          }
          for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
      
            if(!campo.value) {
              this.criaErro(campo, `Campo ${label} nao pode estar em branco.`);
              valida = false;
            }
            
            if(campo.classList.contains('usuario')) {
              if(!this.validaUsuario(campo)) valida = false;
            }
          }
          return valida;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true
        if(usuario.length < 3 || usuario.length > 12) {
          this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.')
            valid = false;
        }
        if(!usuario.match(/^[a-zA-z0-9]+$/g)) {
          this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números')
            valid = false;
        }
        return valid;
      }
    
      senhasSaoValidas() {
        let valida = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
          valida = false;
          this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais')
          this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais');
        }
        if(senha.value.length < 6 || senha.value.length > 12) {
          valida = false;
          this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.')
        }
    
        return valida;
      }


    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();