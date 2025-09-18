import { createTRPCRouter } from "../../trpc";
import { getToken } from "./get-token";

export const farverseRouter = createTRPCRouter({
  getToken,
});
