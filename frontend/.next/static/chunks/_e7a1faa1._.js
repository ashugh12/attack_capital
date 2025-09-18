(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/useConnectionDetails.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useConnectionDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/browser/util/decode_jwt.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const ONE_MINUTE_IN_MILLISECONDS = 60 * 1000;
function useConnectionDetails(appConfig) {
    _s();
    // Generate room connection details, including:
    //   - A random Room name
    //   - A random Participant name
    //   - An Access Token to permit the participant to join the room
    //   - The URL of the LiveKit server to connect to
    //
    // In real-world application, you would likely allow the user to specify their
    // own participant name, and possibly to choose from existing rooms to join.
    const [connectionDetails, setConnectionDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchConnectionDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConnectionDetails.useCallback[fetchConnectionDetails]": async ()=>{
            setConnectionDetails(null);
            var _process_env_NEXT_PUBLIC_CONN_DETAILS_ENDPOINT;
            const url = new URL((_process_env_NEXT_PUBLIC_CONN_DETAILS_ENDPOINT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONN_DETAILS_ENDPOINT) !== null && _process_env_NEXT_PUBLIC_CONN_DETAILS_ENDPOINT !== void 0 ? _process_env_NEXT_PUBLIC_CONN_DETAILS_ENDPOINT : '/api/connection-details', window.location.origin);
            let data;
            try {
                var _appConfig_sandboxId;
                const res = await fetch(url.toString(), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Sandbox-Id': (_appConfig_sandboxId = appConfig.sandboxId) !== null && _appConfig_sandboxId !== void 0 ? _appConfig_sandboxId : ''
                    },
                    body: JSON.stringify({
                        room_config: appConfig.agentName ? {
                            agents: [
                                {
                                    agent_name: appConfig.agentName
                                }
                            ]
                        } : undefined
                    })
                });
                data = await res.json();
            } catch (error) {
                console.error('Error fetching connection details:', error);
                throw new Error('Error fetching connection details!');
            }
            setConnectionDetails(data);
            return data;
        }
    }["useConnectionDetails.useCallback[fetchConnectionDetails]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useConnectionDetails.useEffect": ()=>{
            fetchConnectionDetails();
        }
    }["useConnectionDetails.useEffect"], [
        fetchConnectionDetails
    ]);
    const isConnectionDetailsExpired = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConnectionDetails.useCallback[isConnectionDetailsExpired]": ()=>{
            const token = connectionDetails === null || connectionDetails === void 0 ? void 0 : connectionDetails.participantToken;
            if (!token) {
                return true;
            }
            const jwtPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$browser$2f$util$2f$decode_jwt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJwt"])(token);
            if (!jwtPayload.exp) {
                return true;
            }
            const expiresAt = new Date(jwtPayload.exp * 1000 - ONE_MINUTE_IN_MILLISECONDS);
            const now = new Date();
            return expiresAt <= now;
        }
    }["useConnectionDetails.useCallback[isConnectionDetailsExpired]"], [
        connectionDetails === null || connectionDetails === void 0 ? void 0 : connectionDetails.participantToken
    ]);
    const existingOrRefreshConnectionDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useConnectionDetails.useCallback[existingOrRefreshConnectionDetails]": async ()=>{
            if (isConnectionDetailsExpired() || !connectionDetails) {
                return fetchConnectionDetails();
            } else {
                return connectionDetails;
            }
        }
    }["useConnectionDetails.useCallback[existingOrRefreshConnectionDetails]"], [
        connectionDetails,
        fetchConnectionDetails,
        isConnectionDetailsExpired
    ]);
    return {
        connectionDetails,
        refreshConnectionDetails: fetchConnectionDetails,
        existingOrRefreshConnectionDetails
    };
}
_s(useConnectionDetails, "Wop9I4k3+n+9NPQeRe2N/99fX7M=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/app.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "App",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'motion/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$Bz2b1Fa9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-Bz2b1Fa9.mjs [app-client] (ecmascript) <export R as RoomAudioRenderer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$B1pwZF2L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomContext$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/contexts-B1pwZF2L.mjs [app-client] (ecmascript) <export R as RoomContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$Bz2b1Fa9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__q__as__StartAudio$3e$__ = __turbopack_context__.i("[project]/node_modules/@livekit/components-react/dist/components-Bz2b1Fa9.mjs [app-client] (ecmascript) <export q as StartAudio>");
(()=>{
    const e = new Error("Cannot find module '@/components/alert-toast'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/session-view'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/sonner'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/welcome'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConnectionDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useConnectionDetails.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const MotionWelcome = motion.create(Welcome);
_c = MotionWelcome;
const MotionSessionView = motion.create(SessionView);
_c1 = MotionSessionView;
function App(param) {
    let { appConfig } = param;
    _s();
    const room = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[room]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"]()
    }["App.useMemo[room]"], []);
    const [sessionStarted, setSessionStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { refreshConnectionDetails, existingOrRefreshConnectionDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConnectionDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(appConfig);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const onDisconnected = {
                "App.useEffect.onDisconnected": ()=>{
                    setSessionStarted(false);
                    refreshConnectionDetails();
                }
            }["App.useEffect.onDisconnected"];
            const onMediaDevicesError = {
                "App.useEffect.onMediaDevicesError": (error)=>{
                    toastAlert({
                        title: 'Encountered an error with your media devices',
                        description: "".concat(error.name, ": ").concat(error.message)
                    });
                }
            }["App.useEffect.onMediaDevicesError"];
            room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].MediaDevicesError, onMediaDevicesError);
            room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, onDisconnected);
            return ({
                "App.useEffect": ()=>{
                    room.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, onDisconnected);
                    room.off(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].MediaDevicesError, onMediaDevicesError);
                }
            })["App.useEffect"];
        }
    }["App.useEffect"], [
        room,
        refreshConnectionDetails
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            let aborted = false;
            if (sessionStarted && room.state === 'disconnected') {
                Promise.all([
                    room.localParticipant.setMicrophoneEnabled(true, undefined, {
                        preConnectBuffer: appConfig.isPreConnectBufferEnabled
                    }),
                    existingOrRefreshConnectionDetails().then({
                        "App.useEffect": (connectionDetails)=>room.connect(connectionDetails.serverUrl, connectionDetails.participantToken)
                    }["App.useEffect"])
                ]).catch({
                    "App.useEffect": (error)=>{
                        if (aborted) {
                            // Once the effect has cleaned up after itself, drop any errors
                            //
                            // These errors are likely caused by this effect rerunning rapidly,
                            // resulting in a previous run `disconnect` running in parallel with
                            // a current run `connect`
                            return;
                        }
                        toastAlert({
                            title: 'There was an error connecting to the agent',
                            description: "".concat(error.name, ": ").concat(error.message)
                        });
                    }
                }["App.useEffect"]);
            }
            return ({
                "App.useEffect": ()=>{
                    aborted = true;
                    room.disconnect();
                }
            })["App.useEffect"];
        }
    }["App.useEffect"], [
        room,
        sessionStarted,
        appConfig.isPreConnectBufferEnabled
    ]);
    const { startButtonText } = appConfig;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionWelcome, {
                startButtonText: startButtonText,
                onStartCall: ()=>setSessionStarted(true),
                disabled: sessionStarted,
                initial: {
                    opacity: 1
                },
                animate: {
                    opacity: sessionStarted ? 0 : 1
                },
                transition: {
                    duration: 0.5,
                    ease: 'linear',
                    delay: sessionStarted ? 0 : 0.5
                }
            }, "welcome", false, {
                fileName: "[project]/components/app.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$contexts$2d$B1pwZF2L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomContext$3e$__["RoomContext"].Provider, {
                value: room,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$Bz2b1Fa9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__RoomAudioRenderer$3e$__["RoomAudioRenderer"], {}, void 0, false, {
                        fileName: "[project]/components/app.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$livekit$2f$components$2d$react$2f$dist$2f$components$2d$Bz2b1Fa9$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__q__as__StartAudio$3e$__["StartAudio"], {
                        label: "Start Audio"
                    }, void 0, false, {
                        fileName: "[project]/components/app.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionSessionView, {
                        appConfig: appConfig,
                        disabled: !sessionStarted,
                        sessionStarted: sessionStarted,
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: sessionStarted ? 1 : 0
                        },
                        transition: {
                            duration: 0.5,
                            ease: 'linear',
                            delay: sessionStarted ? 0.5 : 0
                        }
                    }, "session-view", false, {
                        fileName: "[project]/components/app.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/app.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toaster, {}, void 0, false, {
                fileName: "[project]/components/app.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/app.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(App, "P3mlJkjridG5kI6PGmuYAWEmxYw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useConnectionDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c2 = App;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "MotionWelcome");
__turbopack_context__.k.register(_c1, "MotionSessionView");
__turbopack_context__.k.register(_c2, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e7a1faa1._.js.map