import { SITE_VERSION } from "app/config";
import { NextApiRequest, NextApiResponse } from "next";

export type VersionData = {
  version: string;
};

export default (req: NextApiRequest, res: NextApiResponse<VersionData>) => {
  res.status(200).json({ version: SITE_VERSION });
};
