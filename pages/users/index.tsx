import Layout from "../../client/components/layout/Layout";
import List from "../../client/main/List";
import withAuth from "../../client/auth/withAuth";

const UsersListPage = () => {
  const items: any = [];

  return (
    <Layout title="Users List">
      <h1>Users List</h1>
      <List items={items} />
    </Layout>
  );
};

export default withAuth(UsersListPage);
