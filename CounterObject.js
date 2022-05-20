function getCount(objects) {
    var x = objects.filter(function(o) { return o.x == o.y }).length
    return x
}