import Link from "next/link";
import Layout from "../client/components/layout/Layout";

const IndexPage = () => (
  <Layout title="Home">
    <h1>My Wedding App</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <div className="something"></div>
  </Layout>
);

export default IndexPage;
