function valid_email(mail) {
    var inpt = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])/i;
    if (mail.value.match(inpt)) {
        document.forms.email.focus();
        return true;
    } else {
        alert("Invalid E-mail!");
        document.forms.email.focus();
        return false;
    }
}