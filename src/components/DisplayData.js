import React from 'react'

export default class DisplayData extends React.Component {
    render() {
        const props = this.props
        const formData = props.formData
        return (
            <div>
                <h1>{formData.firstName}</h1>
                <h1>{formData.lastName}</h1>
            </div>
        )
    }
}