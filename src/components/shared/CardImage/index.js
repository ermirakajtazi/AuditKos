import React from "react"
import Card from "./Card"
import Data from "./Data"
import { Button } from "../../shared/Button"

class CardImage extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: {}
        }
    }
    componentWillMount() {
        this.setState({
            posts: Data
        });
    }
    render() {
        return <div className="container-card">
            <div className="blog-title"><h1>Read Our Blogs</h1></div>
            <div className="image-card">
                <div className="app-card-list" id="app-card-list">
                    {
                        Object
                            .keys(this.state.posts)
                            .map(key => <Card key={key} index={key} details={this.state.posts[key]} />)
                    }
                </div>
            </div>
            <Button buttonStyle="btn--secondary" buttonSize="btn--large" name="View All" />
        </div>
    }
}

export default CardImage