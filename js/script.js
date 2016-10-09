function Model(){
 var self=this;
  self.data=['','',''];
  self.addItem = function (item){
     if (item.length==0){
	     return;
	 }
	 self.data.push(item);
	 return self.data;
  };
   self.removeItem = function (item){
     var index=self.data.indexOf(item);
	 if(index===-1){
	    return;
	 }
	 self.data.splice(index, 1);
	 return self.data;
	 };
	 }
function View(model) {
   var self=this;
    function init() {
      var wrapper=tmpl($('wrapper-template').html(), {data: data})
      $('body').html(wrapper);
	  self.elements = {
	     input: $('.item-value'),
		 addBtn: $('.item-add'),
		 listContainer: $('.item-list')
	  };
	  self.renderList(modul.data)
   };
   self.remberList = function (data){
        var list= tmpl($('#list-template').html(),{data: data});
		self.elements.listContainer.html(list);
   }
   init();
}
function Controller(model,view){
  var self= this;
  view.elements.addBtn.on('click',addItem);
   //добавл€ет новое значение из инпутов в модель
   function addItem(){
       var newItem= view.elements.input.val();
	   model.addItem(newItem);
	   view.renderList(model.data);
	   
	   // посде того как добавили нов≥й Їлемент очищаем строку 
	   view.elements.input.val('');
   }
   function removeItem(){
   //в≥т€гиваем значение атрибута
   var item= $(this).attr('data-value');
   //из модели удал€ем значение
   
   model.removeItem(item);
   view.renderList(model.data);
   }
}
$(function () {
   var modul = new Modul();
   var view= new View(modul);
   var controller= new Controller(model, view);
   
});