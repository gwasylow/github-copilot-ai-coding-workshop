(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_eba21b._.js", {

"[project]/app/lib/audioplayer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
const TRACKS = [
    {
        id: "intro",
        label: "Play INTRO",
        filename: "familiada_intro.mp3"
    },
    {
        id: "correct",
        label: "Play CORRECT",
        filename: "familiada_correct.mp3"
    },
    {
        id: "fail",
        label: "Play FAIL",
        filename: "familiada_fail.mp3"
    }
];
const AudioPlayer = ()=>{
    _s();
    const [audioState, setAudioState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isPlaying: false,
        currentTrack: null,
        isLoading: false,
        error: null
    });
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Handle audio events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioPlayer.useEffect": ()=>{
            const audio = audioRef.current;
            if (!audio) return;
            const handlers = {
                ended: {
                    "AudioPlayer.useEffect": ()=>setAudioState({
                            "AudioPlayer.useEffect": (prev)=>({
                                    ...prev,
                                    isPlaying: false,
                                    currentTrack: null
                                })
                        }["AudioPlayer.useEffect"])
                }["AudioPlayer.useEffect"],
                error: {
                    "AudioPlayer.useEffect": ()=>setAudioState({
                            "AudioPlayer.useEffect": (prev)=>({
                                    ...prev,
                                    isPlaying: false,
                                    isLoading: false,
                                    error: "Playback error"
                                })
                        }["AudioPlayer.useEffect"])
                }["AudioPlayer.useEffect"],
                loadstart: {
                    "AudioPlayer.useEffect": ()=>setAudioState({
                            "AudioPlayer.useEffect": (prev)=>({
                                    ...prev,
                                    isLoading: true
                                })
                        }["AudioPlayer.useEffect"])
                }["AudioPlayer.useEffect"],
                canplay: {
                    "AudioPlayer.useEffect": ()=>setAudioState({
                            "AudioPlayer.useEffect": (prev)=>({
                                    ...prev,
                                    isLoading: false,
                                    error: null
                                })
                        }["AudioPlayer.useEffect"])
                }["AudioPlayer.useEffect"]
            };
            Object.entries(handlers).forEach({
                "AudioPlayer.useEffect": ([event, handler])=>{
                    audio.addEventListener(event, handler);
                }
            }["AudioPlayer.useEffect"]);
            return ({
                "AudioPlayer.useEffect": ()=>{
                    Object.entries(handlers).forEach({
                        "AudioPlayer.useEffect": ([event, handler])=>{
                            audio.removeEventListener(event, handler);
                        }
                    }["AudioPlayer.useEffect"]);
                }
            })["AudioPlayer.useEffect"];
        }
    }["AudioPlayer.useEffect"], []);
    const playTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioPlayer.useCallback[playTrack]": async (filename)=>{
            if (!audioRef.current) return;
            const audio = audioRef.current;
            const isSameTrack = audioState.currentTrack === filename;
            try {
                if (isSameTrack) {
                    if (audioState.isPlaying) {
                        audio.pause();
                        setAudioState({
                            "AudioPlayer.useCallback[playTrack]": (prev)=>({
                                    ...prev,
                                    isPlaying: false
                                })
                        }["AudioPlayer.useCallback[playTrack]"]);
                    } else {
                        await audio.play();
                        setAudioState({
                            "AudioPlayer.useCallback[playTrack]": (prev)=>({
                                    ...prev,
                                    isPlaying: true
                                })
                        }["AudioPlayer.useCallback[playTrack]"]);
                    }
                } else {
                    audio.src = `/music/${filename}`;
                    await audio.play();
                    setAudioState({
                        isPlaying: true,
                        currentTrack: filename,
                        isLoading: false,
                        error: null
                    });
                }
            } catch (error) {
                console.error("Playback failed:", error);
                setAudioState({
                    "AudioPlayer.useCallback[playTrack]": (prev)=>({
                            ...prev,
                            isPlaying: false,
                            error: "Playback failed"
                        })
                }["AudioPlayer.useCallback[playTrack]"]);
            }
        }
    }["AudioPlayer.useCallback[playTrack]"], [
        audioState
    ]);
    const getButtonLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioPlayer.useCallback[getButtonLabel]": (track)=>{
            if (audioState.currentTrack === track.filename) {
                if (audioState.isLoading) return "Loading...";
                return audioState.isPlaying ? "Pause" : "Play";
            }
            return track.label;
        }
    }["AudioPlayer.useCallback[getButtonLabel]"], [
        audioState
    ]);
    const getButtonStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioPlayer.useCallback[getButtonStyle]": (track)=>({
                ...styles.button,
                opacity: audioState.isLoading && audioState.currentTrack === track.filename ? 0.7 : 1
            })
    }["AudioPlayer.useCallback[getButtonStyle]"], [
        audioState
    ]);
    const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AudioPlayer.useMemo[styles]": ()=>({
                container: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    padding: "20px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    maxWidth: "400px"
                },
                button: {
                    padding: "10px 20px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: "#0070f3",
                    color: "white",
                    cursor: "pointer",
                    width: "100%",
                    transition: "background-color 0.2s ease"
                },
                error: {
                    color: "red",
                    marginTop: "10px"
                }
            })
    }["AudioPlayer.useMemo[styles]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                preload: "auto"
            }, void 0, false, {
                fileName: "[project]/app/lib/audioplayer.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            TRACKS.map((track)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>playTrack(track.filename),
                    style: getButtonStyle(track),
                    disabled: audioState.isLoading && audioState.currentTrack === track.filename,
                    children: getButtonLabel(track)
                }, track.id, false, {
                    fileName: "[project]/app/lib/audioplayer.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)),
            audioState.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$5_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.error,
                children: audioState.error
            }, void 0, false, {
                fileName: "[project]/app/lib/audioplayer.tsx",
                lineNumber: 143,
                columnNumber: 28
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/lib/audioplayer.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
};
_s(AudioPlayer, "+SOLGKP90IoRCMLPmTnzdAUibmI=");
_c = AudioPlayer;
const __TURBOPACK__default__export__ = AudioPlayer;
var _c;
__turbopack_refresh__.register(_c, "AudioPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_eba21b._.js.map