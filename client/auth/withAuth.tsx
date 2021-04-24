import { useSession } from "next-auth/client";
import AccessDenied from "./AccessDenied";
import Layout from "../../client/components/layout/Layout";

function withAuth(WrappedComponent: any) {
  return (props: any) => {
    const [session, loading] = useSession();

    if (!session) {
      return (
        <Layout>
          <AccessDenied />
        </Layout>
      );
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
