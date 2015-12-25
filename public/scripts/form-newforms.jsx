var forms = require('newforms');
var paymentForm = forms.Form.extend({
    username: forms.CharField(),
    email: forms.EmailField(),
    password: forms.CharField({widget: forms.PasswordInput}),
    confirmPassword: forms.CharField({widget: forms.PasswordInput}),
    acceptTerms: forms.BooleanField({required: true})
})

var passengerInfoForm = React.createClass({
    render: function () {
        return (
            <div>
                <form>
                    <forms.RenderForm form={paymentForm} ref="passengerInfoForm"/>
                </form>
            </div>
        );
    }
});

