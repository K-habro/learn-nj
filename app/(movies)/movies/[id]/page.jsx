import { Suspense } from "react";

import MovieInfo, { getMovies } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieSimilar from "../../../../components/movie-similar";

export async function generateMetadata({params: {id}}){
    const movie = await getMovies(id)
    return {
        title: movie.title,
    };
}

export default async function MovieDetail({params:{id}})
{    
    return (
        <div> 
            <Suspense fallback={<h1>Loading movie info</h1>}> 
            <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie similar</h1>}>
            <MovieSimilar />
            </Suspense>
        </div>
    );
    }