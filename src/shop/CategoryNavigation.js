import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToggleLink } from "../ToggleLink";


export class CategoryNavigation extends Component {

    render() {
        return <React.Fragment>
            <ToggleLink to={ `${this.props.baseUrl}/all` } exact={ false }>All</ToggleLink> 
            { this.props.categories && this.props.categories.map(cat => 
                <ToggleLink key={ cat }
                    to={ `${this.props.baseUrl}/${cat.toLowerCase()}`}> 
                    { cat }
                </ToggleLink>
            )}   
            <Link className="btn btn-block btn-secondary fixed-bottom m-2 col-3"
                to="/admin">
                Administration
            </Link>
        </React.Fragment>
    }
}
// React requres a key prop to be applied to the elements generated 
// by the map method so that the array can be handled efficiently "chapter 10"
