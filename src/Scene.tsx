import React, {useEffect, useRef} from "react";
import {Engine, Scene, EngineOptions, SceneOptions, Color4} from '@babylonjs/core';
import './style.css';

export type BabylonjsProps = {
    antialias?: boolean
    engineOptions?: EngineOptions
    adaptToDeviceRatio?: boolean
    renderChildrenWhenReady?: boolean
    sceneOptions?: SceneOptions
    onSceneReady: (scene: Scene) => void
    observeCanvasResize?: boolean
    onRender?: (scene: Scene) => void
    children?: React.ReactNode
};

export default (props: BabylonjsProps) => {
    const {antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest} = props;

    const reactCanvas = useRef(null);

    useEffect(() => {
        const {current: canvas} = reactCanvas;

        if (!canvas) return;

        const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);
        const scene = new Scene(engine, sceneOptions);
        scene.clearColor = new Color4(0, 0, 0, 0);
        if (scene.isReady()) {
            onSceneReady(scene);
        } else {
            scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
        }

        engine.runRenderLoop(() => {
            if (typeof onRender === "function") onRender(scene);
            scene.render();
        });

        const resize = () => {
            scene.getEngine().resize();
        };

        if (window) {
            window.addEventListener("resize", resize);
        }

        return () => {
            scene.getEngine().dispose();

            if (window) {
                window.removeEventListener("resize", resize);
            }
        };
    }, [antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady]);

    return <canvas ref={reactCanvas} {...rest} />;
};

