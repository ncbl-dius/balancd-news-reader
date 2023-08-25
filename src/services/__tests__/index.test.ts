import { handler } from "../index";
import {Context} from "aws-lambda";

describe('Lambda Handler', () => {
    it('should return a 200 status code and "Hello World" message', async () => {
        // Mock the event and context objects
        const mockEvent = {};
        const mockContext = {} as Context;

        // Call the Lambda handler
        const response = await handler(mockEvent, mockContext, () => {});

        // Assert the response
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe(JSON.stringify({ message: 'Hello World' }));
    });
});
