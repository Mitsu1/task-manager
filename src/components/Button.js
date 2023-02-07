import ButtonComponent from "react-bootstrap/Button";
import Icon from "./Icon";

const Button = (props) => {

    if (props.icon && props.text ){
        return (
            <ButtonComponent
                type={props.type}
            >
                <Icon icon = {props.icon} text = {props.text} />
            </ButtonComponent>
        );
    }    
    else if (props.icon){
        return (
            <ButtonComponent
                type={props.type}
            >
                <Icon icon = {props.icon}/>
            </ButtonComponent>
        );
    }    
    else if (props.text ){
        return (
            <ButtonComponent
                type={props.type}
            >
                <Icon text = {props.text} />
            </ButtonComponent>
        );
    }    
};

export default Button;
