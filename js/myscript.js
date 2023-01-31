fetch('https://randomuser.me/api/?nat=us,fr')
.then(response => response.json())
.then(data => {
    let datospersonales = data.results[0];
    document.getElementById("autoretrato").setAttribute("src", datospersonales.picture.large);
    document.getElementById("encabezado").innerHTML = datospersonales.name.first+" "+datospersonales.name.last;
    document.getElementById("telefono").innerHTML = datospersonales.cell;
    document.getElementById("direccion").innerHTML = datospersonales.location.city+","+datospersonales.location.state+","+datospersonales.location.country;
    document.getElementById("email").innerHTML = datospersonales.email;  
    document.getElementById("edad").innerHTML = datospersonales.dob.age+" años";
    document.getElementById("resultado_datos_titulo").innerHTML = "perfil";
    document.getElementById("resultado_datos_texto").innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus at neque ac maximus. Maecenas sollicitudin id sem at porta. Pellentesque tincidunt, ipsum at mattis rhoncus, felis ante fermentum mi, sit amet maximus neque mauris et eros. Morbi elementum hendrerit tortor, quis vestibulum eros malesuada ut. Cras vel nunc hendrerit, viverra ex id, maximus nibh. Donec ac ligula dui. Mauris enim tortor, pharetra et iaculis sed, consequat vitae erat. Aliquam lacinia tempor sem. Vivamus a malesuada eros. Proin in cursus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent pulvinar, mi in ornare congue, risus augue sodales tortor, at commodo tortor leo id nunc. Duis lacinia consectetur efficitur.<br>Donec egestas mauris at justo facilisis bibendum. Donec fringilla eget lacus sollicitudin imperdiet. In rutrum malesuada auctor. Morbi ultrices gravida mauris sed lobortis. Pellentesque diam est, fermentum ultrices libero nec, consectetur ornare urna. Nam et ex a velit scelerisque lobortis id et massa. Pellentesque imperdiet tellus elit, vitae maximus orci lacinia vel. Etiam ac odio cursus, mattis odio vitae, viverra tortor. Nulla ac egestas justo. Nulla sit amet nisl vitae nisl ultrices ullamcorper sed a turpis. Ut ipsum lectus, maximus vel porta a, sagittis vitae sem. Vestibulum auctor magna et orci sodales pretium ac rhoncus odio. Nam auctor, risus ac blandit efficitur, orci magna volutpat orci, quis lobortis dui nibh a nisi. Phasellus fringilla pellentesque tempor.</p>";
    

    document.getElementById('perfil').addEventListener('click', (event) => {
      document.getElementById("resultado_datos_titulo").innerHTML = "perfil";
      document.getElementById("resultado_datos_texto").innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus at neque ac maximus. Maecenas sollicitudin id sem at porta. Pellentesque tincidunt, ipsum at mattis rhoncus, felis ante fermentum mi, sit amet maximus neque mauris et eros. Morbi elementum hendrerit tortor, quis vestibulum eros malesuada ut. Cras vel nunc hendrerit, viverra ex id, maximus nibh. Donec ac ligula dui. Mauris enim tortor, pharetra et iaculis sed, consequat vitae erat. Aliquam lacinia tempor sem. Vivamus a malesuada eros. Proin in cursus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent pulvinar, mi in ornare congue, risus augue sodales tortor, at commodo tortor leo id nunc. Duis lacinia consectetur efficitur.<br>Donec egestas mauris at justo facilisis bibendum. Donec fringilla eget lacus sollicitudin imperdiet. In rutrum malesuada auctor. Morbi ultrices gravida mauris sed lobortis. Pellentesque diam est, fermentum ultrices libero nec, consectetur ornare urna. Nam et ex a velit scelerisque lobortis id et massa. Pellentesque imperdiet tellus elit, vitae maximus orci lacinia vel. Etiam ac odio cursus, mattis odio vitae, viverra tortor. Nulla ac egestas justo. Nulla sit amet nisl vitae nisl ultrices ullamcorper sed a turpis. Ut ipsum lectus, maximus vel porta a, sagittis vitae sem. Vestibulum auctor magna et orci sodales pretium ac rhoncus odio. Nam auctor, risus ac blandit efficitur, orci magna volutpat orci, quis lobortis dui nibh a nisi. Phasellus fringilla pellentesque tempor.</p>";
      });
    
    document.getElementById('experiencia').addEventListener('click', (event) => {
      document.getElementById("resultado_datos_titulo").innerHTML = "experiencia";
      document.getElementById("resultado_datos_texto").innerHTML = '<div class="box"><div class="años"><h5>Fecha inicial - Fecha final</h5><h5>Compañia</h5></div><div class="texto"><h4>Puesto</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis in risus semper venenatis. Morbi dui felis, accumsan quis dignissim sit amet, molestie eu tortor.</p></div></div>      <div class="box"><div class="años"><h5>Fecha inicial - Fecha final</h5><h5>Compañia</h5></div><div class="texto"><h4>Puesto</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis in risus semper venenatis. Morbi dui felis, accumsan quis dignissim sit amet, molestie eu tortor.</p></div></div>      <div class="box"><div class="años"><h5>Fecha inicial - Fecha final</h5><h5>Compañia</h5></div><div class="texto"><h4>Puesto</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis in risus semper venenatis. Morbi dui felis, accumsan quis dignissim sit amet, molestie eu tortor.</p></div></div>';

    });


    document.getElementById('educacion').addEventListener('click', (event) => {
      document.getElementById("resultado_datos_titulo").innerHTML = "educacion";
      document.getElementById("resultado_datos_texto").innerHTML = '<div class="box"><div class="años"><h5>Fecha inicial - Fecha final</h5><h5>Universidad</h5></div><div class="texto"><h4>Carrera</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis in risus semper venenatis. Morbi dui felis, accumsan quis dignissim sit amet, molestie eu tortor.</p></div></div>      <div class="box"><div class="años"><h5>Fecha inicial - Fecha final</h5><h5>Universidad</h5></div><div class="texto"><h4>Carrera</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis in risus semper venenatis. Morbi dui felis, accumsan quis dignissim sit amet, molestie eu tortor.</p></div></div>      <div class="box"><div class="años"><h5>Fecha inicial - Fecha final</h5><h5>Universidad</h5></div><div class="texto"><h4>Carrera</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis in risus semper venenatis. Morbi dui felis, accumsan quis dignissim sit amet, molestie eu tortor.</p></div></div>';
    });

    document.getElementById('habilidades').addEventListener('click', (event) => {
      document.getElementById("resultado_datos_titulo").innerHTML = "habilidades";
      document.getElementById("resultado_datos_texto").innerHTML = '<div class="box_habilidades"><h4>HTML</h4><div class="porcentaje"><div class="habilidad_1"></div></div></div>     <div class="box_habilidades"><h4>CSS</h4><div class="porcentaje"><div class="habilidad_2"></div></div></div>    <div class="box_habilidades"><h4>JavaScript</h4><div class="porcentaje"><div class="habilidad_3"></div></div></div>     <div class="box_habilidades"><h4>Python</h4><div class="porcentaje"><div class="habilidad_4"></div></div></div>      <div class="box_habilidades"><h4>CSS</h4><div class="porcentaje"><div class="habilidad_2"></div></div></div>    <div class="box_habilidades"><h4>JavaScript</h4><div class="porcentaje"><div class="habilidad_3"></div></div></div>     <div class="box_habilidades"><h4>C++</h4><div class="porcentaje"><div class="habilidad_5"></div></div></div>'
    });

    document.getElementById('intereses').addEventListener('click', (event) => {
      document.getElementById("resultado_datos_titulo").innerHTML = "intereses";
      document.getElementById("resultado_datos_texto").innerHTML =  '<div class="intereses"><ul><li><i class="fa fa-plane" aria-hidden="true"></i>Excursiones</li><li><i class="fa fa-gamepad" aria-hidden="true"></i>Juegos de video</li><li><i class="fa fa-gamepad" aria-hidden="true"></i>Futbol</li><li><i class="fa fa-bicycle" aria-hidden="true"></i>Ciclismo</li><li><i class="fa fa-book" aria-hidden="true"></i>Lectura</li></ul></div>'
    });

    document.getElementById()
} )
.catch(error => console.error(error));




