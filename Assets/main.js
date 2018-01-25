const add = document.querySelector('.add');
const txt = document.querySelector('#txt-area');
const addNow = document.querySelector('.add-now');
const cancel = document.querySelector('.cancel');
const del = document.querySelector('.delete');
const deleteAll = document.querySelector('#delete-all');
const newStatus = document.querySelector('#new-status');
const edit = document.querySelectorAll('#edit');


// Delete all the status on the screen
deleteAll.addEventListener('click', () => {
    document.querySelectorAll('.main').forEach((ele) => {
        ele.style.display = 'none';
    });
});

// Add New Status List
newStatus.addEventListener('click', () => {
    const status = prompt('Enter New Status');
    console.log(status);
    document.body.innerHTML +=  `<main class="container">
    <div class="list">
        <h4 class="hero">${status}</h4>
        <div class="show-card">
            <div class="container" id="appending">
                <div class="jumbotron inner-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, tempora.
                    <div class="extra">
                        <button class="btn btn-danger btn-sm delete">delete</button>
                        <button class="btn btn-secondary btn-sm edit">edit</button>
                    </div>
                </div>
                <div class="jumbotron inner-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div class="extra">
                        <button class="btn btn-danger btn-sm delete">delete</button>
                        <button class="btn btn-secondary btn-sm edit">edit</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <textarea rows="4" name="text" id="txt-area" class="form-control inner-content" style="resize:vertical;display:none"></textarea>
        </div>
        <button class="btn btn-primary add">Add a Card</button>
        <button class="btn btn-primary add-now" style="display: none">Add</button>
        <button class="btn btn-danger cancel" style="display: none" onclick="reset()">Cancel</button>
    </div>
</main>`
});

// function editCard(e) {
//     console.log(e.target);
// }

add.addEventListener('click', () => {
    txt.style.display = 'block';
    add.style.display = 'none';
    addNow.style.display = 'inline';
    cancel.style.display = 'inline';
});

// Adding Tasks on the card
addNow.addEventListener('click', () => {
    if (!txt.value) {
        alert('Task Cannot be Empty');
    }
    document.getElementById('appending').innerHTML +=`
    <div class="jumbotron inner-content">${txt.value}
        <div class="extra">
            <button class="btn btn-danger btn-sm delete">delete</button>
            <button class="btn btn-secondary btn-sm edit" id="edit">edit</button>
        </div>
    </div>`;
    reset();
    return false;
});

console.log(edit);
edit.forEach((edt) => {
    edt.addEventListener('click', (e) => {
        console.log('clicked');
    });
});

// Reseting values
function reset() {
    txt.value = '';
    addNow.style.display = 'none';
    add.style.display = 'block';
    txt.style.display = 'none';
    cancel.style.display = 'none';
}

