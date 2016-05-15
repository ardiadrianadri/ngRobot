declare var commonWebSockets:any;
declare var checkForEmulator:any;
declare var toHashMap:any;
declare var _WebSocket:any;

interface NativeWebSockets_I{
    _reCreate:any;
    _notify:any;
    _notifyBrowser:any;
    on:any;
    off:any;
    addEventListener:any;
    removeEventListener:any;
    open:any;
    close:any;
    send:any;
    _startQueueRunner:any;
    _send:any;
    state:any;
    isOpen:any;
    isClosed:any;
    isClosing:any;
    isConnecting:any;
    getRemoteSocketAddress:any;
    protocol:any;
    readyState:any;
    url:any;
    bufferedAmount:any;
    extensions:any;
    android:any;
    CLOSE_CODE:any;
    NOT_YET_CONNECTED:any;
    CONNECTING:any;
    OPEN:any;
    CLOSING:any;
    CLOSED:any;
}

declare var NativeWebSockets:NativeWebSockets_I;
