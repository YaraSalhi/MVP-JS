// import React, { Component } from 'react';

// class App extends Component  {
//     constructor(props){
//         super(props)

//        this.state = {
//         data:[]
//         };
//     }
    
   
// componentDidMount(){
//     var that = this;
//     // var id = window.location.href.split('=')[1];
//     $.ajax({
//         url:"/reservations",
//         type:"GET",
//         dataType:"json",
//         success:function(data){
//         //   console.log(data);
//           that.setState({data:data})
//           console.log(that.state.data)
          
//         },
//         error:function(err){
//           console.log(err)
//         }
//       });
//     }

// render(){
//   const listItems = this.state.data.map((reservationsSchema) =>
//         <div >
//      <div>{reservationsSchema.hallsImg}</div>
//      <div>{reservationsSchema.saloonsImg}</div>
//      <div>{reservationsSchema.flowersImg}</div>
//      <div>{reservationsSchema.tuxedosImg}</div>
//      <div>{reservationsSchema.dressesImg}</div>
//      <div>{reservationsSchema.cakeImg}</div>
//      <div>{reservationsSchema.restaurantsImg}</div>
//      <div>{reservationsSchema.extraImg}</div>


//      </div>
    

// );
//   return (
//       <div >
//           {listItems}
//       </div>
//   )
// }
// }          


// export default App;




