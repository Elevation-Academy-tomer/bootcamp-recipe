class Renderer {
    constructor(){
    }
    renderRecipes(food) {
        let results = food.results
        $(".food-container").empty();
        const source = $('#food-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({results});
        $(".food-container").append(newHTML);

    }
    renderRecipesFilter(results){
        $(".food-container").empty();
        const source = $('#food-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({results});
        $(".food-container").append(newHTML);
    }
}
