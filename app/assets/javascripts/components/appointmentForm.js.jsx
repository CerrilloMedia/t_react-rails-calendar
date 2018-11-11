class AppointmentForm extends React.Component {
  render() {
    return (
        <form onSubmit={this.props.handleFormSubmit }>
          <input name="title"
                 placeholder="title"
                 value={this.props.title}
                 onChange={this.props.handleChange } />
          <input name="appt_time"
                 placeholder="date and time"
                 value={this.props.appt_time}
                 onChange={this.props.handleChange } />
          <input type="submit" value='Make Appointment' />
        </form>
    )
  }
}
