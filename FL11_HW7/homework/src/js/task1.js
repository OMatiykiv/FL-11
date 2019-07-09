const passwordList = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}
const minEmailLength = 6;
const minPassLength = 5;
let email = prompt('Insert your email', '');
if (!email) {
    alert('Canceled')
} else if (email.length < minEmailLength) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === 'admin@gmail.com' || email === 'user@gmail.com') {
    let password = prompt('enter password', '');
    if (password === null || password === '') {
        alert('Canceled')
    } else if (password === passwordList[email] ) {
        if (confirm('Do you want to change your password?')) {
            password = prompt('enter old password', '');
            if (password === null || password === '') {
                alert('Canceled')
            } else if ( password === passwordList[email] ) {
                password = prompt('enter new password', '');
                if (password.length >= minPassLength) {
                    let passwordConfirm = prompt('enter new password again', '');
                    if (passwordConfirm === null || passwordConfirm === '') {
                        alert('Canceled')
                    } else if (password === passwordConfirm) {
                        passwordList[email] = password;
                        alert('You have successfully changed your password.')
                    } else {
                        alert('You wrote the wrong password.')
                    }
                } else {
                    alert('It’s too short password. Sorry.')
                }    
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change.')
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}