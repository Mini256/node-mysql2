"use strict"

/**
 * Get a socket stream compatible with the current runtime environment.
 * @returns {Socket}
 */
module.exports.getStream = function getStream(ssl = false) {
  const net = require('net')
  if (typeof net.Socket === 'function') {
    console.log('using node socket');
    return net.Socket()
  }
  const { CloudflareSocket } = require('pg-cloudflare')
  console.log('using cloudflare socket');
  return new CloudflareSocket(ssl);
}
