import { User } from "../../shared/models/user";

type ListDetailProps = {
  item: User;
};

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.firstName}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
