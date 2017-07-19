/**
 * Actividad.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreActividad:{
      type:'string'
    },
    direccionActividad:{
      type:'string'
    },
    descripcionActividad:{
      type:'string'
    },
    fechaActividad:{
      type:'date'
    },
    imagenActividad:{
      type:'string'
    },
    idFestividad:{
      model:"Festividad"//Modelo a Relacionar (Papa)
    }

  }
};

