//Llama a la API de https://randomuser.me/ y recibe un usuario
//generado aleatoriamente.
//Una vez ejecutado nos provee con un JSON, XML, CSV o YAML
//para usar en la aplicación
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });