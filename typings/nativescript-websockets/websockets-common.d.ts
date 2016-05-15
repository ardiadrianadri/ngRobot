interface ILiteEvent<T> {
    on(handler: { (data?: T): void });
    off(handler: { (data?: T): void });
}

interface LiteEvent<T> implements ILiteEvent<T> {
    handlers: { (data?: T): void; }[];

    on(handler: { (data?: T): void });

    off(handler: { (data?: T): void });

    trigger(data?: T);
}

interface BrowserWebSocketsEvent_I implements LiteEvent<T> {
    bubbles:any;
    cancelBubble:any;
    cancelable:any;
    defaultPrevented:any;
    eventPhase:any;
    path:any;
    returnValue:any;
    timeStamp:any;
    preventDefault:any;
    stopImmediatePropagation:any;
    stopPropagation:any;
}

declare var BrowserWebSocketsEvent: BrowserWebSocketsEvent_I;

interface BrowserWebSockets_I {
    _notify:any;
    _callbacks:any;
    _protocol:any;
    _browser:any;
    _socket:any;
    _url:any;
    _hasOpened:any;
    _timeout:any;
    _proxy:any;
    CONNECTING:any;
    OPEN:any;
    CLOSED:any;
}

declare var BrowserWebSockets:BrowserWebSockets_I;