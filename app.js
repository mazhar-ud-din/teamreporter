const SignUp = () => {
    debugger;
    const SignUpUser = {
            name: document.getElementById('example').value,
            email: document.getElementById('example1').value,

            password: document.getElementById('example2').value
        }
        // console.log(SignUpUser);
    localStorage.setItem('SignUpUser', JSON.stringify(SignUpUser));
    localStorage.getItem('SignUpUser');
    window.location.assign('~/login.html')
}

const login = () => {
    debugger;
    const SignUpUser1 = {

            email: document.getElementById('example3').value,

            password: document.getElementById('example4').value
        }
        // console.log(SignUpUser);
    localStorage.setItem('SignUpUser1', JSON.stringify(SignUpUser1));
    localStorage.getItem('SignUpUser1');
    window.location.assign('file:///C:/Users/Haier/Desktop/TeamReporte/popup.html')
}

const CreateUp = () => {
    debugger;
    const SignUpUser2 = {
            name: document.getElementById('example5').value,
            category: document.getElementById('example6').value,

            member: document.getElementById('example7').value
        }
        // console.log(SignUpUser);
    localStorage.setItem('SignUpUser2', JSON.stringify(SignUpUser2));
    localStorage.getItem('SignUpUser2');
    window.location.assign('file:///C:/Users/Haier/Desktop/TeamReporte/overeiw.html')
}
