class Appointments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: '',
      appt_time: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    obj = {};
    obj[e.target.name] = e.target.value;
    this.setState({
      obj
    })
  }

  render() {
    return (
      <div>
        <AppointmentForm title={this.state.title}
                         appt_time={this.state.appt_time}
                         handleChange={ this.handleChange }
                         />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
}
