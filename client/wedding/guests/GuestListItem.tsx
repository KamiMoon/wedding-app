import React from "react";
import Link from "next/link";

import { User } from "../../../shared/models/User";

type Props = {
  guest: User;
};

const ListItem = ({ guest }: Props) => (
  <Link href="/users/[id]" as={`/users/${guest.id}`}>
    <a>
      {guest.id}: {guest.firstName}
    </a>
  </Link>
);

export default ListItem;
