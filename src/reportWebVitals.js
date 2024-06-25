//Element
const reportWebVitals = onPerfEntry => {
  //Element
  if ( onPerfEntry && onPerfEntry instanceof Function ) {
    //Element
    import( "web-vitals" ).then( ( { getCLS, getFID, getFCP, getLCP, getTTFB } ) => {
      //Element
      getCLS( onPerfEntry );
      //Element
      getFID( onPerfEntry );
      //Element
      getFCP( onPerfEntry );
      //Element
      getLCP( onPerfEntry );
      //Element
      getTTFB( onPerfEntry );
    });
  }
};
//Element
export default reportWebVitals;