import react from "react";
import imgexport from "../imagenes/imgexport";

function Principal(){

return (

<html>
	<head>
		
		<link rel="stylesheet" type="text/css" href="css/estilo.css"/>
	</head>
	<body bgcolor="FFF300" >
	   
		<div id="principal"> </div>
			<header id="cabezera">
				
					<img src={imgexport.logo}  id="logo2"/>
				
			</header >
			<section>
				<h1></h1>
			</section>
			<section >
				<nav >	

				<div className="botones3"> 
				<form action="http://localhost:3000/registrarse?">
					<input type="submit" value="Registrarse" />
				</form>
                       
                    </div>
                     
                    <form action="http://localhost:3000/" className="botones3">
                        <input type="submit" value="Iniciar sesion" />
                        </form>
                        
				
				<div>
            
            
            <button id="carrito"><h2><img src={imgexport.carrito} width="25" height="25" />  Carrito de compras</h2></button>
        </div>
                 <h4>
					<a class="seccion" href="">OFERTAS</a>
					<a class="seccion" href="" >CELULARES</a>				
					<a class="seccion" href="">ACCESORIOS</a>
					</h4>
				</nav>
			</section>
			
			<section id="categorias">
					
				<section class="uno">
					
					
					<h5>Iphone X</h5>
					<img src={imgexport.iphonex} width="150" height="150" className="imagenesprincipal"/>
					
					<p class="precio">
						$ 440.000
					</p>
					
					<a href="" class="leer-mas">Leer más</a>
					<br />
					<br />
					
					<a href="">Añadir al carrito</a>
				</section>

				<section class="uno">
					<h5>IPHONE 8 PLUS REAC. ROJO</h5>
					<img src={imgexport.iphone7} width="150" height="150" className="imagenesprincipal"/>
					
					<p class="precio">
						$ 380.000
					</p>

					<a href="" class="leer-mas">Leer más</a>
					<br/>
					<br />
					
					<a href="">Añadir al carrito</a>
				</section>


				<section class="uno">
					<h5>Iphone 11</h5>
					<img src={imgexport.iphone11} width="150" height="150" className="imagenesprincipal"/>					
					<p class="precio">
						$ 640.000
					</p>
					<a href="" class="leer-mas">Leer más</a> 
					<br/>
					<br />
					<a href="">Añadir al carrito</a>
				</section>

			</section>

			<section id="info">
				<section id="center">
					
						
					<h3 class="parrafo" >
						SIGUENOS y contactanos EN NUESTRAS REDES SOCIALES :
						<img align ="middle" src={imgexport.redes} width="150" />
					</h3>
				</section>
			</section>
	</body>
</html>
  
);
}

export default Principal;