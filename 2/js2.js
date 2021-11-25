const btnNode = document.querySelector('.btn');

btnNode.addEventListener('click', () => { 
  alert(`Ширина экрана: ${screen.width}, высота: ${screen.height}`);
})