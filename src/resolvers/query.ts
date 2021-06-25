import { IResolvers } from "@graphql-tools/utils";

const query: IResolvers = {
    Query: {
        estudiantes(): string {
            return `lista de estudiantes`;
        }
    }
};

export default query;