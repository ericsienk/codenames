import { CardRevealAction } from './card-reveal-action';

export class ActionStack {

    private currentActionIndex: number;
    private actionStack: CardRevealAction[];

    constructor() {
        this.currentActionIndex = -1;
        this.actionStack = [];
    }

    public hasUndo() {
        return this.currentActionIndex > -1 && this.actionStack.length && this.currentActionIndex <= this.actionStack.length;
    }

    public hasRedo() {
        return this.actionStack.length && (this.actionStack.length - this.currentActionIndex) > 1;
    }

    public undo(defaultResponse) {
        const action = this.actionStack[this.currentActionIndex];
        if (!action) {
            return defaultResponse;
        }

        const response = action.undo();
        this.currentActionIndex--;
        return response;
    }

    public redo(defaultResponse) {
        const action = this.actionStack[this.currentActionIndex + 1];
        if (!action) {
            return defaultResponse;
        }

        const response = action.do();
        this.currentActionIndex++;
        return response;
    }

    public do(action) {
        if (this.hasRedo()) {
            this.actionStack.splice(this.currentActionIndex + 1);
        }
        this.actionStack.push(action);
        this.currentActionIndex++;
        return action.do();
    }
}