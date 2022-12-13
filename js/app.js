
const main = document.querySelector(".main");

const addBtn = document.getElementById("addBtn");
const delNote = document.querySelector(".delete");




addBtn.addEventListener("click",()=>{
    addNote();
})

const saveNotes = () =>{
  const notes = document.querySelectorAll(".note textarea");
  const data = [];
  notes.forEach((note)=>{
    if(note.value !== ""){
      data.push(note.value);
    }
  })
 
  if(data.length == 0){
    localStorage.removeItem("notes");
  }else{
    localStorage.setItem("notes",JSON.stringify(data));
  }
}





const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
  <div class="tool">
  <i class="save fa-solid fa-floppy-disk"></i>
  <i class="delete fa-solid fa-trash"></i>
   </div>
  <textarea>${text}</textarea>
  `;
const delNote = note.querySelector(".delete");

delNote.addEventListener("click",function(){
   note.remove();
   saveNotes();
})

note.querySelector(".save").addEventListener("click",()=>{
    saveNotes();
})

main.appendChild(note);
// saveNotes();
}



(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if(lsNotes === null){
            addNote();
        }else{
            lsNotes.forEach((lsnote)=>{
                addNote(lsnote);
            })
        }
    }
)();