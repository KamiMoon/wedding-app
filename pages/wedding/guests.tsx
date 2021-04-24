import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import AccessDenied from "../../client/auth/access-denied";

import { GetStaticProps } from "next";
import { sampleUserData } from "../../server/data/sample-data";
import { User } from "../../shared/models/User";

import Layout from "../../client/components/layout/Layout";
import GuestList from "../../client/wedding/guests/GuestList";

type Props = {
  items: User[];
};

function GuestListPage({ items }: Props) {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  //TODO: errors in console with react-dom.development.js?61bb:67 Warning: Did not expect server HTML to contain a <div> in <div>.
  //if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

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

export default GuestListPage;
