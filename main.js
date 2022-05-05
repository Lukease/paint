import { createToolsBox } from '/tools.js'
import { drawSquare, paintFigure, addSquare } from './square.js'
import { drawLine, paintLine, addPath } from './line.js'
import { drawCircle, circleTemp, addCircle } from './circle.js'
import { ctx, canvas, clearCanvas, canvasStyle, renderSquare, renderCircle } from './canvas.js'

export let x = 0
export let y = 0
export let shapes = []
export let activeTool = ''
let startX = 0
let startY = 0

export const renderShapes = () => {
    shapes.forEach((shape, index) => {
        switch (shape.type) {
            case 'path': {
                ctx.beginPath()
                canvasStyle(shape)

                shape.paths.forEach(({x, y}) => {
                    ctx.lineTo(x, y)
                    ctx.stroke()
                })
            }

            case 'square': {
                renderSquare(shape)
            }

            case 'circle': {
                renderCircle(shape)
            }
            default:
                return null
        }
    })
}

createToolsBox()

const pen = document.querySelector('.tools__pen')
export const color = document.querySelector('.tools__color')
export const range = document.querySelector('.tools__range')
const eraser = document.querySelector('.tools__eraser')
const square = document.querySelector('.tools__square')
const circle = document.querySelector('.tools__circle')

export const position = event => {
    x = event.clientX - canvas.offsetLeft
    y = event.clientY - canvas.offsetTop
}

const erase = () => {
    clearCanvas()
    shapes = shapes.slice(0, shapes.length - 1)
    renderShapes()
}

pen.addEventListener('click', () => {
    activeTool = 'line'
})

square.addEventListener('click', () => {
    activeTool = 'square'
})

circle.addEventListener('click', () => {
    activeTool = 'circle'
})

eraser.addEventListener('click', erase)


canvas.addEventListener('mousedown', event => {
    if (activeTool === '') {
    }

    if (activeTool === 'line') {
        paintLine()
    }

    if (activeTool === 'square') {
        startX = event.clientX - canvas.offsetLeft
        startY = event.clientY - canvas.offsetLeft
        paintFigure(event, startX, startY)
    }

    if (activeTool === 'circle') {
        startX = event.clientX - canvas.offsetLeft
        circleTemp(startX)
        ctx.beginPath()
    }
})

canvas.addEventListener('mousemove', event => {
    if (activeTool === 'line') {
        drawLine(event)
    }

    if (activeTool === 'square') {
        drawSquare(event, startX, startY)
        renderShapes()
    }

    if (activeTool === 'circle') {
        drawCircle(event, startX)
        renderShapes()
    }
})

canvas.addEventListener('mouseup', () => {
    if (activeTool === 'line') {
        addPath(shape => {
            if (shape !== null) {
                shapes = shapes.concat(shape)
                clearCanvas()
                renderShapes()
            }
        })
    }

    if (activeTool === 'square') {
        addSquare(shape => {
            if (shape !== null) {
                shapes = shapes.concat(shape)
                clearCanvas()
                renderShapes()
            }
        })
    }

    if (activeTool === 'circle') {
        addCircle(shape => {
            if (shape !== null) {
                shapes = shapes.concat(shape)
                clearCanvas()
                renderShapes()
            }
        })
    }
})

