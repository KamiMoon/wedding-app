import React from "react";
import Link from "next/link";

import { User } from "../../shared/models/User";

type Props = {
  data: User;
};

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.firstName}
    </a>
  </Link>
);

export default ListItem;
