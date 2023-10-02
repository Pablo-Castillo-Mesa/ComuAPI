const express = require('express');
const router = express.Router();
const bearerKeyController = require('../controllers/bearer_key_controller.js');



/**
 * @openapi
 * /api/v1/get-key:
 *   get:
 *     tags:
 *     - "Historial Jugadores"
 *     summary: Devuelve el historial de datos diario de un jugador marcado por ID.
 *     description: Devuelve el historial de datos diarios de un jugador identificado por su ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del jugador.
 *         required: true
 *         schema:
 *           type: integer
 *       - name: campos
 *         in: query
 *         description: campos que van a ser mostrados al hacer la peticion.
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de registros por día del jugador.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 *                 id_jugador:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 fecha_registro:
 *                   type: date
 *                 equipo:
 *                   type: string
 *                 ranking_general:
 *                   type: integer
 *                 ranking_equipo:
 *                   type: integer
 *                 ranking_posicion:
 *                   type: integer
 *                 tarjeta_amarilla:
 *                   type: integer
 *                 tarjeta_roja:
 *                   type: integer
 *                 doble_tarjeta_amarilla:
 *                   type: integer
 *                 titular:
 *                   type: boolean
 *                 mejor_fichaje:
 *                   type: boolean
 *                 media_sofascore:
 *                   type: number
 *                   format: double
 *                   example: "0.00"
 *                 media_puntos:
 *                   type: number
 *                   format: double
 *                   example: 0.00
 *                 total_puntos:
 *                   type: number
 *                   format: double
 *                   example: 0.00
 *                 puntos_buenos:
 *                   type: integer
 *                 oferta_minima:
 *                   type: integer
 *                 valor_mercado:
 *                   type: integer
 *                 propietario:
 *                   type: string
 *                 posicion:
 *                   type: string
 *                 racha:
 *                   type: string
 *                 partidos_jugados:
 *                   type: string
 *                 lesion:
 *                   type: string
 *       500:
 *         description: Internal server error.
 */
/*
router.get('/get-key', bearerKeyController.postKey);
*/

module.exports = router;