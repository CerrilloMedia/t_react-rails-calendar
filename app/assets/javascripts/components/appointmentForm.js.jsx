class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.setApptTime = this.setApptTime.bind(this);
  }

  setApptTime(e) {
    var name = 'appt_time';
    var obj = {}
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    };
  };

  handleChange(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  render() {

    var inputProps = {
      name: 'appt_time'
    };

    return (
        <form onSubmit={this.props.handleFormSubmit }>
          <input name="title"
                 placeholder="title"
                 value={this.props.title}
                 onChange={this.handleChange } />
          <Datetime input={false}
                    open={true}
                    inputProps={inputProps}
                    value={this.props.appt_time}
                    onChange={this.setApptTime} />
          <input type="submit" value='Make Appointment' />
        </form>
    )
  }
}
