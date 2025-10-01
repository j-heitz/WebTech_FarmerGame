import { Entity } from './globals.js';

/**
 * Class for crop in the game.
 */
export class Crop extends Entity {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {string} [type="wheat"] 
     */

    constructor(x, y, type) {
        super(x, y, 20, 26);
        this.type = type;
        this.sway = Math.random() * Math.PI * 2;
    }


    /**
     * 
     * @param {number} dt 
     */

    update(dt, game) { this.sway += dt * 2; }

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     */
    draw(ctx) {

        const { x, y, w, h } = this;
        ctx.strokeStyle = "#2f7d32";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x + w / 2, y + h);
        ctx.quadraticCurveTo(x + w / 2 + Math.sin(this.sway) * 3, y + h / 2, x + w / 2, y);
        ctx.stroke();
        ctx.fillStyle = this.type.color;
        ctx.beginPath();
        ctx.ellipse(x + w / 2, y, 8, 6, 0, 0, Math.PI * 2);
        ctx.fill();
    }
}