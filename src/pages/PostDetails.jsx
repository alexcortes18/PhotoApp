import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { images } from "../util/images";

export default function PostDetails(){
    const params = useParams();

    useEffect(()=>{
        // post_images = images[]
    },[]);
    console.log("PostDetails params:", params);
    return (
        <h1>This is the post {params.id}</h1>
    )
}