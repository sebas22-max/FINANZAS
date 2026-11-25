const categorias = document.getElementById('categorias')

fetch('http://localhost:3000/api/gastos')
.then(respuesta => respuesta.json())
.then(datos => {

for (i=0;i < datos.length; i++) {
    categorias.inneerHTML += `<option>${datos.data[i].nombre}</option>`

}
})
 const gastos = document.getElementById(`registro`)
fetch('http://localhost:3000/api/registro')
.then(respuesta => respuesta.json())
.then(datos => {

for (i=0;i < datos.length; i++) {
  gastos.innerHTML += ` <div class="hijo">
     
  <div class="registro">
   
  <span>${datos[i].monto}</span>
    <span>${datos[i].fecha}</span>
     <div>
    <span>${datos[i].tipo}</span>
    <span>${datos[i].salario}</span>
    </div>
     </div>
   
     <div class="eleccion">
        <span class="">Eliminar</span>
         <span class="">Editar</span>
    </div>
    </div>
 
</div> `
 
}
})
