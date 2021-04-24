import React from "react";
import Link from "next/link";

import { User } from "../../shared/models/user";

type Props = {
  data: User;
};

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}, {data.email}
    </a>
  </Link>
);

export default ListItem;
