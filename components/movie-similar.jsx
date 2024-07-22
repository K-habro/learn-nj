import { API_URL } from "../app/(home)/page";
import Similar from "./similar";

async function getSimilar(id){
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function MovieSimilar(){
    const sim = await getSimilar();
    return (
        <div>
            {sim.map((similar) => (
                <Similar
                    key={similar.id}
                    id={similar.id}
                    poster_path={similar.poster_path}
                    title={similar.title}
                />
            ))}
        </div>
    );
}