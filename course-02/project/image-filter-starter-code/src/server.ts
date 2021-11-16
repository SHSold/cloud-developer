require('dotenv').config();
import express, {Request, Response } from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

	// Image URL for testing: https://www.hdwallpaper.nu/wp-content/uploads/2015/02/Funny-Cat-Hidden.jpg
	// filteredimage?image_url=https://www.hdwallpaper.nu/wp-content/uploads/2015/02/Funny-Cat-Hidden.jpg
	
	app.get("/filteredimage", ( req: Request, res: Response ) => {
		// let { image_url }: string = req.query as string;
		let image_url: string = req.query.image_url as string
		// If no address is given return this
		if (!image_url) {
			// I define this as a bad request
			return res.status(400).send("Please specify a valid Image URL.");
		};
		// An address was given ...
		filterImageFromURL(image_url).then(
			function(value) {
				// Send the file
				return res.status(200).sendFile(value);
			})
			.catch(
				// The adress is invalid
				// this image could not be found, so a not found error is raised
				function(error) { return res.status(404).send("The Image URL is invalid!")}
			);
	});
	
  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
	app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
