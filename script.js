const contenedor = document.getElementById("productos");

const flores = [
  /* 1 */
  {
    nombre: "Ramo de lirios",
    precio: "S/. 50",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Ramo%20de%20lirios_2.jpeg"
  },
  /* 2 */
  {
    nombre: "Ramo de girasoles",
    precio: "S/. 50",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Ramo%20de%20girasoles.jpeg"
  },
  /* 3 */
  {
    nombre: "Arreglo de lirios",
    precio: "S/. 70",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Arreglo%20de%20lirios_2.jpeg"
  },
  /* 4 */
  {
    nombre: "Ramo de rosas",
    precio: "S/. 50",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Ramo%20de%20rosas.jpeg"
  },
  /* 5 */
  {
    nombre: "Arreglo de rosas",
    precio: "S/. 180",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Arreglo%20de%20rosas.jpeg"
  },
  /* 6 */
  {
    nombre: "Ramo de lirios",
    precio: "S/. 60",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Ramo%20de%20lirios.jpeg"
  },
  /* 7 */
  {
    nombre: "Arreglo de girasoles",
    precio: "S/. 120",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Arreglo%20de%20girasoles.jpeg"
  },
  /* 8 */
  {
    nombre: "Arreglo de yerberas",
    precio: "S/. 60",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Arreglo%20de%20yerberas.jpeg"
  },
  /* 9 */
  {
    nombre: "Arreglo de girasoles",
    precio: "S/. 50",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Arreglo%20de%20girasoles_1.jpeg"
  },
  /* 10 */
  {
    nombre: "Ramo ",
    precio: "S/. 90",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol1.jpeg"
  },
  /* 11*/
  {
    nombre: "Arreglo ",
    precio: "S/. 150",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor.jpeg"
  },
  /* 12 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol2.jpeg"
  },
  /* 13*/
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol3.jpeg"
  },
  /* 14 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol4.jpeg"
  },
  /* 15 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol5.jpeg"
  },
  /* 16 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol6.jpeg"
  },
  /* 17 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol7.jpeg"
  },
  /* 18 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol8.jpeg"
  },
  /* 19 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol9.jpeg"
  },
  /* 20 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol10.jpeg"
  },
  /* 21 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol11.jpeg"
  },
  /* 22 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol12.jpeg"
  },
  /* 23 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/girasol13.jpeg"
  },
  /* 24 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Rosas1.jpeg"
  },
  /* 25 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor2.jpeg"
  },
  /* 26 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Flor3.jpeg"
  },
  /* 27 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor4.jpeg"
  },
  /* 28 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor5.jpeg"
  },
  /* 29 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor6.jpeg"
  },
  /* 30 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor7.jpeg"
  },
  /* 31 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor8.jpeg"
  },
  /* 32 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor9.jpeg"
  },
  /* 33 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor10.jpeg"
  },
  /* 34 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor11.jpeg"
  },
  /* 35 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor12.jpeg"
  },
  /* 36 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor13.jpeg"
  },
  /* 37 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor14.jpeg"
  },
  /* 38 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor15.jpeg"
  },
  /* 39 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor16.jpeg"
  },
  /* 40 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor17.jpeg"
  },
  /* 41 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor18.jpeg"
  },
  /* 42 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/flor19.jpeg"
  },
  /* 43 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Rosas2.jpeg"
  },
  /* 44 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/rosas3.jpeg"
  },
  /* 45 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Rosas4.jpeg"
  },
  /* 46 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/Rosas5.jpeg"
  },
  /* 47 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/rosa6.jpeg"
  },
  /* 48 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/rosa7.jpeg"
  },
  /* 49 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/rosa8.jpeg"
  },
  /* 50 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/rosa9.jpeg"
  },
  /* 51 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/rosa10.jpeg"
  },
  /* 52 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/rosa11.jpeg"
  },
  /* 53 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/rosa12.jpeg"
  },
  /*  54 */
  {
    nombre: "Ramo ",
    precio: "S/. 80",
    img: "https://raw.githubusercontent.com/FunkSeba12/Floreria2/main/imagenes/rosa13.jpeg"
  },
];

const porPagina = 9;

function mostrarPagina(pagina) {
  contenedor.innerHTML = "";

  const inicio = (pagina - 1) * porPagina;
  const fin = inicio + porPagina;
  const floresPagina = flores.slice(inicio, fin);

  floresPagina.forEach(flor => {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${flor.img}" alt="${flor.nombre}">
        <h3>${flor.nombre}</h3>
        <p class="price">Precio: ${flor.precio}</p>
        <a class="btn" href="#">Comprar</a>
      </div>
    `;
  });
}

document.querySelectorAll(".pagination a").forEach(boton => {
  boton.addEventListener("click", e => {
    e.preventDefault();
    mostrarPagina(Number(boton.dataset.page));
  });
});

mostrarPagina(1);

