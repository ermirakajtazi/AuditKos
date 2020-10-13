import React from "react"
import { Button } from "./Button"
class CardBody extends React.Component {
    render() {
        const { date, comments, title } = this.props;
        return (
            <div className="card-body">
                <div className="date">
                    <p>{date}</p>
                    <p>{comments}</p>
                </div>
                <h2>{title}</h2>
                <Button />
            </div>
        )
    }
}

export default CardBody