import Thickness from "./models/Thickness";
import Point from "./models/Point";
import Size from "./models/Size";

const circleCanvas = <HTMLCanvasElement>document.getElementById("circle-canvas");
const circleCanvasContext = circleCanvas.getContext("2d");

function drawCircle(canvas: HTMLCanvasElement, radius: number, pointsCount: number, margin: Thickness) {
    if (pointsCount < 0) {
        throw "Points count cannot be less than zero.";
    }

    const canvasContext = canvas.getContext("2d");

    const diameter = radius * 2;
    const canvasSize = new Size(
        margin.left + margin.right + diameter,
        margin.top + margin.bottom + diameter);

    [canvas.width, canvas.height] = [canvasSize.width, canvasSize.height]

    if (pointsCount == 0) {
        return;
    }

    const centerPoint = new Point(radius + margin.left, radius + margin.top);
    const pointsDistance = 360 / pointsCount;

    for (let point = 0; point < pointsCount; point++) {
        const degAngle = pointsDistance * point;
        const radAngle = degAngle * Math.PI / 180;
        const shift = new Point(Math.cos(radAngle) * radius, Math.sin(radAngle) * radius);

        //TODO
    }
}