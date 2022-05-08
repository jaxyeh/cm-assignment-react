import maybeReturn from "../common/maybeReturn";
import userMock from "./user-mock";
import { User } from "./types";

const getUser = (): Promise<User> => maybeReturn(() => userMock);

export default getUser;
