import React from "react"
import CardHeader from "./CardHeader"
import CardBody from "./CardBody"
class Card extends React.Component {
    render() {
        const { image, date, comments, title } = this.props.details;
        return (
            <article className="card" data-aos="flip-up">
                <CardHeader image={image} />
                <CardBody title={title} date={date} comments={comments} />
            </article>
        )
    }
}

export default Card