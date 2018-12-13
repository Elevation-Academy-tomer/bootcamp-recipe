const render = new Renderer();

const fetchData = function () {
    let input = $("#food-input").val()
    let inputIng = $("#ingredients-input").val()
    inputIng != "" ? 
    $.get(`ingredients/${inputIng}`, function (data) {
        
      return  render.renderRecipesFilter(data)
    })
    : 

    $.get(`recipes/${input}`, function (data) {
        console.log(data)
        render.renderRecipes(data)
    })
}

$.get(`/sanity`, function (data) {
   console.log(data)
})