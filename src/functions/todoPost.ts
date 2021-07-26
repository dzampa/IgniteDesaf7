import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";
import { v4 as uuidV4 } from "uuid";

interface ITemplate {
    title: string;
    deadline: Date;
}

export const handle: APIGatewayProxyHandler = async (event) => {
    const { title, deadline } = JSON.parse(event.body) as ITemplate;

    const { userid } = event.pathParameters;

    const id =  uuidV4();

    await document.put({
        TableName: "todostest",
        Item: {
            id,
            userid,
            title,
            done: false,
            deadline
        }
    }).promise();
    
    return {
        statusCode: 201,
        body: JSON.stringify({
            message: "TODO created!"
        }),
        headers: {
            "Content-type": "application/json",
        },
    };
};