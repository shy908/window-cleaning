import OurServices from "./services";
import "./serviceStyle.css";

function ServiceData(props) {
    return (
        <div className="s-card">
            <div className="s-image">
                <img src={props.image} alt="serviceim"/>
                </div>
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
        </div>
    );
}
export default ServiceData;