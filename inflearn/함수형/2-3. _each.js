function _filter(list, predi) {
  var new_list = [];
  _each(list, function(val) {
    if (predi(val)) new_list.push(val);
  });
  return new_list;
}
/* --- End of _filter --- */

function _map(list, mapper) {
  var new_list = [];
  _each(list, function(val) {
    new_list.push(mapper(val));
  });
  return new_list;
}
/* --- End of_map  --- */

function _each(list, liter) {
  for (var i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}
