import { z } from "zod";

const registerUserFormSchema = z.object ({
    nome:z.string()
    .nonempty({message:"Insira seu nome de usuario"})
    .max(50, "Seu nome de usuario deve conter no máximo 50 caracteres!"),

    email:z.string()
    .nonempty({message:"Insira seu email!"})
    .email("Email invalido!"),

    senha:z.string()
    .nonempty({message:"Insira sua senha!"})
    .min(8, "A senha deve conter no mínimo 8 caracteres!")
});

export {registerUserFormSchema};