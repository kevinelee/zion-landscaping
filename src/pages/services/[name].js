import * as React from "react"

function ServiceCatchAll({ params }) {
    return (
        <div className="wrapper">
            <main>
                <h1>Service not found</h1>
                <p>{params.name}</p>
            </main>
        </div>
    )
}

export default ServiceCatchAll