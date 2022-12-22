import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";



function App(){

    const [ posts, setPosts ] = useState([
        {id: Math.random(), title: "Title #01", subtitle: "Sub#01", likes: 20, read: false},
        {id: Math.random(), title: "Title #02", subtitle: "Sub#02", likes: 30, read: true},
        {id: Math.random(), title: "Title #03", subtitle: "Sub#03", likes: 25, read: false},
        {id: Math.random(), title: "Title #04", subtitle: "Sub#04", likes: 45, read: false},
    ]);


    console.log({posts})

    function handleRefresh(){
        //Atualiza o estado e depende de valores que estão nele
        setPosts( (prevState) => [
            ...prevState, 
            {
                id: Math.random(), 
                title: `Title#0${prevState.length + 1}`, 
                subtitle: `Sub#0${prevState.length + 1}`, 
                likes: 45
            }
        ] );
    }

    function handleRemovePost(postId){
        setPosts((prevState) => (
            prevState.filter(post => post.id !== postId)
        ));
    }

    return(
        <>
            <Header title="Jornal do comércio">
                <h2>
                    Posts da semana sobre esportes
                    <button onClick={handleRefresh}>Atualizar</button>    
                </h2> 
            </Header>

            <hr/>
            
            {posts.map(post => (
                <Post 
                    key={post.id}
                    onRemove={handleRemovePost}
                    post={post}
                />
            ))}

        </>
    );
}

export default App;
