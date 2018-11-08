class AppointmentForm extends React.Component {
  render() {
    return (
        <form>
          <input name="title" placeholder="Appointment Title"
                 value={this.props.input_title} onChange={this.props.handleTitleChange } />
          <input name="appt_time" placeholder="Appointment date and time"
                 value={this.props.input_appt_time} onChange={this.props.handleApptTimeChange } />
          <input type="submit" value='Make Appointment' />
        </form>
    )
  }
}
