function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested")
}

function increaseRankBy(n){
  const list = document.querySelectorAll(".ranked-list")
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = list[i].parseInt + 1
  }
}

function deepestChild(){
  var addStr = "#grand-node"
  let item = document.querySelector(addStr)
  while(item) {
    var finalStr = addStr
    addStr = addStr + " div"
    item = document.querySelector(addStr)
  }
  return document.querySelector(finalStr)
}
