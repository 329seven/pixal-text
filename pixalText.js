var pixalText = document.getElementsByClassName("pixal-text");
var tabletBreakPoint = 991;  

function fontResize( node ) {
    let zoom = ((window.outerWidth - 10) / window.innerWidth) * 100;
    zoom = zoom > 150 ? 150 : zoom < 50 ? 50 :zoom;
    var width = window.innerWidth;
    for (let i = 0; i < node.length; i++) {
        if (node[i].getAttribute('pixal-text') != null) {
            var dimensions = node[i].getAttribute('pixal-text').split(",");
            if ( width > tabletBreakPoint) { 
                if (dimensions[0] !== null) {
                    var remSize = (((width / 100) * Number(dimensions[0])) / 16) * (Math.round(zoom) / 100); 
                    node[i].style.fontSize = remSize + "rem";
                }
                if (dimensions[1] !== null) {
                    var lineHeight = (((width / 100) * Number(dimensions[1])) / 16) * (Math.round(zoom) / 100);
                    node[i].style.lineHeight = lineHeight + "rem";
                }
           } else {
                let mobileFont =  dimensions[2] != null ? 2 : 0
                let mobileLine =  dimensions[3] != null ? 3 : 1
                if (mobileFont !== null) {
                    var remSize = (((width / 100) * Number(dimensions[mobileFont])) / 16) * (Math.round(zoom) / 100); 
                    node[i].style.fontSize = remSize + "rem";
                }
                if (dimensions[mobileLine] !== null) {
                    var lineHeight = (((width / 100) * Number(dimensions[mobileLine])) / 16) * (Math.round(zoom) / 100);
                    node[i].style.lineHeight = lineHeight + "rem";
                }
               
           }
        }
    } 
}

fontResize( pixalText )
window.addEventListener('resize', fontAdjust);
function fontAdjust() {
    fontResize(pixalText)
}