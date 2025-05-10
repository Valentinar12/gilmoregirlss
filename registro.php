<?php
// Conexión a la base de datos
$conexion = mysqli_connect('localhost', 'root', '', 'gilmoregirls');



// Verifica si se envió el formulario

    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["correo_electronico"];
    $contrasena = $_POST["contrasena"];

    // Preparar consulta (SIN mysqli_prepare, como tu profe sugirió)
    $consulta = mysqli_query($conexion,"INSERT INTO usuarios(Nombre, Apellido, Correo, Contrasena) 
                      VALUES ('$nombre', '$apellido', '$correo', '$contrasena')");

   

    header("Location:index.html");
// Cerrar conexión
mysqli_close($conexion);
?>

