(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONFIG_ENDPOINT",
    ()=>CONFIG_ENDPOINT,
    "SANDBOX_ID",
    ()=>SANDBOX_ID,
    "THEME_MEDIA_QUERY",
    ()=>THEME_MEDIA_QUERY,
    "THEME_STORAGE_KEY",
    ()=>THEME_STORAGE_KEY,
    "cn",
    ()=>cn,
    "getAppConfig",
    ()=>getAppConfig,
    "transcriptionToChatMessage",
    ()=>transcriptionToChatMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'tailwind-merge'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/app-config'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const CONFIG_ENDPOINT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_APP_CONFIG_ENDPOINT;
const SANDBOX_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SANDBOX_ID;
const THEME_STORAGE_KEY = 'theme-mode';
const THEME_MEDIA_QUERY = '(prefers-color-scheme: dark)';
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return twMerge((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function transcriptionToChatMessage(textStream, room) {
    return {
        id: textStream.streamInfo.id,
        timestamp: textStream.streamInfo.timestamp,
        message: textStream.text,
        from: textStream.participantInfo.identity === room.localParticipant.identity ? room.localParticipant : Array.from(room.remoteParticipants.values()).find((p)=>p.identity === textStream.participantInfo.identity)
    };
}
const getAppConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cache"])(async (headers)=>{
    if (CONFIG_ENDPOINT) {
        var _ref;
        const sandboxId = (_ref = SANDBOX_ID !== null && SANDBOX_ID !== void 0 ? SANDBOX_ID : headers.get('x-sandbox-id')) !== null && _ref !== void 0 ? _ref : '';
        try {
            if (!sandboxId) {
                throw new Error('Sandbox ID is required');
            }
            const response = await fetch(CONFIG_ENDPOINT, {
                cache: 'no-store',
                headers: {
                    'X-Sandbox-ID': sandboxId
                }
            });
            const remoteConfig = await response.json();
            const config = {
                sandboxId,
                ...APP_CONFIG_DEFAULTS
            };
            for (const [key, entry] of Object.entries(remoteConfig)){
                if (entry === null) continue;
                // Only include app config entries that are declared in defaults and, if set,
                // share the same primitive type as the default value.
                if (key in APP_CONFIG_DEFAULTS && APP_CONFIG_DEFAULTS[key] === undefined || typeof config[key] === entry.type && typeof config[key] === typeof entry.value) {
                    // @ts-expect-error I'm not sure quite how to appease TypeScript, but we've thoroughly checked types above
                    config[key] = entry.value;
                }
            }
            return config;
        } catch (error) {
            console.error('ERROR: getAppConfig() - lib/utils.ts', error);
        }
    }
    return APP_CONFIG_DEFAULTS;
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/welcome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Welcome",
    ()=>Welcome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Welcome = (param)=>{
    let { disabled, startButtonText, onStartCall, ref } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        inert: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background fixed inset-0 mx-auto flex h-svh flex-col items-center justify-center text-center', disabled ? 'z-10' : 'z-20'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "64",
                height: "64",
                viewBox: "0 0 64 64",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "text-fg0 mb-4 size-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M15 24V40C15 40.7957 14.6839 41.5587 14.1213 42.1213C13.5587 42.6839 12.7956 43 12 43C11.2044 43 10.4413 42.6839 9.87868 42.1213C9.31607 41.5587 9 40.7957 9 40V24C9 23.2044 9.31607 22.4413 9.87868 21.8787C10.4413 21.3161 11.2044 21 12 21C12.7956 21 13.5587 21.3161 14.1213 21.8787C14.6839 22.4413 15 23.2044 15 24ZM22 5C21.2044 5 20.4413 5.31607 19.8787 5.87868C19.3161 6.44129 19 7.20435 19 8V56C19 56.7957 19.3161 57.5587 19.8787 58.1213C20.4413 58.6839 21.2044 59 22 59C22.7956 59 23.5587 58.6839 24.1213 58.1213C24.6839 57.5587 25 56.7957 25 56V8C25 7.20435 24.6839 6.44129 24.1213 5.87868C23.5587 5.31607 22.7956 5 22 5ZM32 13C31.2044 13 30.4413 13.3161 29.8787 13.8787C29.3161 14.4413 29 15.2044 29 16V48C29 48.7957 29.3161 49.5587 29.8787 50.1213C30.4413 50.6839 31.2044 51 32 51C32.7956 51 33.5587 50.6839 34.1213 50.1213C34.6839 49.5587 35 48.7957 35 48V16C35 15.2044 34.6839 14.4413 34.1213 13.8787C33.5587 13.3161 32.7956 13 32 13ZM42 21C41.2043 21 40.4413 21.3161 39.8787 21.8787C39.3161 22.4413 39 23.2044 39 24V40C39 40.7957 39.3161 41.5587 39.8787 42.1213C40.4413 42.6839 41.2043 43 42 43C42.7957 43 43.5587 42.6839 44.1213 42.1213C44.6839 41.5587 45 40.7957 45 40V24C45 23.2044 44.6839 22.4413 44.1213 21.8787C43.5587 21.3161 42.7957 21 42 21ZM52 17C51.2043 17 50.4413 17.3161 49.8787 17.8787C49.3161 18.4413 49 19.2044 49 20V44C49 44.7957 49.3161 45.5587 49.8787 46.1213C50.4413 46.6839 51.2043 47 52 47C52.7957 47 53.5587 46.6839 54.1213 46.1213C54.6839 45.5587 55 44.7957 55 44V20C55 19.2044 54.6839 18.4413 54.1213 17.8787C53.5587 17.3161 52.7957 17 52 17Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/components/welcome.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/welcome.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-fg1 max-w-prose pt-1 leading-6 font-medium",
                children: "Chat live with your voice AI agent"
            }, void 0, false, {
                fileName: "[project]/components/welcome.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                variant: "primary",
                size: "lg",
                onClick: onStartCall,
                className: "mt-6 w-64 font-mono",
                children: startButtonText
            }, void 0, false, {
                fileName: "[project]/components/welcome.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "fixed bottom-5 left-0 z-20 flex w-full items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-fg1 max-w-prose pt-1 text-xs leading-5 font-normal text-pretty md:text-sm",
                    children: [
                        "Need help getting set up? Check out the",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://docs.livekit.io/agents/start/voice-ai/",
                            className: "underline",
                            children: "Voice AI quickstart"
                        }, void 0, false, {
                            fileName: "[project]/components/welcome.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/welcome.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/welcome.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/welcome.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Welcome;
var _c;
__turbopack_context__.k.register(_c, "Welcome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$welcome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/welcome.tsx [app-client] (ecmascript)");
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
const MotionWelcome = motion.create(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$welcome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Welcome"]);
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

//# sourceMappingURL=_59cb8824._.js.map