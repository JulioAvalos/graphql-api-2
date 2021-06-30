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
  },
};

export default mutation;
