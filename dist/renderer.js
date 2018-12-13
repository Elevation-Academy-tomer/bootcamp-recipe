class Renderer {
    constructor(){
    }
    renderplayers(food) {
        $(".food-container").empty();
        const source = $('#food-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({players});
        $(".food-container").append(newHTML);

    }
}
