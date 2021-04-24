import { fetcher } from "./serviceUtils";
import { User } from "../../shared/models/user";

const url = "/api/users";

export default class UserService {
  static list(): Promise<Array<User>> {
    return fetcher(url).then((response) => {
      return response.users;
    });
  }

  static get(id: string): Promise<User> {
    return fetcher(`${url}/${id}`);
  }
}
