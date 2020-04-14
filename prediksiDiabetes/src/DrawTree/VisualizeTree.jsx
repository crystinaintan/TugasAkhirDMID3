// import React, {Component, Fragment} from 'react';
// import useScript from 'hooks/useScript';

// class DrawTree extends Component{
//     MyComponent = props => {
//         useScript('http://d3js.org/d3.v3.min.js');
      
//         // rest of your component
//     }
//     render(){
//         return(
//             <script>
//                 var canvas = d3.select("body").append("svg")
//                     .attr("width", 500)
//                     .attr("height", 500);

//                 var diagonal = d3.svg.diagonal()
//                     .source({x:10, y:10})
//                     .target({x:300, y:300});

//                 canvas.append("path")
//                     .attr("fill", "none")
//                     .attr("stroke", "black")
//                     .attr("d", diagonal);

//             </script>
//         );
//     }

// }

// export default DrawTree;