import  page  from "../node_modules/page/page.mjs";

import { getAllFurnitures } from "./serverRequests/getAllFurnitures.js";

page('/', getAllFurnitures);
page.start();