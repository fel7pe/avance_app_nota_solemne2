import react from "react";
import imgexport from "../imagenes/imgexport";
function Registrarse(){

return (

    
    <html>
    <head>
        <link rel="stylesheet" type="text/css" href="estilo.css" />
    </head>
    <body bgcolor="FFF300">
       
        <header>
            <nav>
            </nav>
        </header>
        <section>
            <section id="tarjeta">
                <header>
                <img src={imgexport.logo} width="200" height="150" id="logo"/>
                    <h4 className="centrartextos">Registrarse</h4>
                </header>
                <form id="datos_usuario">
                    <div>
                        <h4 className="centrartextos">Nombre y Apellido</h4>
                        <input type="text" class="entradas" required />
                    </div>
                    <div>
                        <h4 className="centrartextos">Fecha de nacimiento</h4>
                        <input type="date" class="entradas" required />
                    </div>
                    <div>
                        <h4 className="centrartextos">Correo</h4>
                        <input type="email" placeholder="Su direcci&oacute;n de correo" class="entradas" required />
                    </div>
                    <div>
                        <h4 className="centrartextos">Contrase&ntilde;a</h4>
                        <input id="password" type="password" class="entradas" required />
                    </div>

                    <div>
                        <h4 className="centrartextos">Confirmaci&oacute;n de contrase&ntilde;a</h4>
                        <input id="confirmacion" type="password" class="entradas" required />
                        <br />
                    </div>

                    <div className="botones2"> 
                        <input type="submit" value="Registrarse" />
                    </div>
                     
                    <form action="http://localhost:3000/" className="botones2">
                        <input type="submit" value="Iniciar sesion" />
                        </form>
                        
                
                      
                
                </form>
            </section>
        </section>
    </body>
</html>




);

}

export default Registrarse;

