"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
export default function Similar({title,id,poster_path}){
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    }
    return <div>
    <img src={poster_path} alt={title} onClick={onClick} />
<Link href={`/movies/${id}`}>{title}</Link>
</div>
}