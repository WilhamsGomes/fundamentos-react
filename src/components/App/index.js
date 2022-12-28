import React, { useState} from "react";

import Post from "../Post";
import Header from "../Header";
import { ThemeProvider } from "../../context/ThemeContext";

import styles from "./App.scss";
import { Title } from "./styles";

function App(){

    const [ posts, setPosts ] = useState([
        {id: Math.random(), title: "Title #01", subtitle: "Sub#01", likes: 20, read: false, removed: true },
        {id: Math.random(), title: "Title #02", subtitle: "Sub#02", likes: 30, read: true, removed: false },
        {id: Math.random(), title: "Title #03", subtitle: "Sub#03", likes: 25, read: false, removed: false },
        {id: Math.random(), title: "Title #04", subtitle: "Sub#04", likes: 45, read: false, removed: false },
    ]);

    function handleRefresh(){
        //Atualiza o estado e depende de valores que estão nele
        setPosts( (prevState) => [
            ...prevState, 
            {
                id: Math.random(), 
                title: `Title#0${prevState.length + 1}`, 
                subtitle: `Sub#0${prevState.length + 1}`, 
                likes: 45,
                read: false,
                removed: false,
            }
        ] );
    }

    function handleRemovePost(postId){
        setPosts((prevState) => prevState.map(
            post => (
                post.id === postId 
                    ? { ...post, removed: true } 
                    : post
            )
        ));
    }

    return(
   
        <ThemeProvider>
            <Header 
                title="Jornal do comércio" 
            >
                <Title as="h2">
                    Posts da semana
                    <button onClick={handleRefresh}>Atualizar</button>    
                </Title> 
            </Header>

            <hr/>
            
            {posts.map(post => (
                <Post 
                    key={post.id}
                    onRemove={handleRemovePost}
                    post={post}
                />
            ))}

        </ThemeProvider>
    );
}

export default App;
