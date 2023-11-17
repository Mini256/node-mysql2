"use strict"

/**
 * Get a socket stream compatible with the current runtime environment.
 * @returns {Socket}
 */
module.exports.getStream = function getStream(ssl = false) {
  const net = require('net')
  if (typeof net.Socket === 'function') {
    return net.Socket
  }
  const { CloudflareSocket } = require('pg-cloudflare')
  return new CloudflareSocket(ssl);
}
