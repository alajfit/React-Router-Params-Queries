import React from "react";

export default class Services extends React.Component {
    render() {
        console.log(this.props);
        // We all pulling variables to const to clean the html returned
        const { params } = this.props;
        // We use this to grab an object of the same name and create an object in this scope
        //  e.g. this.props contains params and we have created an object here called params
        const { service } = params;
        const { query } = this.props.location;
        const { date, filter } = query;
        return (
            <div>
                <h1>Services ({service})</h1>
                <h4>Date: {date}, Filter: {filter}</h4>
            </div>
        );
    }
}
