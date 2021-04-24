import { GetStaticProps, GetStaticPaths } from "next";

import { User } from "../../shared/models/user";
import Layout from "../../client/components/layout/Layout";
import ListDetail from "../../client/main/ListDetail";

type Props = {
  id?: string;
};

const UserDetailPage = ({ id }: Props) => {
  return (
    <Layout title={"User Detail"}>
      <ListDetail id={id} />
    </Layout>
  );
};

export default UserDetailPage;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  return { props: { id } };
};
