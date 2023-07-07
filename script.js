const input = document.getElementById('task-input')
const btn = document.getElementById('add-btn')
const lists = document.querySelector('.lists')

function addTask() {
    if(input.value === ''){
        alert('Enter valid input')
    }else{
       let div = document.createElement('div')
       let dataContainer = document.createElement('div')
       let span1 = document.createElement('h6')
       let task = document.createElement('p')
       let span2 = document.createElement('span')
       task.innerText = input.value
     
       span2.innerHTML = '&#10005'

       div.classList.add('list')
       dataContainer.classList.add('data')
       span1.classList.add('check')
       span2.classList.add('delete')

      lists.appendChild(div)
      div.appendChild(dataContainer)
      dataContainer.appendChild(span1)
      dataContainer.appendChild(task)
      div.appendChild(span2)
       
      input.value = ''
    
    }
}

lists.addEventListener('click' , (e)=>{
 
    if (e.target.tagName  === 'H6') {
       e.target.innerHTML?'':'&#10004'


    }else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }


}, false);



btn.addEventListener('click' , ()=>{
    addTask()
})