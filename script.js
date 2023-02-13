var btnno = document.getElementById('btnno');
var btnyes = document.getElementById('btnyes');

btnno.addEventListener('mouseenter', () => {
    console.log("mouse entrando");
    var pos = coordenadas();
    btnno.style.top = `${pos.posy}px`;
    btnno.style.left = `${pos.posx}px`;
})

var coordenadas = () => {
    var ancho = screen.width - 100;
    var alto = screen.height - 200;
    var posx = Math.random() * (ancho - 0) + 0;
    var posy = Math.random() * (alto - 0) + 0;
    return { posx, posy }
}

btnyes.addEventListener('click', () => {
    alert('Sabía que dirías que sí💛💐 ¡Te amo tanto! Me alegra mucho decirte que ambos acabamos de ganar: Tú al mejor compañero de vida y yo a la mujer de mis sueños🥰. Voy a hacerte infinitamente feliz lo que me sobra de vida.');
});
