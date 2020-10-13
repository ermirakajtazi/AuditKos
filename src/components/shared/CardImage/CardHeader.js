
import React from "react"

class CardHeader extends React.Component {
    render() {
        const { image } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')',
            backgroundPosition: 'cover',
        };
        return (
            <header style={style} className="card-header">
            </header>
        )
    }
}

export default CardHeader