import React, {useContext} from "react";
import PropTypes from 'prop-types'
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";


export default function Header( props, children ){

    const {onToggleTheme} = useContext(ThemeContext);

    return(
        <div
            style={{
                background: "rgb(204,204,204)"
            }}
        >
            <h1> { props.title } </h1>
            <Button 
                onClick={onToggleTheme}
            >
                Mudar tema
            </Button>
            {props.children}
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

Header.defaultProps = {
    title: `JStack's Blog`,
};