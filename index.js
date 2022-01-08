let index = 1;

const displayNone = (num) => {
    document.querySelector(`.slides${num}`).style.display = 'none';
}

const displayBlock = (num) => {
    document.querySelector(`.slides${num}`).style.display = 'block';
}

document.querySelector(".next").addEventListener('click', function () {
    index++;
    if (index == 6) {
        index = 1;
        displayBlock(index);
        displayNone(5);
    }
    else if (index < 6) {
        displayBlock(index);
        let prevIndex = index - 1;
        if ((prevIndex) > 0 && (prevIndex) < 6) {
            displayNone(prevIndex);
        }
    }
})


document.querySelector(".prev").addEventListener('click', function () {
    index--;
    if (index == 0) {
        index = 5;
        displayBlock(index);
        displayNone(1);
    }
    else if (index > 0) {
        displayBlock(index);
        let nextIndex = index + 1;
        if ((nextIndex) > 0 && (nextIndex) < 6) {
            displayNone(nextIndex);
        }
    }
})


function searching() {
    let filter = document.getElementById("search").value.toUpperCase();
    let movieTitle = document.getElementsByClassName("movie-title");


    for (let i = 0; i < movieTitle.length; i++) {
        const element = movieTitle[i];
        let parent = movieTitle[i].parentNode;
        let grandParent = parent.parentNode;

        if ((element.textContent.toUpperCase()).indexOf(filter) > -1) {
            grandParent.style.display = '';
        } else {
            grandParent.style.display = 'none';
        }
    }
}

function getAllSiblings(element, parent) {
    const children = [...parent.children];
    return children.filter(child => child !== element);
}

function selection() {
    const selected = document.getElementById("dropdown-select").value.toLowerCase();
    if (selected == "all") {
        const child = document.getElementsByClassName('image-container-action')[0].childNodes;
        for (let i = 1; i < child.length; i++) {
            child[i].style.display = "block";
            i++;
        }
        let x = 5;
        let y = 6;
        var res = eval("x*y")
        console.log(res);
        return;
    }
    console.log(selected);
    const element = document.getElementsByClassName(`movies-${selected}`)[0];
    let filteredSiblings = getAllSiblings(element, element.parentNode);
    console.log(filteredSiblings);

    for (let i = 0; i < filteredSiblings.length; i++) {
        filteredSiblings[i].style.display = "none";
    }

    element.style.display = "block";
}