/**
 * 小游戏入口
 */
import * as THREE from '../libs/three.js'
window.THREE = THREE
import game from './game/game.js'

class Main {
    constructor() {

    }
    static init() {
        game.init()

    }
}

export default Main