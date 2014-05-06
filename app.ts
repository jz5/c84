class Canvas {
    element: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(element: HTMLCanvasElement) {
        this.element = element;
        this.context = element.getContext("2d");
    }

    drawImage(src: string) {
        var img = new Image();
        img.onload = () => {
            this.context.drawImage(img, 0, 0, this.element.width, this.element.height);
        };
        img.src = src;
    }

    drawBackground(backColor: any) {
        this.context.fillStyle = backColor;
        this.context.fillRect(0, 0, this.element.width, this.element.height);
    }

    convertToImage(type: string = "image/png"): HTMLImageElement {
        var img = new Image();
        img.src = this.element.toDataURL(type);
        return img;
    }
}

window.onload = () => {
    var c = new Canvas(<HTMLCanvasElement>document.getElementById("canvas"));
    c.drawBackground("#c0ffee");
    c.drawImage("images/character.png");

    var btn = <HTMLButtonElement>document.getElementById("pattern1");
    btn.onclick = () => {
        c.drawBackground("#c0ffee");
        c.drawImage("images/character.png");
    };

    var gen = <HTMLButtonElement>document.getElementById("gen");
    gen.onclick = () => {
        var result = c.convertToImage();
        var div = <HTMLDivElement>document.getElementById("result");
        if (div.childNodes.length > 0) {
            div.removeChild(div.childNodes[0]);
        }
        div.appendChild(result);
    };
};