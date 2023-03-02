import { position, x, y, color, range, activeTool } from './main.js'
import { canvas, ctx } from './canvas.js'

let tempCircle = null
let radius = 0
let endAngle = 0

export const circleTemp = startX => {
    tempCircle = {
        type: 'circle',
        color: color.value,
        width: range.value,
        startX,
        x,
        y,
        radius,
        endAngle
    }

    return tempCircle
}

export const drawCircle = (event, startX) => {
    if (tempCircle !== null && activeTool === 'circle') {
        ctx.strokeStyle = color.value
        ctx.lineWidth = range.value
        position(event)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath()

        radius = Math.abs(x - startX)
        endAngle = x * Math.PI

        ctx.arc(x, y, radius, startX, endAngle)
        ctx.stroke()
        tempCircle = {
            ...tempCircle,
            x,
            y,
            radius,
            endAngle
        }

        return tempCircle
    }
}

export const addCircle = onAddShape => {
    onAddShape(tempCircle)
    tempCircle = null
}
