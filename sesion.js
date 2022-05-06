var cabecera = new Headers();
cabecera.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("client_id", "rest-client");
urlencoded.append("username", "manager");
urlencoded.append("password", "admin");
urlencoded.append("grant_type", "password");

var opciones = {
  method: 'POST',
  headers: cabecera,
  body: urlencoded,
  redirect: 'follow'
};

/* fetch("http://127.0.0.1:8180/auth/realms/GOIB/protocol/openid-connect/token", opciones)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error)); */

  async function getToken() {
    let url = 'http://localhost:8180/auth/realms/GOIB/protocol/openid-connect/token',opciones;
    try {
        let res = await fetch(url,opciones);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

getToken();



/* var myHeaders = new Headers();

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

async function getSession() {
    let url = 'http://localhost:8180/auth/admin/realms/GOIB/clients/e656b738-a47d-4e2a-80e7-4c03ac884ae3/session-count';
    try {
        let res = await fetch(url,requestOptions);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

getSession(); */