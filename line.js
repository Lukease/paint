import { position, x, y, color, range, activeTool } from './main.js'
import { ctx } from './canvas.js'

let tempPath = null

export const paintLine = () => {
    ctx.beginPath()
    tempPath = {
        type: 'path',
        paths: [
            {
                tempPath
            }
        ],
        color: color.value,
        width: range.value
    }
}

export const drawLine = event => {
    if (activeTool === 'line' && tempPath !== null) {
        ctx.strokeStyle = color.value
        ctx.lineWidth = range.value
        position(event)
        ctx.lineTo(x, y)
        ctx.stroke()
        tempPath = {
            ...tempPath,
            paths: tempPath.paths.concat({ x, y })
        }

        return tempPath
    }
}

export const addPath = onAddShape => {
    onAddShape(tempPath)
    tempPath = null
}