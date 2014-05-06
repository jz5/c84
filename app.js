var Canvas = (function () {
    function Canvas(element) {
        this.element = element;
        this.context = element.getContext("2d");
    }
    Canvas.prototype.drawImage = function (src) {
        var _this = this;
        var img = new Image();
        img.onload = function () {
            _this.context.drawImage(img, 0, 0, _this.element.width, _this.element.height);
        };
        img.src = src;
    };

    Canvas.prototype.drawBackground = function (backColor) {
        this.context.fillStyle = backColor;
        this.context.fillRect(0, 0, this.element.width, this.element.height);
    };

    Canvas.prototype.convertToImage = function (type) {
        if (typeof type === "undefined") { type = "image/png"; }
        var img = new Image();
        img.src = this.element.toDataURL(type);
        return img;
    };
    return Canvas;
})();

window.onload = function () {
    var c = new Canvas(document.getElementById("canvas"));
    c.drawBackground("#c0ffee");
    c.drawImage("images/character.png");

    var btn = document.getElementById("pattern1");
    btn.onclick = function () {
        c.drawBackground("#c0ffee");
        c.drawImage("images/character.png");
    };

    var gen = document.getElementById("gen");
    gen.onclick = function () {
        var result = c.convertToImage();
        var div = document.getElementById("result");
        if (div.childNodes.length > 0) {
            div.removeChild(div.childNodes[0]);
        }
        div.appendChild(result);
    };
};
//@ sourceMappingURL=app.js.map
