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

  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const users = await User.find({}); /* find all */
        res.status(200).json({ users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // case "POST":
    //   try {
    //     const task = await Task.create(req.body); /* create  */
    //     res.status(201).json({ success: true, data: task });
    //   } catch (error) {
    //     res.status(400).json({ success: false });
    //   }
    //   break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
