
console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();
$( '#viewKoalas').on( 'click', '.markReadyButton', markReady);
$( '#viewKoalas').on( 'click', '.markNotReadyButton', markNotReady);
$( '#viewKoalas').on( 'click', '.deleteButton', deleteKoala);
$( '#addButton').on( 'click', clearInputs);

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $( '#nameIn' ).val(),
      age: $( '#ageIn' ).val(),
      gender: $( '#genderIn' ).val(),
      readyForTransfer: $( '#readyForTransferIn' ).val(),
      notes: $( '#notesIn' ).val(),
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function clearInputs(){
  console.log('in clearInputs ');
  $( '#nameIn' ).val('')
  $( '#ageIn' ).val('')
  $( '#genderIn' ).val('')
  $( '#readyForTransferIn' ).val('')
  $( '#notesIn' ).val('')

}// end clear inputs

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koala.router'
  }).then ( function (response){
    console.log('back from GET' , response);
    // let showButton = ''
    let el = $('#viewKoalas');
    el.empty();
    for (let i=0; i<response.length; i++){
      
    // let showButton = `data-id= "${response[i].id}`
    // if (response[i].ready_for_transfer === false){
    //     } // end iff
        
      el.append( `<tr><td>${response[i].name} </td> 
      <td>${response[i].age} </td> 
      <td>${response[i].gender} </td>
      <td>${response[i].ready_for_transfer} <button class="markReadyButton" 
      data-id= "${response[i].id}">Mark Ready </button> 
      </td> 
      <td>${response[i].notes} 
      <button class="deleteButton" 
      data-id= "${response[i].id}">Delete </button>
      </td> 
      </tr>` );
    
  } // end loop
  }).catch ( function (err){
    console.log(err);
    alert ('err in get');
  })
  
} // end getKoalas

// ajax call to server to get koalas
function saveKoala( newKoala ){
  console.log( 'in saveKoala new info being taken from dom is:', newKoala );
  $.ajax({
    method: 'POST',
    url: '/koala.router',
    data: newKoala
  }).then( function( response ){
    console.log('back from POST', response);
    getKoalas();
  }).catch( function (err){
    console.log(err);
    alert('error in POST')

  })

}// end saveKoala


function markReady (){
  console.log('in markReady id:', $(this).data('id'));
  $.ajax({
    method: 'PUT',
    url: `/koala.router?id=${$(this).data('id')}`
  }).then( function (response){
    console.log(response);
    getKoalas();
  }).catch( function (err){
    console.log(err);
    alert('error in markReady');
  })
} // end markReady

function markNotReady (){
  console.log('in markNotReady id:', $(this).data('id'));
  $.ajax({
    method: 'PUT',
    url: `/koala.router?id=${$(this).data('id')}`
  }).then( function (response){
    console.log(response);
    getKoalas();
  }).catch( function (err){
    console.log(err);
    alert('error in markNotReady');
  })
} // end markReady

function deleteKoala (){
  console.log('in deleteKoala id:', $(this).data('id'));
  $.ajax({
    method: 'DELETE',
    url: `/koala.router?id=${$(this).data('id')}`
  }).then( function (response){
    console.log(response);
    getKoalas();
  }).catch( function (err){
    console.log(err);
    alert('error in delete koala')
  })
} // end deleteKoala
