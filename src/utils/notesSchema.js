import { z } from "zod";

const createNoteschema = z.object({
	titulo: z
		.string()
		.nonempty({ message: "Insira o título" }),

	descricao: z
		.string()
		.nonempty({ message: "Insira a descrição" })
});

export { createNoteschema };
