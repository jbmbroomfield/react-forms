import React from 'react';

class Form extends React.Component {
  // handleSubmit = event => {
  //   event.preventDefault()
  //   const state = this.state
  //   const formData = {
  //     firstName: state.firstName,
  //     lastName: state.lastName,
  //   }
  //   const dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () => {
  //   const state = this.state
  //   const submittedData = state.submittedData
  //   return submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  render() {
    const props = this.props
    const formData = props.formData
    return (
      <div>
        <form>
          <input type="text" name="firstName" onChange={props.handleChange} value={formData.firstName} />
          <input type="text" name="lastName" onChange={props.handleChange} value={formData.lastName} />
          <input type="submit" />
        </form>
        {/* {this.listOfSubmissions()} */}
      </div>
    )
  }
}

export default Form;