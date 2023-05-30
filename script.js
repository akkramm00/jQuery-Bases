$(() => {
    alert('jQuery est bien configuré !')

//Dupliquons le contenu de #introduction pour l'insérer dans #introduction-copy.

 $('#introduction-copy').html($('#introduction').html())



});