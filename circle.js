import { position, x, y, color, range, activeTool } from './main.js'
import { canvas, ctx } from './canvas.js'

let tempCircle = null

export const circleTemp = (startX) => {
    tempCircle = {
        type: 'circle',
        paths: [
            {
                tempCircle
            }
        ],
        color: color.value,
        width: range.value,
        startX,
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

        const radius = Math.abs(x - startX)
        const endAngle = x * Math.PI

        ctx.arc(x, y, radius, startX, endAngle)
        ctx.stroke()
        tempCircle = {
            ...tempCircle,
            paths: tempCircle.paths.concat({x, y, radius, endAngle})
        }

        return tempCircle
    }
}

export const addCircle = onAddShape => {
    const circleXY = tempCircle.paths.length - 1

    tempCircle.paths = tempCircle.paths[circleXY]
    onAddShape(tempCircle)
    tempCircle = null
}
