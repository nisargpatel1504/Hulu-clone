import Thumbail from "./Thumbail";
function Results({ results }) {
  return (
    <div className="px-5 my-10 sm:grid  md:grid-cols-2 xl:grid-cols-3 ">
      {
      results.map((result) => (
        <Thumbail key={result.id} result={result} />
      ))
      }
    </div>
  );
}

export default Results;
