import Link from "next/link";
import Layout from "../client/components/layout/Layout";
import Date from "../client/components/utils/Date";

const now = "2021-04-14";

const AboutPage = () => (
  <Layout title="About">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
      <br />
      <Date dateString={now} />
      <br />
    </p>
  </Layout>
);

export default AboutPage;
