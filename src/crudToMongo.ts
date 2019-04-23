import {Pipe} from "zeropipe/dist/src/index";
import {
    AGGREGATE, CREATE, LOAD_BY_ID, LOAD_BY_QUERY, REMOVE_BY_ID,
    REMOVE_BY_qUERY, UPDATE_BY_ID, UPDATE_BY_QUERY
} from "actions";
import {
    loadById, loadByQuery, updateById, updateByQuery,
    removeById, removeByQuery, create, aggregate
} from "handlers/index";

export default new Pipe({
    name: "crud-to-mongo",
    executorMap: {
        [LOAD_BY_ID]: loadById,
        [LOAD_BY_QUERY]: loadByQuery,
        [UPDATE_BY_ID]: updateById,
        [UPDATE_BY_QUERY]: updateByQuery,
        [REMOVE_BY_ID]: removeById,
        [REMOVE_BY_qUERY]: removeByQuery,
        [CREATE]: create,
        [AGGREGATE]: aggregate,
    },
});
