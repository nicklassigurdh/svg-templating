(function() {

    var svg1 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">'+
            '<rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>'+
            '</svg>',
        svg2 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">'+
            '<rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>'+
            '</svg>',
        svg3 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">'+
            '<circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>'+
            '</svg>',
        svg4 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">'+
            '<ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>'+
            '</svg>',
        svg5 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">'+
            '<line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5"/>'+
            '</svg>',
        svg6 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">'+
            '<polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"'+
            'stroke="orange" fill="transparent" stroke-width="5"/>'+
            '</svg>',
        svg7 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">'+
            '<polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"'+
            'stroke="green" fill="transparent" stroke-width="5"/>'+
            '</svg>',
        svg8 = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">'+
            '<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>'+
            '</svg>';

        if(svg){

            svg.add('svg1', svg1);
            svg.add('svg2', svg2);
            svg.add('svg3', svg3);
            svg.add('svg4', svg4);
            svg.add('svg5', svg5);
            svg.add('svg6', svg6);
            svg.add('svg7', svg7);
            svg.add('svg8', svg8);

        }


}())
