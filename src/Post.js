import React from "react";
import PropsTypes from 'prop-types';

export default function Post(props){

    return(
        <>
            <article>
                <strong>{props.post.title}</strong>
                <button onClick={ () => props.onRemove(props.post.id)}>
                    Remover
                </button>
                <br />
                <small>{props.post.subtitle}</small>
                <br/>
                Likes: {props.likes / 2}
            </article>
            <br />
        </>
    );
}

Post.propTypes = {
    likes: PropsTypes.number.isRequired,
    onRemove: PropsTypes.func.isRequired,
    post: PropsTypes.shape({
        id: PropsTypes.number.isRequired,
        title: PropsTypes.string.isRequired,
        subtitle: PropsTypes.string.isRequired,
    }).isRequired,
};