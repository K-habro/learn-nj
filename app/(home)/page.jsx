import Link from "next/link";
import Movie from "../../components/movie";
import { API_URL } from "../contants";
export const metadata ={
    title:"Home",
};

async function getMovies(){
    //await new Promise((resolve) => setTimeout(resolve,1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage(){
   const movies = await getMovies();
    return (<div>
        {movies.map((movie) => (
<Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
        ))}
        </div>
    );
}