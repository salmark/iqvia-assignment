$(document).ready(function() {
  $('#data-table').DataTable( {
  
    "dom": '<"top"i>rt<"bottom"flp><"clear">',
    "ordering": false,
      columnDefs: [ {
          orderable: false,
          className: 'select-checkbox',
          targets:   0
      } ],
      select: {
          style:    'os',
          selector: 'td:first-child'
      },
      language: {
        paginate: {
          next: '&#129170;', // or '→'
          previous: '&#129168;' // or '←' 
        }
      },
      order: [[ 1, 'asc' ]]
  } );
} );