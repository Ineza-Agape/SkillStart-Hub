import { Handler } from "@netlify/functions";

const handler: Handler = async (event: any, context: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Backend running on Netlify Functions!" }),
  };
};

export { handler };