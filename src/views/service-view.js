import * as React from "react"

function ServiceView({ service }) {
    return (
        <div className="wrapper">
            <main>
                <h1>{service.name}</h1>
            </main>
        </div>
    )
}

export default ServiceView