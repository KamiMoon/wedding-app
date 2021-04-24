import Layout from "../../client/components/layout/Layout";
import List from "../../client/main/List";
import withAuth from "../../client/auth/withAuth";

const UsersListPage = () => {
  return (
    <Layout title="Users List">
      <h1>Users List</h1>
      <List />
    </Layout>
  );
};

export default withAuth(UsersListPage);
