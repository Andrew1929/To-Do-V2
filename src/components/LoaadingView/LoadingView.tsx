import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import './LoadingView.css';

export function LoadingView () {
    return (
        <div className='loading-view'>
            <DotLottieReact
                src="\animations\loading animation.json"
                loop
                autoplay
                style={{ width: "8rem", height: "8rem" }}
            />

            <span className='loading-view__title'>Loading your tasks</span>

            <span className='loading-view__text'>Pleas wait a moment</span>
        </div>
    )
}