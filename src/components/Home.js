'use client'

import Script from 'next/script';
import { useState } from 'react'

export default function Home(){
    const [bot, setBot] = useState(null);
    return(
        <div className="flex mx-[100px]">
            <div className="flex-1">
                <h1>
                    Discover How Automation can Revolutionize Your Business
                </h1>
                <h2>
                    Streamline Support, Improve Efficiency and Scale with AI 🤖
                </h2>
                <a>
                    <span>Book a free demo</span>
                </a>
            </div>
            <div className="flex-1">
                <Script src="https://cdn.voiceflow.com/widget/bundle.mjs" strategy="afterInteractive" onLoad={() => { 
                    window.voiceflow.chat.load({
                    verify: { projectID: '66397bfa9602254be842ef38' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    render: {
                        mode: 'embedded',
                        target: document.getElementById('flat-chat'),
                    },
                    autostart: false
                })
                }} />
                <div id="flat-chat"></div>    
            </div>

        </div>
    )
}