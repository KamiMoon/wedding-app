import ListItem from "./ListItem";
import { User } from "../../shared/models/user";
import UserService from "../services/UserService";
import React, { useState, useEffect } from "react";

const userService = new UserService();

const List = () => {
  const [items, setItems] = useState<Array<User>>([]);

  useEffect(() => {
    console.log("fetching users");
    userService.list().then((users) => {
      console.log("got", users);
      setItems(users);
    });
  }, []);

  return (
    <ul>
      {items &&
        items.map((item) => (
          <li key={item.id}>
            <ListItem data={item} />
          </li>
        ))}
    </ul>
  );
};

export default List;
