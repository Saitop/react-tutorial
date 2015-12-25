var monthtext = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function populatedropdown(dayfield, monthfield, yearfield) {
  var today = new Date()
  var dayfield = document.getElementById(dayfield)
  var monthfield = document.getElementById(monthfield)
  var yearfield = document.getElementById(yearfield)
  for (var i = 0; i < 31; i++)
    dayfield.options[i] = new Option(i, i + 1)
  dayfield.options[today.getDate()] = new Option(today.getDate(), today.getDate(), true, true) //select today's day
  for (var m = 0; m < 12; m++)
    monthfield.options[m] = new Option(monthtext[m], monthtext[m])
  monthfield.options[today.getMonth()] = new Option(monthtext[today.getMonth()], monthtext[today.getMonth()], true, true) //select today's month
  var thisyear = today.getFullYear()
  for (var y = 0; y < 20; y++) {
    yearfield.options[y] = new Option(thisyear, thisyear)
    thisyear += 1
  }
  yearfield.options[0] = new Option(today.getFullYear(), today.getFullYear(), true, true) //select today's year
}

var Form = React.createClass({
    render: function () {
        return (
            <div>
                <form action="" name="passengerInfoForm">
                    PERSONAL INFO<br/>
                    <input type="text" name="firstName" placeholder="First name"/>
                    <br/>
                    <input type="text" name="middleName" placeholder="Middle name (optional)"/>
                    <br/>
                    <input type="text" name="lastName" placeholder="Last name"/>
                    <br/>
                    DATE OF BIRTH<br/>
                    <select id="daydropdown">
                    </select>
                    <select id="monthdropdown">
                    </select>
                    <select id="yeardropdown">
                    </select>
                    GENDER<br/>
                    <input type="radio" name="sex" value="male" checked/>Male
                    <input type="radio" name="sex" value="female"/>Female
                </form>

            </div>
            );
    }
});


ReactDOM.render(
  <Form   onload="populatedropdown('daydropdown', 'monthdropdown', 'yeardropdown')"/>,
  document.getElementById('content')
);
