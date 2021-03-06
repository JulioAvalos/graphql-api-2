import { IResolvers } from "@graphql-tools/utils";
import _ from "lodash";
import { database } from "../data/data.store";

const mutation: IResolvers = {
  Mutation: {
    cursoNuevo(__: void, { curso }): any {

      const itemCurso = {
        id: String(database.cursos.length + 1),
        title: curso.title,
        description: curso.description,
        clases: curso.clases,
        time: curso.time,
        level: curso.level,
        logo: curso.logo,
        path: curso.path,
        teacher: curso.teacher,
        reviews: [],
      };

      if(!database.cursos.find(item => item.title === itemCurso.title)) {
        database.cursos.push(itemCurso);
        return itemCurso;
      }

      return {
        id: "-1",
        title: `El curso ya existe con este titulo: ${itemCurso.title}`,
        description: "",
        clases: -1,
        time: 0.0,
        level: "TODOS",
        logo: "",
        path: "",
        teacher: "",
        reviews: [],
      };
    },
    modificarCurso(__: void, { curso }) : any {
      const elementoExiste = _.findIndex(database.cursos, (value) => value.id === curso.id);

      if(elementoExiste > -1 ) {
        const valoraciones = database.cursos[elementoExiste].reviews;
        curso.reviews = valoraciones;
        database.cursos[elementoExiste] = curso;
        return curso;
      }

      return {
        id: "-1",
        title: `El curso no existe en la base de datos`,
        description: "",
        clases: -1,
        time: 0.0,
        level: "TODOS",
        logo: "",
        path: "",
        teacher: "",
        reviews: [],
      };
    },
    eliminarCurso(__: void, { id }) : any {
      const borrarCurso = _.remove(database.cursos, (curso) => curso.id === id);

      if(borrarCurso[0] === undefined) {
        return {
          id: "-1",
          title: `El curso no se puede borrar porque no se ha encontraro ningun curso con ese ID`,
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
      return borrarCurso[0];
    }
  },
};

export default mutation;
