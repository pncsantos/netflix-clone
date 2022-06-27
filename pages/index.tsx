import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";

const Home = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Paul Santos - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 ">
        <Banner />
        <AboutMe />
        <section className="md:space-y-24">
          {/* <Row title="Web Projects" movies={[]} />
          <Row title="Mobile Projects" movies={[]} /> */}
        </section>
      </main>
      {/* Modal */}
    </div>
  );
};

export default Home;
