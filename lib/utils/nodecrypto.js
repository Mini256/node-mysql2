'use strict'
// This file contains crypto utility functions for versions of Node.js < 15.0.0,
// which does not support the WebCrypto.subtle API.

const nodeCrypto = require('crypto')

async function sha1(msg,msg1,msg2) {
  const hash = nodeCrypto.createHash('sha1');
  hash.update(msg);
  if (msg1) {
    hash.update(msg1);
  }
  if (msg2) {
    hash.update(msg2);
  }
  return hash.digest();
}

async function sha256(msg) {
  const hash = nodeCrypto.createHash('sha256');
  hash.update(msg);
  return hash.digest();
}

async function publicEncrypt(key,buffer) {
  return nodeCrypto.publicEncrypt(key,buffer);
}

module.exports = {
  sha1,
  sha256,
  publicEncrypt
}