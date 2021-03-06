import Thickness from "./models/Thickness";
import Point from "./models/Point";
import Size from "./models/Size";

function drawCircle(canvas: HTMLCanvasElement, radius: number, pointsCount: number, pointsWidth: number, pointsColor: string, margin: Thickness) {
    if (pointsCount < 0) {
        throw "Points count cannot be less than zero.";
    }

    const canvasContext = <CanvasRenderingContext2D>canvas.getContext("2d");

    const diameter = radius * 2;
    const canvasSize = new Size(
        margin.left + margin.right + diameter + pointsWidth * 2,
        margin.top + margin.bottom + diameter + pointsWidth * 2);

    [canvas.width, canvas.height] = [canvasSize.width, canvasSize.height]

    if (pointsCount == 0) {
        return;
    }

    const centerPoint = new Point(radius + margin.left + pointsWidth, radius + margin.top + pointsWidth);
    const pointsDistance = 360 / pointsCount;

    const drawPoint = (point: Point, width: number, color: string) => {
        canvasContext.beginPath();
        canvasContext.arc(point.x, point.y, width, 0, 2 * Math.PI, false);
        canvasContext.fillStyle = color;
        canvasContext.fill();
    }

    for (let point = 0; point < pointsCount; point++) {
        const degAngle = pointsDistance * point;
        const radAngle = degAngle * Math.PI / 180;
        const shift = new Point(Math.cos(radAngle) * radius, Math.sin(radAngle) * radius);

        const pointPosition = new Point(centerPoint.x + shift.x, centerPoint.y + shift.y);
        drawPoint(pointPosition, pointsWidth, pointsColor);
    }
}

const circleCanvas = <HTMLCanvasElement>document.getElementById("circle-canvas");

let i = 0;
let increment = 1;
setInterval(() => {
    if (i >= 100) {
        increment = -1;
    }
    else if (i <= 1) {
        increment = 1;
    }
    console.log(i);
    drawCircle(
        circleCanvas,
        300,
        i,
        7,
        "#2196f3",
        Thickness.factory.createThickness1(10));
    i += increment;
}, 50)
