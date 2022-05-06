export const canvas = document.querySelector('#canvas')
export const ctx = canvas.getContext('2d')

ctx.font = '16px Arial'
canvas.setAttribute('width', `${canvas.scrollWidth}`)
canvas.setAttribute('height', `${canvas.scrollHeight}`)

export const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

export const canvasStyle = shape => {
    ctx.strokeStyle = shape.color
    ctx.lineWidth = shape.width
}

export const renderSquare = shape => {
    canvasStyle(shape)
    ctx.strokeRect(shape.startX, shape.startY, shape.paths.w, shape.paths.h)
}

export const renderCircle = shape => {
    ctx.beginPath()
    canvasStyle(shape)
    ctx.arc(shape.x, shape.y, shape.radius, shape.startX, shape.endAngle)
    ctx.stroke()
}

export const renderPath = (shape) => {
    ctx.beginPath()
    canvasStyle(shape)

    shape.paths.forEach(({x, y}) => {
        ctx.lineTo(x, y)
        ctx.stroke()

    })
}