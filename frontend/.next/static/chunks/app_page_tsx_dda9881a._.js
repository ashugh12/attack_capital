(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$hCIn9AsS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__L__as__LiveKitRoom$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/room-hCIn9AsS.mjs [app-client] (ecmascript) <export L as LiveKitRoom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$Bz2b1Fa9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-Bz2b1Fa9.mjs [app-client] (ecmascript) <export R as RoomAudioRenderer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function ChatInterface(param) {
    let { messages, setMessages, room } = param;
    _s();
    const [messageInput, setMessageInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const sendMessage = async ()=>{
        if (!messageInput.trim() || !room) return;
        const userMessage = {
            id: Date.now().toString(),
            text: messageInput,
            isUser: true
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        try {
            // Send message to the agent via LiveKit data channel
            await room.localParticipant.publishData(new TextEncoder().encode(JSON.stringify({
                type: 'chat',
                message: messageInput
            })));
            setMessageInput('');
            console.log('Message sent to agent:', messageInput);
        } catch (error) {
            console.error('Failed to send message:', error);
            // Remove the message if sending failed
            setMessages((prev)=>prev.filter((msg)=>msg.id !== userMessage.id));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "status connected",
                        children: "Agent Status: Connected"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "message ".concat(message.isUser ? 'user' : 'assistant'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        message.isUser ? 'You' : 'Assistant',
                                        ":"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                " ",
                                message.text
                            ]
                        }, message.id, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)),
                    messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Start typing or speaking to chat with the assistant..."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-input",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "input",
                        value: messageInput,
                        onChange: (e)=>setMessageInput(e.target.value),
                        onKeyPress: (e)=>e.key === 'Enter' && sendMessage(),
                        placeholder: "Type your message..."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-secondary",
                        onClick: sendMessage,
                        disabled: !messageInput.trim(),
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(ChatInterface, "fdMsX/+CHgDpsNP8RCH/Msf/Kgo=");
_c = ChatInterface;
function Home() {
    var _room_localParticipant;
    _s1();
    const [room, setRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connectionState, setConnectionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Disconnected);
    const [isConnecting, setIsConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [serverUrl, setServerUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const connectToRoom = async ()=>{
        setIsConnecting(true);
        try {
            const response = await fetch('/api/connection-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    room_config: {
                        agents: [
                            {
                                agent_name: 'assistant'
                            }
                        ]
                    }
                })
            });
            if (!response.ok) {
                throw new Error('Failed to get connection details');
            }
            const connectionDetails = await response.json();
            setServerUrl(connectionDetails.serverUrl);
            const newRoom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"]({
                adaptiveStream: true,
                dynacast: true
            });
            newRoom.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Connected, ()=>{
                console.log('Connected to room');
                setConnectionState(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Connected);
                setIsConnecting(false);
            });
            newRoom.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, ()=>{
                console.log('Disconnected from room');
                setConnectionState(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Disconnected);
                setIsConnecting(false);
            });
            newRoom.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].DataReceived, (payload)=>{
                try {
                    const data = JSON.parse(new TextDecoder().decode(payload));
                    if (data.type === 'chat' && data.message) {
                        setMessages((prev)=>[
                                ...prev,
                                {
                                    id: Date.now().toString(),
                                    text: data.message,
                                    isUser: false
                                }
                            ]);
                    }
                } catch (error) {
                    console.error('Error parsing received data:', error);
                }
            });
            await newRoom.connect(connectionDetails.serverUrl, connectionDetails.participantToken);
            setRoom(newRoom);
        } catch (error) {
            console.error('Failed to connect:', error);
            setIsConnecting(false);
        }
    };
    const disconnectFromRoom = async ()=>{
        if (room) {
            await room.disconnect();
            setRoom(null);
        }
    };
    const getStatusText = ()=>{
        if (isConnecting) return 'Connecting...';
        if (connectionState === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Connected) return 'Connected';
        return 'Disconnected';
    };
    const getStatusClass = ()=>{
        if (isConnecting) return 'status connecting';
        if (connectionState === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectionState"].Connected) return 'status connected';
        return 'status disconnected';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "AI Voice Assistant"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: '14px',
                    color: '#666',
                    marginBottom: '20px'
                },
                children: "Built by Ashutosh - Connection Architecture & Integration"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: getStatusClass(),
                children: [
                    "Status: ",
                    getStatusText()
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            !room ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Click the button below to connect to the voice assistant."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn",
                        onClick: connectToRoom,
                        disabled: isConnecting,
                        children: isConnecting ? 'Connecting...' : 'Connect'
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$room$2d$hCIn9AsS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__L__as__LiveKitRoom$3e$__["LiveKitRoom"], {
                room: room,
                connect: true,
                token: (room === null || room === void 0 ? void 0 : (_room_localParticipant = room.localParticipant) === null || _room_localParticipant === void 0 ? void 0 : _room_localParticipant.identity) || '',
                serverUrl: serverUrl,
                options: {
                    adaptiveStream: true,
                    dynacast: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatInterface, {
                        messages: messages,
                        setMessages: setMessages,
                        room: room
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '20px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn btn-secondary",
                            onClick: disconnectFromRoom,
                            children: "Disconnect"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 211,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$Bz2b1Fa9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__["RoomAudioRenderer"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s1(Home, "VG1nCJnldDEigRx2jcrQIy+feaE=");
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChatInterface");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_page_tsx_dda9881a._.js.map