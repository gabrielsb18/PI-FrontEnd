import { z } from zod

const createUserFormSchema = z.object ({
    email:z.string()
    .nonempty({message:"Insira seu email!"})
    .email("Email invalido!"),

    senha:z.string()
    .nonempty({message:"Insira sua senha!"})
    .min(8, "A senha deve conter no mínimo 8 caracteres!")
});

export {createUserFormSchema};