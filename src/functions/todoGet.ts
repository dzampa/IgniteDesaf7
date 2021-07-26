import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "../utils/dynamodbClient";

export const handle: APIGatewayProxyHandler = async (event) => {

    const { userid } = event.pathParameters;

    const response = await document.scan({
        TableName: "todostest",
        FilterExpression: "userid = :userid",
        ExpressionAttributeValues : {
            ":userid" : userid
        }
    }).promise();

    const userCertificate = response.Items[0];

    if (userCertificate){
        return {
            statusCode: 200,
            body: JSON.stringify(
                response
            ),
        };
    };

    return {
        statusCode: 400,
        body: JSON.stringify({
            message: "Todo is invalid!",
        }),
    };
};