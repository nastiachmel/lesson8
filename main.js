// 1.Создать HTML-страницу для отображения/редактирования текста. 
// При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E,
//  вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , 
// вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

document.body.addEventListener('keydown', (e) => {
  e = e || window.event;
  let key = e.which || e.keyCode; 
  let ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false); 
 
  let newText ='';
  if(key== 69 && ctrl){
    document.querySelector('.new-text').style.display='block';
    document.querySelector('.text').style.display='none';
    let textDiv =document.querySelector('.text').innerHTML;
    document.querySelector('.new-text').innerHTML = textDiv;
    e.preventDefault();  
  }

  if(key== 107 && ctrl){
    document.querySelector('.new-text').style.display='none';
    document.querySelector('.text').style.display='block';
    let textTextarea = document.querySelector('.new-text').value;
    document.querySelector('.text').innerHTML=textTextarea; 
    e.preventDefault();  
  }
});

// 2.Создать HTML-страницу с большой таблицей. При клике по заголовку
//  колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.

let sorted = document.querySelector('.sort-table');

sorted.onclick = function(e) {
  if (e.target.tagName != 'TH') return;
  sort(e.target.cellIndex, e.target.getAttribute('data-type'));
};

function sort(col, type) {
  let el = sorted.getElementsByTagName('tbody')[0];
  console.log(el);
  let array = [].slice.call(el.rows);
  let newList;

if(type=='number'){
  newList  = function(a, b) {
    return a.cells[col].innerHTML - b.cells[col].innerHTML;
}} else{
  newList = function(a, b) {
    return a.cells[col].innerHTML > b.cells[col].innerHTML ? 1 : -1;
  }
}
  array.sort(newList);
  for (let i = 0; i < array.length; i++) {
    el.appendChild(array[i]);
  }

}


//3.Создать HTML-страницу с блоком текста в рамочке.
// Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.


const el = document.querySelector('.block-text');

el.addEventListener('mousedown', mousedown);


const resizeEl = document.querySelectorAll('.resize');

  function mousedown(e){
    current=e.target;
    let prevX =e.clientX;
    let prevY =e.clientY;
    window.addEventListener('mousemove', mousemove);

    function mousemove(e){
      const rect =el.getBoundingClientRect();
      el.style.width= rect.width - (prevX - e.clientX) +'px';
      el.style.height= rect.height- (prevY - e.clientY) +'px';    
      prevX=e.clientX;
      prevY=e.clientY;
     }
    window.addEventListener('mouseup', mouseup);

    function mouseup(){
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mousedown', mousedown);
    }
  }
