import { z } from "zod";

const updateUserSchema = z.object ({
    nome:z.string()
    .nonempty({message:"Insira seu nome de usuario"})
    .max(50, "Seu nome de usuario deve conter no máximo 50 caracteres!"),

    email:z.string()
    .nonempty({message:"Insira seu email!"})
    .email("Email invalido!"),

    senha:z.string().optional(),
    senhaAntiga:z.string().optional()

}).refine(
    (data) => {
      if (data.senha) {
        return !!data.senhaAntiga;
      }
      return true;
    },

    {
      message: "Insira sua senha antiga",
      path: ["senhaAntiga"],
    }
);;

export {updateUserSchema};