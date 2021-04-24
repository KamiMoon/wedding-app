import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../server/data/mongo/dbConnect";
import User from "../../../server/data/mongo/models/User";
// import { sampleUserData } from "../../../server/data/sample-data";

// const handler = (_req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     if (!Array.isArray(sampleUserData)) {
//       throw new Error("Cannot find user data");
//     }

//     res.status(200).json(sampleUserData);
//   } catch (err) {
//     res.status(500).json({ statusCode: 500, message: err.message });
//   }
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const users = await User.find({}); /* find all */
        res.status(200).json({ success: true, data: users });
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
