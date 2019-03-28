// $(function () {
//   console.log('jQuery way!')
//   $('button').mousedown(function(){
//     $(this).parent().addClass('active');
//   });
//   $('button').mouseup(function(){
//     $(this).parent().removeClass('active');
//   })
// })

console.log('Javascript way!');
const buttons = document.querySelectorAll('button');

/* For holding down */
buttons.forEach(button => {
  button.addEventListener('mousedown', function() {
    this.parentElement.classList.add('active') // add active to li parent
  });
});

buttons.forEach(button => {
  button.addEventListener('mouseup', function() {
    this.parentElement.classList.remove('active') // remove active from li parent
  });
});