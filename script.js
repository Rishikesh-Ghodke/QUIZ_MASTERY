// Signup functionality

    const signupForm = document.getElementById('signupForm'); 
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }

            
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);

            alert('Signup successful!');
            
            window.location.href = 'login.html';
        });
    }

    
    const loginForm = document.getElementById('loginForm'); 
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            
            const storedEmail = localStorage.getItem('userEmail');
            const storedPassword = localStorage.getItem('userPassword');

            
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }

            
            if (email === storedEmail && password === storedPassword) {
                alert('Login successful!');
                
                window.location.href = 'index.html'; 
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
