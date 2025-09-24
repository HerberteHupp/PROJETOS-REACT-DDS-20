import styles from './Formulário.module.css'

import { useForm } from 'react-hook-form'


const formulário = () => {

    const { register, handleSubmit, formState: { errors }, watch, } = useForm()

    // register = cria um objeto para ser enviado depois

    // handleSubmit = função que vai lidar com o envio do formulário

    // watch observa o valor de um input





    //caso o formulário esteja pronto
    const onSubmit = (data) => {
        console.log("Dados preenchidos", data);
    }

    //caso o formulário tenha erros
    const onError = (errors) => {
        console.log("Erros no formulário", errors);
    }



    return (
        <div>
            <h1>Formulário</h1>


            <form className={styles.formulario} onSubmit={handleSubmit(onSubmit, onError)}>
                {/* CAIXINHA DE NOME */}
                <label>

                    <span> Nome:</span>
                    <input type="text" id="nome" placeholder="Nome Completo"  {...register("nome",{
                       required :" O campo nome é obrigado",
                       minLength:{
                        value:2,
                        message:"o mínimo de caracteres é 2"
                       },

                       maxLength:{
                        value:8,
                        message: "O máximo de caracteres é 8"
                       },
                      
                      pattern:{
                        value: /^[A-Za-z\s] +$/i,
                        message: " O nome só pode conter letras"
                      } 

                    })} />
                </label>

                {/* <p className={styles.erro}> */}
                    {/* Nome é obrigatório */}

                {/* </p> */}

                {errors.nome &&<p className={styles.erro}> {errors.nome.message}
                    

                 </p>} 


                {/* CAIXINHA DE EMAIL */}

                <label >
                    <span> Email</span>
                <input type="email"
                 nome= "email"
                 placeholder ="Digite seu e-mail"
                 {...register("email,",{
                    required:" O campo e-mail é obrigatório,",
                    pattern:{
                     value: /^[A-Za-z0-9._%+-]+@[A-Za-z0.-]+\.[A-Za-z]{2}$/,
                     message: "E-mail inválido"

                    },
                    validate: (value) => value.includes("@")|| "E-mail é inválido"

                 })}
                
                />

                </label>

                {errors.email && <p class Name={styles.error}>{errors.email.message}</p>}


                 {/* CAIXINHA DE SENHA */}
                 <label >
                      <span> Senha</span>
                      <input 
                      type="password"
                      name =" senha"
                      placeholder="Digite sua senha"
                      {... register("senha"),{
                        required: " O campo senha é obrigatório",
                        pattern: {
                            // value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&][A-Za-Z])
                        }
                      }}
                      
                      />

                 </label>


                {/*BOTÃO PARA ENVIO*/}
                <button type="submit" style={{ backgroundColor: "blue", color: "white", bordercolor: "black" }}>
                    Enviar
                </button>
            </form>

        </div>
    )
}

export default formulário