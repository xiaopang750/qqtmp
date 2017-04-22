// ajax 设置数据如下
// var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];
// $(".select").select2({
//   data: data
// })

$(".select").select2({
  minimumResultsForSearch: Infinity
});

new Placeholder($('[input-area]'),{
  index:5,
  color: '#666'
});
