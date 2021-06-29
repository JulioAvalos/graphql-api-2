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
    curso(__: void, { cursoId }): any {
      const resultado = database.cursos.find((curso) => curso.id === cursoId);
      if (resultado === undefined) {
        return {
          id: "-1",
          title: `No se ha encontrado el curso con el ID ${cursoId}`,
          description: "",
          clases: -1,
          time: 0.0,
          level: "TODOS",
          logo: "",
          path: "",
          teacher: "",
          reviews: [],
        };
      }
      return resultado;
    },
  },
};

export default query;
