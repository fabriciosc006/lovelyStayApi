const database = require('../infra/database');


const usuarioApi = "fabriciosc006";
const url = 'https://api.github.com/users/${usuarioApi}';


function atribuirCampos(data)
{
const resposta = response.json();
let json = JSON.parse(resposta);
const login = json.login;
const url = json.url;
const name = json.name;
const location = json.location;

login.value = data.login;
url.value = data.url;
name.value = data.name;
location.value = data.location;
}
exports.getFetch = function () {
    return atribuirCampos(data);
};