import classes from './service.module.css'

export function Service(props) {
    if(props.page =="Service"){
        if (typeof document !== 'undefined') {
            console.clear();
            let canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');
    
            let width = canvas.width = window.innerWidth,
                height = canvas.height = window.innerHeight;
    
            window.addEventListener('resize', function () {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            });
    
            document.body.appendChild(canvas);
    
            let circ = (4 * (Math.sqrt(2) - 1) / 3);
            let c = circ;
    
            let count = Math.PI;
    
            function drawBezierCircle(cx, cy, r) {
    
                let c;
                let offsetX = 20 * Math.sin(count);
                let offsetY = 15 * Math.cos(count * 2);
                r = r / 2;
    
                count += 0.03;
    
                ctx.translate(cx, cy); // translate to centerpoint
    
                ctx.beginPath();
    
                // top right
                c = circ + (0.2 * Math.sin(count));
                ctx.moveTo(offsetX + 0, offsetY + -r);
                ctx.bezierCurveTo(
                    offsetX + c * r, offsetY + -r,
                    offsetX + r, offsetY + -c * r,
                    offsetX + r, offsetY + 0
                );
    
                // bottom right
                c = circ + (0.2 * Math.cos(count));
                ctx.bezierCurveTo(
                    offsetX + r, offsetY + c * r,
                    offsetX + c * r, offsetY + r,
                    offsetX + 0, offsetY + r
                );
    
                // bottom left
                c = circ + (0.2 * Math.sin(count * 2));
                ctx.bezierCurveTo(
                    offsetX + -c * r, offsetY + r,
                    offsetX + -r, offsetY + c * r,
                    offsetX + -r, offsetY + 0
                );
    
                // top left
                c = circ + (0.2 * Math.cos(count + 1));
                ctx.bezierCurveTo(
                    offsetX + -r, offsetY + -c * r,
                    offsetX + -c * r, offsetY + -r,
                    offsetX + 0, offsetY + -r
                );
    
                ctx.fill();
            }
    
            function render() {
                requestAnimationFrame(render);
    
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, width, height);
    
                drawBezierCircle(width / 2, height / 2, 300);
            }
    
            render();
        }
    }
}