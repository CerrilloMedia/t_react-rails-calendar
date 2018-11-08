class Appointments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      input_title: 'Appointment Title',
      input_appt_time: 'Tomorrow at 9am'
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleApptTimeChange = this.handleApptTimeChange.bind(this)
  }

  handleTitleChange(e) {
    this.setState({
      input_title: e.target.value
    })
  }

  handleApptTimeChange(e) {
    this.setState({
      input_appt_time: e.target.value
    })
  }

  render() {
    return (
      <div>
        <AppointmentForm input_title={this.state.input_title} handleTitleChange={ this.handleTitleChange }
                         input_appt_time={this.state.input_appt_time} handleApptTimeChange={ this.handleApptTimeChange }
                         />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
}
