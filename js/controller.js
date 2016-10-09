define(
    'controller',
    ['model', 'view', 'jquery'],
    function (model, view) {
        function Controller(model, view) {
            var self = this;

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item__delete', removeItem);
            view.elements.listContainer.on('click','.item__edit', editItem);

            function addItem() {
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            };
            function removeItem() {
                var item = $(this).attr('data-value');
                model.removeItem(item);
                view.renderList(model.data);
            };
            function editItem() {
                var item = $(this).attr('data-value');
                var editText = $('<input type="text">');
                var saveItem = $('<button class="item__save item__btn">Save</button>');
                var element = model.editItem(item);
                editText.val(element);
                model.removeItem(item);
                $(this).parent().empty().append(editText).append(saveItem);
                $('.item__save').on('click', function() {
                    if($('input:text')[0].value) {
                        model.saveItem($('input:text')[0].value, element);
                        view.renderList(model.data);
                    };
                });
            };
        };
        return new Controller(model, view);
    }
);