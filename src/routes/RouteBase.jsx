import React from 'react'

function RouteBase(props) {
    const { children, ...attrs } = props;
    const { link, text, ...restAttrs } = attrs;
    return (
        <div className="route-base" {...restAttrs}>
            {children}
        </div>
    )
}

export default RouteBase