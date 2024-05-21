import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <header>
        <h1>My Chatbot</h1>
      </header>
      <main>
      <Component {...pageProps} />
      </main>
    </div>
  );
}
