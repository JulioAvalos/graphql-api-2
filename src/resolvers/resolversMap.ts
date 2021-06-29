import { IResolvers } from "@graphql-tools/utils";
import query from "./query";
import type from "./type";

const resolversMap: IResolvers = {
    ...query,
    ...type
};

export default resolversMap;