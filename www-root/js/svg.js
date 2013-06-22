//TODO: Make up a better unique name
(function(){
    var Svg = function () {

        var svgs = {};

        return {
            stringify : function(svgName){
                console.log('Return svg-string for: ' + svgName);
                return svgs[svgName];
            },
            render : function (svgName, classString) {
                console.log('Render svg: ' + svgName + ' in element with class: ' + classString);

                var els = document.getElementsByClassName(classString);

                for (var i = 0; i < els.length; i++) {
                    els[i].innerHTML = svgs[svgName];
                }
            },
            add : function(svgName, svgString) {
                console.log('Adding svg with name: ' + svgName);
                svgs[svgName] = svgString;
            },
            remove : function(svgName) {
                console.log('removing svg with name: ' + svgName);
            },
            listSvgs : function () {
                for (var key in svgs) {
                    if(svgs.hasOwnProperty(key)){
                        console.log(key);
                        console.log(svgs[key]);
                    }
                }
            }
        }
    };

    window.svg = new Svg;

}())