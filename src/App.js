import React, { Fragment } from "react";
import Post from "./Post";

const tituloZeroUm = "Titulo Zero UM";

function App(){
    return(
        <>
            <h1>JStack's Blog </h1>
            <h2>Posts da semana</h2>
            <hr/>
            <Post 
                post={{
                    title:"Titulo da noticia 01",
                    subtitle: "Subtitulo da noticia 01",
                }}
            />
            <Post 
                post={{
                    title:"Titulo da noticia 02",
                    subtitle: "Subtitulo da noticia 02",
                }}
            />
            <Post 
                post={{
                    title:"Titulo da noticia 03",
                    subtitle: "Subtitulo da noticia 03",
                }}
            />
        </>
    );
}

export default App;
