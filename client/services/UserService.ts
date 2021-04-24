import { fetcher } from "./serviceUtils";
import { User } from "../../shared/models/user";

const url = "/api/users";

export default class UserService {
  list(): Promise<Array<User>> {
    return fetcher(url).then((response) => {
      return response.users;
    });
  }
}
