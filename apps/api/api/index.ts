import { handle } from "hono/vercel";
import app from "../src/index.js";

export const config = {
  maxDuration: 60,
};

export default handle(app);
