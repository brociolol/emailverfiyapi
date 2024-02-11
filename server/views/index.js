<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Email Verify</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script>
    <style>
      body {
  background: linear-gradient(-45deg, #000000, #1b1c1c, #000000, #1b1c1c);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

input[type="email"] {
  width: 100%;
  max-width: 350px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

h1 {
  color: #951adb;
  font-weight: bold;
  font-size: 48px;
}
    </style>
  </head>
  <body>
    <main class="d-flex flex-columnn align-items-center vh-100">
      <div id="main_display" class="d-flex container-sm flex-column w-50 text-center">
        <div><h1>Email Verify Endpoint</h1>
          <h3 class="text-light">Enter an email address below to determine it's validity.</h3></div>
    <div class="mb-4 mt-3 w-100 d-flex justify-content-center gap-2">
      <input id="emailAddr" type="email" class="form-control w-100" placeholder="name@example.com"><button type="button" class="btn btn-light" onClick="validate()">Validate</button>
    </div>
    <div>
      <textarea id="code_response" class="prettyprint w-100" rows="5" cols="40" style="background-color: #f9f9f9; color: #000; border: 0px solid #000;">&nbsp;// submit an email address</textarea>
    </div>
      </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<script type="text/javascript">
        function validate() {
          const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
          let emailAddrElement = document.getElementById('emailAddr');
          let emailAddr = emailAddrElement.value;
          let codeElement = document.getElementById('code_response');
          codeElement.innerHTML = "loading..."

          if (emailAddr == "" || emailAddr == null) {
            codeElement.innerHTML = 'Please enter a valid email address';
          }
          else {

            let url = 'http://localhost:3000/verify/user?email=' + emailAddr;
                    fetch(url)
            .then(response => {
              if (!response.ok) {
                let codeElement = document.getElementById('code_response');
                codeElement.innerHTML = 'There was an issue processing the request. Please try again.';
                console.log(response.text());
              }
              return response.text();
              console.log(response.text());
            })
            .then(data => {
              // Success
              let codeElement = document.getElementById('code_response');
              let dataStr = JSON.parse(data);
              codeElement.innerHTML = JSON.stringify(dataStr, null, 2);
              codeElement.classList.add('prettyprint');
            })
            .catch(error => {
              // Error
              let codeElement = document.getElementById('code_response');
              let dataStr = JSON.parse(error);
              codeElement.innerHTML = JSON.stringify(dataStr, null, 2);
              codeElement.classList.add('prettyprint');
            });

          }
        }
    </script>
  </body>
</html>
