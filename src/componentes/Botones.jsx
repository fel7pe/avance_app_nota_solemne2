import imgexport from "../imagenes/imgexport";

function Botones(){

return(
     <>
        <div>
            <br/>
            <form action="http://localhost:3000/Principal"> 
            <input type="submit" value="INGRESAR" id="ingresar"/>
            </form>
        </div>
        <div>
            <h4 className="centrartextos">A&uacute;n no tienes cuenta? </h4> 
        <form action="http://localhost:3000/registrarse"> 
        <input type="submit" value="REGISTRARSE" id="registrarse"/>
         </form>
           
        </div>
        <div>
            
            <br/>
            <button id="botonTwiter"><h2><img src={imgexport.tw} width="25" height="25"/>  Inicie sesion con Twiter</h2></button>
        </div>

        <div>
            
            <br/>
            <button id="botonFacebook"> <h2> <img src={imgexport.fb} width="25" height="25"/> Inicie sesion con Facebook</h2></button>
            
        </div>
        
        <div>
            
            <br/>
            <button id="botonLinkedln"><h2><img src={imgexport.li} width="25" height="25"/>  Inicie sesion conLinkedln</h2></button>
        </div>
        <div>
            
            <br/>
            <button id="botonGoogle"><h2><img src={imgexport.gg} width="25" height="25" />  Inicie sesion con Google</h2></button>
        </div>
    </>

    );

}
export default Botones;