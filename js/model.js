define(
    'model',
    ['jquery'],
    function (data) {
        function Model (data) {
            var self = this;
            self.data = data;

            self.addItem = function (item) {
                if (item.length === 0) {
                    return;
                };
                self.data.push(item);
                return self.data;
            };

            self.removeItem = function (item) {
                var index = self.data.indexOf(item)
                if (index === -1) {
                    return;
                };
                self.data.splice(index, 1);
                return self.data;
            };

            self.editItem = function (item) {
                $('span').attr('disabled', true);
                var index = self.data.indexOf(item);
                if (index === -1) {
                    return;
                };
            };
            self.saveItem = function (item, index) {
                if (item.length === 0){
                    return;
                }
                $('span').removeAttr('disabled');
                self.data.splice(index, 0, item);
            };
        };
        return new Model(['test 1', 'test 2', 'test 3']);
    }
);