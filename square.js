import { position, x, y, color, range, activeTool } from './main.js'
import { ctx, clearCanvas } from './canvas.js'

let tempSquare = null

export const paintFigure = (event, startX, startY) => {
    ctx.beginPath()
    tempSquare = {
        type: 'square',
        paths: [
            {
                tempSquare
            }
        ],
        color: color.value,
        width: range.value,
        startX,
        startY
    }

    return tempSquare
}

export const drawSquare = (event, startX, startY) => {
    if (tempSquare !== null && activeTool === 'square') {
        ctx.strokeStyle = color.value
        ctx.lineWidth = range.value
        position(event)

        const w = x - startX
        const h = y - startY

        clearCanvas()
        ctx.strokeRect(startX, startY, w, h)

        tempSquare = {
            ...tempSquare,
            paths: tempSquare.paths.concat({w, h})
        }

        return tempSquare
    }
}

export const addSquare = onAddShape => {
    const squareWH = tempSquare.paths.length - 1

    tempSquare.paths = tempSquare.paths[squareWH]
    onAddShape(tempSquare)
    tempSquare = null
}

