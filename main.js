let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #af4b80;">Estoy en el proceso de aprendizaje, me gusta el desarrollo web y también el manejo de bases de datos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
