export function registerFormFun(e){
    e.preventDefault();
    const formData = new FormData(document.getElementById("registrationForm"));
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email);
    const repeatPassword = formData.get('repeatPassword');
    if(String(email).length<3){
        document.getElementById("registrationForm").reset();
        return alert('The email should be at least 3 characters long!');        
    }else if(String(password).length<3){
        document.getElementById("registrationForm").reset();
        return alert('The password should be at least 3 characters long!');
    }else if(password!=repeatPassword){
        document.getElementById("registrationForm").reset();
        return alert('The repeat password should be equal to the password!');
    }

    const url = 'http://localhost:3030/users/register';
    fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email,password})
    }).then(r => r.json())
      .then(r => {
          localStorage.setItem('token', r.accessToken);
          console.log(r);
    }).catch(e => {
        document.getElementById("registrationForm").reset();
        alert('This registration has already exsist!');
    });
}