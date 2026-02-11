import Navbar from "~/components/Navbar";

export default function Upload() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Upload Resume</h1>
        </div>
      </section>
    </main>
  );
}
