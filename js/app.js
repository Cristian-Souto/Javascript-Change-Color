console.log('Hello World');
const btn = document.getElementById('btn');
const seccion = document.getElementById('seccion');

//generar un color aleatorio
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  return color;
}

btn.addEventListener('click', function(){
  document.body.style.backgroundColor = generateRandomColor();
})