class Event {
    constructor(sender) {
        this._sender = semder
        this._listeners = []
    }

    attach(callbacck) {
        this._listeners.push(callbacck)
    }

    notify(args) {
        for (let i = 0; i < this._listeners.length; i++) {
            this._listeners[i](sender, args)
        }
    }
}

export default Event