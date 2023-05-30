$(() => {

  //Dupliquons le contenu de #introduction pour l'insérer dans #introduction-copy.

 $('#introduction-copy').html($('#introduction').html())

  //Initialisez la liste d'éléments #goals grâce aux valeurs suivantes :
  // Récupérer le code HTML
  // Modifier le CSS
  // Parcourir une liste d'éléments
  // Associer des données à un élément


    let element = $( "#goals" )
  
    $.data( element, "goals", {
      0 : "Récupérer le code HTML",
      1 : "Modifier le CSS",
      2 : "Parcourir une liste d'éléments",
      3 : "Associer des données à un élément"
    })
  
    $('#goals li').each(function(index) {
      $(this).text($.data( element, "goals" )[index])
    });

  // ajoutons un message qui, avec le click sur le bouton "submit" s'affiche pour 
  // remercier le client d'avoir valider la saisie:
  $('#contact-form').prepend('<h2>Formulaire d\'inscription</h2>');
  $('section h2').css({
    'color' : 'green',
    'font-style': 'italic',
  
  });

  $('#contact-form').submit((e) => {
    e.preventDefault();
  }); // script permettant d'annuler la validation par defaut

  $('#send-data').click(() => {
    $('#contact-form').append('<p>Merci pour votre saisie !</p>').css({
      'color' : 'grey',
      'background' :'lightyellow',
      'border' : '1px solid black',
      'border-radius' : '10px',
      'padding' : '15px'
    }) //opération ciblage de form

  });

  // pour pouvoir supprimer le message de remerciment = "p",on va cilber le bouton reset
   // puis lui appliquer la method remove()
  $('#reset-data').click(() => {
    $('#contact-form p').remove();
    
  })

  // Lorsque'un utilisateur saisit un commentaire,la valeur de la texte doit se retrouver 
  // dupliquée dans le paragraphe #commentValue au fil de la saisie de l'utilisateur.
  
  // on utilise la method .keyup()

  $('#comment').keyup(function () {
    $('#commentValue').html($(this).val())
  });

  // animation 
  $('#content').hide(2000).delay(1000).show(2000).hide(2000);

});