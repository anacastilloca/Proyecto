/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var pswUsuario = require('machinepack-passwords');
module.exports = {
  attributes: {
    nombreUsuario:{
      type:'string'
    },
    rolUsuario:{
      type:'string'
    },
    correo:{
      type:'email'
    },
    clave:{
      type:'string'
    }
  },
  beforeCreate: function (usuario, cb) {
    pswUsuario.encryptPassword({
      password: usuario.clave,
    }).exec({
      error: function (err) {
        cb("Error en hash contraseña", err)
      },
      success: function (hashedContrasenia) {
        usuario.clave = hashedContrasenia;
        cb();
      },
    });
  },
  beforeUpdate:function (valorActualizar,cb) {
    if(valorActualizar.clave) {
      pswUsuario.encryptPassword({
        password: valorActualizar.clave,
      }).exec({
        error: function (err) {
          cb("Error en hash contraseña", err)
        },
        success: function (hashedContrasenia) {
          valorActualizar.clave = hashedContrasenia;
          cb();
        },
      });
    }else {
      cb()
    }
  }
};

