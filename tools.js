const main = document.querySelector('.main')
const paint = document.querySelector('.paint')

export const createToolsBox = () => {
    main.appendChild(paint)
    const toolBox = document.createElement('div')

    toolBox.classList.add('tools')
    paint.appendChild(toolBox)

    const pen = document.createElement('button')

    pen.classList.add('tools__pen')
    toolBox.appendChild(pen)

    const color = document.createElement('input')

    color.classList.add('tools__color')
    color.type = 'color'
    color.value = '#e66465'
    color.classList.add()
    toolBox.appendChild(color)

    const eraser = document.createElement('button')

    eraser.classList.add('tools__eraser')
    toolBox.appendChild(eraser)

    const strokeWidth = document.createElement('input')

    strokeWidth.type = 'range'
    strokeWidth.classList.add('tools__range')
    toolBox.appendChild(strokeWidth)
    strokeWidth.min = 1
    strokeWidth.max = 9

    const square = document.createElement('button')

    square.type = 'img'
    square.classList.add('tools__square')
    toolBox.appendChild(square)

    const circle = document.createElement('button')

    circle.classList.add('tools__circle')
    toolBox.appendChild(circle)

    return toolBox
}