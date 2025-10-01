

export const WIDTH = 900, HEIGHT = 540;
export const TILE = 30;           // for a subtle grid
export const GAME_LEN = 60;       // seconds
export const GOAL = 15;           // crops to win

export const State = Object.freeze({ MENU: "MENU", PLAYING: "PLAYING", PAUSED: "PAUSED", GAME_OVER: "GAME_OVER", WIN: "WIN" });

/**
 * 
 * @param {number} v 
 * @param {number} lo 
 * @param {number} hi 
 * @returns {number} 
 */
export const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
/**
 * 
 * @param {Object} a 
 * @param {Object} b 
 * @returns {boolean} 
 */
export const aabb = (a, b) => a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

// ---- Base Entity ----
export class Entity {
    constructor(x, y, w, h) { this.x = x; this.y = y; this.w = w; this.h = h; this.dead = false; }
    update(dt, game) { }
    draw(ctx) { }
}