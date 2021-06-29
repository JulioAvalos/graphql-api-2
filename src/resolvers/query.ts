import { IResolvers } from "@graphql-tools/utils";
import { database } from "../data/data.store";

const query: IResolvers = {
  Query: {
    estudiantes(): any {
      return database.estudiantes;
    },
    estudiante(__: void, { id }): any {
      const resultado = database.estudiantes.find(
        (estudiante) => estudiante.id === id
      );
      if (resultado === undefined) {
        return {
          id: "-1",
          name: `No se ha encontrado el estudiante con el ID ${id}`,
          email: "",
          courses: [],
        };
      }
      return resultado;
    },
    cursos(): any {
      return database.cursos;
    },
  },
};

export default query;
