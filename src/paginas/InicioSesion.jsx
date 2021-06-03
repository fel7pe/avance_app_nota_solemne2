import react from "react";
import Botones from "../componentes/Botones";
import Datos from "../componentes/Datos";
import imgexport from "../imagenes/imgexport";

function InicioSesion(){
    return(
        <html>
    
            <body bgcolor="FFF300">
                <section>
                    <section id="tarjeta">

                    <div>
                        <img src={imgexport.logo} width="200" height="150" id="logo"/>                        
                    </div>

                        <header>
                           
                        <h3 id= "iniciodesesion">INICIAR SESI&Oacute;N</h3>
                         </header>               
                                    
                                                         
                        <form>
                                <Datos/>
                                <Botones/>
                                    
                        </form>
                    
                    </section>
                </section>
            </body>

        </html>



    );
}

export default InicioSesion;
