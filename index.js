// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.splice(2,1)
}

function destructivelyRemoveFirstCat(){
    cats.splice(0,1)
}

function appendCat(){
    const newCats= [...cats,"Broom"]
    return newCats
}

function prependCat(){
    const oldCats = ["Arnold", ...cats]
    return oldCats
}

function removeLastCat(){
    const lastCat = [...cats.slice(0,2)]
    return lastCat
}

function removeFirstCat(){
    const firstCat =[...cats.slice(1,3)]
    return firstCat
}
