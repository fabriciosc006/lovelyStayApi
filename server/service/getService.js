const getData = require ('../data/getData');

const url = 'https://api.github.com/users/${usuarioApi}';

function getFetch(){
    fetch(url, {
        method:"GET",
        headers: {"Content-type":"application/json;charset=UTF-8"}
        })
        .then(response =>{
       return res.json();
         }).then(data =>{
         getService.atribuirCampos(data);
     });

}

exports.getFetch = function(){
    return getData.getFetch();
};