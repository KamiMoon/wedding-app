import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../server/data/mongo/dbConnect";
import User from "../../../server/data/mongo/models/User";
import { getSession } from "next-auth/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: "Not Authorized" });
  }

  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const user = await User.findById(id);
        if (!user) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
