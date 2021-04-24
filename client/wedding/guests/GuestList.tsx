import { User } from "../../../shared/models/User";
import GuestListItem from "./GuestListItem";

type Props = {
  guests: User[];
};

const GuestList = ({ guests }: Props) => (
  <ul>
    {guests.map((guest) => (
      <li key={guest.id}>
        <GuestListItem guest={guest}></GuestListItem>
      </li>
    ))}
  </ul>
);

export default GuestList;
