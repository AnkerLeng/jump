import GamePage from '../pages/game-page'
import GameOverPage from '../pages/game-page'

class GameView{
    constructor(){

    }
    showGameOverPage(){
        this.showGameOverPage.show()
    }

    restartGame(){
        this.gamePage.restart()
    }

    initGameOverPage(callbacks){
        this.gameOverPage = new GameOverPage(callbacks)
        this.gameOverPage.init()
    }

    initGamePage(callbacks){
        this.gamePage = new GamePage(callbacks)
        this.gamePage.init()
    }
}

export default new GameView()