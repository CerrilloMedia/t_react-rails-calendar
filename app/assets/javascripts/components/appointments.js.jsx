class Appointments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: '',
      appt_time: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e) {
    obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  addNewAppointment(data) {
    var appointment = { id: data.id, title: data.title, appt_time: data.appt_time };
    // Add new appt to existing appointments and re-sort
    var appointments = [...this.state.appointments, appointment].sort(function(a,b){
      return new Date(a.appt_time) - new Date(b.appt_time);
    });
    this.setState({
      appointments: appointments
    })

  }

  handleFormSubmit(e) {
    e.preventDefault();
    var appointment = { title: this.state.title, appt_time: this.state.appt_time };
    $.post('/appointments',
      { appointment: appointment }
    ).done( (data) => {
      this.addNewAppointment(data);
    });
    this.setState({
      title: '',
      appt_time: ''
    })
  }

  render() {
    return (
      <div>
        <AppointmentForm title={this.state.title}
                         appt_time={this.state.appt_time}
                         handleChange={ this.handleChange }
                         handleFormSubmit={ this.handleFormSubmit }
                         />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
}
