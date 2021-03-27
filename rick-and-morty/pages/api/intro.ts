import { NextApiRequest, NextApiResponse } from 'next';

const helloHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const body: LickApi.IIntro = {
    text: "FE Tech test intro API response"
  }
  res.status(200).json(body)
}

export default helloHandler;
