define(
    'view',
    ['jquery', 'tmpl', 'model'],
    function(model) {
        function View(model) {
            var self = this;
            function init () {
                var wrapper = tmpl($('#wrapper__template').html());
                $('body').append(wrapper);
                self.elements = {
                    input: $('.item__value'),
                    addBtn: $('.item__add'),
                    listContainer: $('.item__list')
                };
                self.renderList(model.data);
            };
            model.data = ['test 1', 'test 2', 'test 3'];
            self.renderList = function (data) {
                var list = tmpl($('#list__template').html(), {data: data});
                self.elements.listContainer.html(list);
            };
            init();
        };
        return new View(model)
    }
);