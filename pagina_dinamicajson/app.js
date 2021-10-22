"use strict"

//sponsor lo he dejado como la parte de descripción

let bool=confirm("¿Eres un bot?");
if(bool==false){

        const creargaleria=(galeria)=> {
            
            document.write (`<div class="gal">

                        <h1>${galeria["Rider"]}</h1>
                        <h2>${galeria["ciudad"]}</h2>
                        <p>${galeria["altura"]}</p>
                        <p>${galeria["sponsor"]}</p> 
                        <p>${galeria["rank"]}</p>
                        <p>${galeria["insta"]}</p>
                        <p>${galeria["categoria"]}</p>
                        <p>${galeria["fnac"]}</p>
                        <img src="${galeria["perfil"]}">
                        <p><a href="${galeria["enlace"]}">Enlace<a></p>

                        <fieldset>
                            <legend class="lege">
                                Actualizar ${galeria["Rider"]}
                            </legend>

                            <form class="formulario">

                                <label for="skater">
                                    Rider: <input type= "text" name= "nombre" value="${galeria["Rider"]}">
                                </label>
                                <br>
                                <label for="ciudad">
                                    Ciudad: <input type= "text" name= "ciu" value="${galeria["ciudad"]}">
                                </label>
                                <br>
                                <label for="altura">
                                    Altura: <input type= "number" name= "alt" value="${galeria["altura"]}">
                                </label>
                                
                                <br>
                                <label for="rango">
                                    Rank: <input type= "number" name= "rango" value="${galeria["rank"]}">
                                </label>
                                <br>
                                <label for="contacto">
                                    Instagram: <input type= "text" name= "ins" value="${galeria["insta"]}">
                                </label>
                                <br>
                                <label for="postura">
                                    Categoria: <input type= "text" name= "stance" value="${galeria["categoria"]}">
                                </label>
                                <br>
                                <label for="fecha">
                                    Fecha Nacimiento: <input type= "date" name= "fech" value="${galeria["fnac"]}">
                                </label>
                                <br>
                                <label for="link">
                                    Imagen: <input type= "text" name= "imag" value="${galeria["perfil"]}">
                                </label>
                                <br>
                                <a>Sponsors:</a> <textarea> ${galeria["sponsor"]} </textarea>
                                <br>
                                <label for="enlac">
                                    Enlace: <input type= "text" name= "enlac" value="${galeria["enlace"]}">
                                </label>
                                <br>
                                <label for="boton">
                                    <input type= "button" name= "botn" value="modificar">
                                </label>

                            </form>

                        </fieldset>

                    </div>`);
        }

            
            let busqueda=prompt("¿regular o goofy?"); 

            let filtrado=total.filter(
                (galeria)=>{
                    return galeria["categoria"].toUpperCase().includes(busqueda.toUpperCase());
                }
            )

            let orden=prompt("ascendente o descendente");

            if(orden=="ascendente"){

                filtrado.sort(
                    (a,b)=>{
                        return a["Rider"].localeCompare(b["Rider"]);
                    }
                )
    
                filtrado.forEach(creargaleria);

            }else if(orden=="descendente"){

                filtrado.sort(
                    (a,b)=>{
                        return b["Rider"].localeCompare(a["Rider"]);
                    }
                )
    
                filtrado.forEach(creargaleria);

            }else{
                total.forEach(creargaleria);
            }

}else{
    
    document.write(`<img id="imagen" src="https://memegenerator.net/img/instances/69739632.jpg">`) 
}
