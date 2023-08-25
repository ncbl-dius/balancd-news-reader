import {handler} from "./index";
import {Context} from "aws-lambda";

(async () => {
    const mockEvent = {};
    const mockContext = {} as Context;

    await handler({}, mockContext, () => {})
})().then(() => console.log('done'));