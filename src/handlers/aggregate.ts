import {ActionExecutorResult, ActionForwarder, PipeAction} from "zeropipe/dist/src/types";
import {Observable} from "zeropipe/dist/src";

export default (axtion: PipeAction, forward: ActionForwarder): ActionExecutorResult  => {
    return new Observable();
};
