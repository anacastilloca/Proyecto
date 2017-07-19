/**
 * AdmAutController
 *
 * @description :: Server-side logic for managing Admauts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//sails generate controller AdmAut

var pwdControlador = require('machinepack-passwords');
var token = require('jsonwebtoken');

module.exports = {
  logIn: function (req, res) {
    var parametros = req.allParams();
    if (parametros.correo && parametros.clave) {
      Usuario.findOne({
        correo: parametros.correo
      })
        .exec(function (err, usuarioEncontrado) {
          if (err) return res.serverError("Error", err);
          if (!usuarioEncontrado) {
            return res.notFound("Usuario no Encontrado");
          } else {
            pwdControlador.checkPassword({
              passwordAttempt: parametros.clave,
              encryptedPassword: usuarioEncontrado.clave
            }).exec({
                error: function (err) {
                  return res.serverError(err);
                },
                incorrect: function () {
                  return res.badRaquest("Datos Invalidos")
                },
                success: function () {
                  // devolver la credencial
                  var token = token
                    .sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: {
                          id: usuarioEncontrado.id,
                          nombre: usuarioEncontrado.nombreUsuario,
                          correo: usuarioEncontrado.correo
                        }
                      },
                      'EcuaFestEsMejor');

                  return res.ok(token);
                }
              });
          }
        });
    } else {
      return res.badRequest("No envia correo y pass");
    }
  },
  logOut: function (req, res) {
  },

};

