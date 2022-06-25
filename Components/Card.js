import React from "react"

export default function Card(props) {
    return (
        <div className="card-body">
            <img src={props.imageUrl} />
            <div className="text-content">
                <p className="address"><i class="fa fa-map-marker" aria-hidden="true"></i> {props.title}<a href={props.googleMapsUrl}>View on Google Maps</a></p>
                <h1 className="actual-location">{props.location}</h1>
                <p className="dates">{props.startDate} to {props.endDate}</p>
                <p className="body-para">
                    {props.description}W
                </p>
            </div>
        </div>
    )
}