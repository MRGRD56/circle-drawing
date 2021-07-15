export default class Thickness {
    public top: number;
    public right: number;
    public bottom: number;
    public left: number;

    constructor(top: number, right: number, bottom: number, left: number) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }

    public static factory = {
        createThickness0(): Thickness {
            return new Thickness(0, 0, 0, 0);
        },
        createThickness2(vertical: number, horizontal: number): Thickness {
            return new Thickness(vertical, horizontal, vertical, horizontal);
        },
        createThickness4(top: number, right: number, bottom: number, left: number): Thickness {
            return new Thickness(top, right, bottom, left);
        }
    };
}