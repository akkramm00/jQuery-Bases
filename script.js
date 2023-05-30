$(() => {
    alert('jQuery est bien configuré !')

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
    })
  
  

});