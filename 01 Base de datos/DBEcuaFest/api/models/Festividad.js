/**
 * Festividad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreFestividad:{
      type:'string'
    },
    provinciaLugarFestividad:{
      type:'string'
    },
    mesFestividad:{
      type:'string'
    },
    imagenLugarFestividad:{
      type:'string'
    },
    listaActividadesDeFestividad:{
      collection: 'Actividad', //Es el nombre del MODELO a relacionar (hijo)
      via: 'idFestividad' //Es el nombre del FOREIGN KEY
    },
    listaComidadDeFestividad:{
      collection: 'Food',
      via: 'idFestividad'
    },
    listaHotelesDeFestividad:{
      collection: 'Hotel',
      via: 'idFestividad'
    }
  }
};

