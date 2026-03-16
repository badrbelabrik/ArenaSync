export function getTournamentslocal(){
    return JSON.parse(localStorage.getItem("tournaments")) || []
}

export function setTournamentslocal(tournaments){
    localStorage.setItem("tournaments", JSON.stringify(tournaments))
}


