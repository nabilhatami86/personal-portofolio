import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Developer",
                    "Software Engineer",
                    "Frontend Developer",
                    "Backend Developer",
                    "Cloud Computing",
                    "Cloud Engineer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
