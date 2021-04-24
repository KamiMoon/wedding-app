import withAuth from "../../client/auth/withAuth";

import { GetStaticProps } from "next";
import { sampleUserData } from "../../server/data/sample-data";
import { User } from "../../shared/models/User";

import Layout from "../../client/components/layout/Layout";
import GuestList from "../../client/wedding/guests/GuestList";

type Props = {
  items: User[];
};

function GuestListPage({ items }: Props) {
  return (
    <Layout title="Guest List">
      <GuestList guests={items} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default withAuth(GuestListPage);
