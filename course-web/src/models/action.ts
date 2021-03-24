export interface IAction<P> {
    readonly type: string,
    readonly payload?: P
}