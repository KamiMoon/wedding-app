import Link from "next/link";
import Layout from "../client/components/layout/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>My Wedding App</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <div className="something"></div>
    </p>
  </Layout>
);

export default IndexPage;
