import { NextApiRequest, NextApiResponse } from "next";
// Using axios because I like it and it's not that bad :)
import axios from "axios";

// Create the handler below
const charactersHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // start try/catch for the axios call to the REST api
  try {
    const response = axios.get<LickApi.ICharacterCore[]>(
      "https://rickandmortyapi.com/api/character/?name=rick&status=alive"
    );

    response.then(data => {
      // If we get nothing that represents a 200 code then throw it back
      if (data.status !== 200) {
        res.status(404).send({
          msg: "oops no characters found "
        });
      } else {
        // Nice, if it is okay then we set the response status to
        // 200 okay and parse the json data back to the f/e
        res.status(200).json(data.data);
      }
    });
  } catch (error) {
    // Something has gone horribly wrong, lets not panic
    return res.status(400).json({
      error: `There was an error somewhere`
    });
  }
};

export default charactersHandler;
