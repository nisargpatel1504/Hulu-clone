import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({results}) {
  return (
    <div className="bg-[#06202A] text-gray-300">
      <head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico"></link>
      </head>

      <Header />
      <Nav />
      <Results results ={results}/>

    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res)=>res.json());
  return {
    props:{
      results:JSON.parse(JSON.stringify( request.results)),
    }
  }
}
