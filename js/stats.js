// Programa que verifica o STATUS da memória de HD
const os = require('os')
const log = require('./logger')

// SetInverval() função Global que executa a cada // "x" segundos - conforme definição do usuario.
setInterval(() => {
        const { freemem, totalmem } = os
        const total = parseInt(totalmem() / 1024 / 1024)
        const mem = parseInt(freemem() / 1024 / 1024)
        const percents = parseInt((mem / total) * 100)

        const stats = {
            free: `${mem} MB`,
            total: `${total} MB`,
            usage: `${percents} %`
        }

        console.clear()
        console.log("=== === PC STATS === ===")
        console.table(stats)
        log(`${JSON.stringify(stats)}\n`)

    }, 1000) //tempo de espera em segundos.