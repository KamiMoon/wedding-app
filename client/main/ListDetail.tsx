import { User } from "../../shared/models/user";
import UserService from "../services/UserService";
import React, { useState, useEffect } from "react";

type ListDetailProps = {
  id: string;
};

const ListDetail = (props: ListDetailProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    UserService.get(props.id).then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      {user && (
        <div>
          <h1>Detail for {user.name}</h1>
          <p>ID: {user.id}</p>
          <p>email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default ListDetail;
