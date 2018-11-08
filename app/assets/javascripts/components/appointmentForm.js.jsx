class AppointmentForm extends React.Component {
  render() {
    return (
        <form>
          <input name="title" placeholder="appointment Title" />
          <input name="appt_time" placeholder="appointment date and time" />
          <input type="submit" value='Make Appointment' />
        </form>
    )
  }
}
