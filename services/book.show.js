angular.module('libraryApp')
  .service('BookService', BookService);

BookService.$inject = ['$http', '$q'];

$http({
  method: 'GET',
  url: 'https://super-crud.herokuapp.com/books/'+id
}).then(onBookShowSuccess, onError);


function onBookShowSuccess(response){
  console.log('here\'s the data for book', id, ':', response.data);
  vm.book = response.data;
}
function onError(error){
  console.log('there was an error: ', error);
}
