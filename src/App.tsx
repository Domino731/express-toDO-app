import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <div className="pt-6 space-y-4">
                    <blockquote>
                        <p className="text-lg">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption>
                        <div>
                            Sarah Dayan
                        </div>
                        <div>
                            Staff Engineer, Algolia
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
}

export default App;
