const toDoform = document.querySelector(".js-toDoForm"),
    toDoinput = toDoform.querySelector("input"),
    toDoList =document.querySelector(".js-toDoForm");
const TODOS_LS ='toDos';

let toDos = [];

function deleteToDo(event){
    //이벤트를 수행하는 문서객체를 의미 이를 console.dir(event.target) 을 수행하게 되면 해당 객체의 속성과 메서드를 모두 볼수 있음
   const btn = event.target;
   const li = btn.parentNode;
   toDoList.removeChild(li);
   //filter는 특정 조건에 만족하는 요소만을  array로 리턴함
   const cleanToDos = toDos.filter(v => {
       return v.id !== parseInt(li.id);
   })
   toDos = cleanToDos
   saveToDos();
}

//배열에 저장된 객체를 JSON 데이터포맷으로 고쳐서 LOCAL에 저장
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function patintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText= "X";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    //할일 목록을 문서에 리스트로 표현
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    //할일목록을 객체로 생성하고 리스트에 저장
    //localstorage 는 무조건 string을 사용해서 저장하려고 한다.
    const toDoObj = {
        text:text,
        id:toDos.length+1
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoinput.value;
    patintToDo(currentValue);
    toDoinput.value = "";
    
}
//저장된 TOdo list를 불러옴
function loadToDos(){
    const loadtoDos = localStorage.getItem(TODOS_LS);
    if(loadtoDos !== null){
        const parsedToDos = JSON.parse(loadtoDos);
        parsedToDos.forEach(v => {
            patintToDo(v.text);
            
        });
    }
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit)
}

init();