var Form = React.createClass({
    render: function () {
        return (
            <div className="passengerInfoForm">
                <form>
                    PERSONAL INFO<br/>
                    <input type="text" name="firstName" placeholder="First name"/>
                    <br/>
                    <input type="text" name="middleName" placeholder="Middle name (optional)"/>
                    <br/>
                    <input type="text" name="lastName" placeholder="Last name"/>
                    <br/>
                    DATE OF BIRTH<br/>
                    <select name="month">
                        <option value="" disabled selected >Month</option>
                        <option value="Jan">January</option>
                        <option value="Feb">February</option>
                        <option value="Mar">March</option>
                        <option value="Apr">April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    <select name="day">
                        <option value="" disabled selected>Day</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                    </select>
                    <select name="year">
                        <option value="" disabled selected>Year</option>
                        <option>2009</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                    </select>
                    <br/>
                    GENDER<br/>
                    <input type="radio" name="sex" value="male" />Male
                    <input type="radio" name="sex" value="female"/>Female
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <Form />,
    document.getElementById('content')
);
