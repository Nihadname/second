let LiElementsList1=document.querySelectorAll("#list1>li");
let LiElementsList2=document.querySelectorAll("#list2>li");
let LiElementsNew=document.querySelector("#newList");

function ToPushLiElementsToNewOne(){
  let compents=  Array.from(LiElementsList1);
  let GettingText=compents.map(items=>items.textContent);
let compents2=Array.from(LiElementsList2);
let GettingText2=compents2.map(items=>items.textContent);
let GettingCombinedVersion=GettingText.concat(GettingText2);
let uniqueComponents = new Set(GettingCombinedVersion);
uniqueComponents.forEach(elemnts=>{
    let resultValues = document.createElement("li");
    resultValues.classList.add("list-group-item")
    resultValues.textContent = elemnts;
    LiElementsNew.appendChild(resultValues);
})
}
ToPushLiElementsToNewOne();