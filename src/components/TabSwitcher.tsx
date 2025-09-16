import { useState } from "react"; 

const TabSwitcher: React.FC = () => {
    const [selected, setSelected] = useState<"links" | "resume">("links");

    return (
        <div>
            <div className="
                    m-[0.25rem] 
                    py-0
                    rounded-md 
                    outline-2

                    bg-sky-950 
                    text-gray-800 
                    outline-sky-800

                    dark:bg-sky-950 
                    dark:text-gray-300
                    dark:outline-sky-800

                    flex
                    flex-row
                    ">
                <button
                    className={`
                        p-[0.25rem] 
                        m-[0.05rem] 
                        mx-0.25
                        rounded-md 
                        cursor-pointer

                        flex
                        grow
                        justify-center

                        text-gray-800 

                        dark:text-gray-300

                        ${selected === "links" ? "bg-sky-800" : "bg-sky-950"}

                    `}
                    onClick={() => setSelected("links")}
                >
                    links
                </button>
                <button
                    className={`
                        p-[0.25rem] 
                        m-[0.05rem] 
                        mx-0.25
                        rounded-md 
                        cursor-pointer

                        flex
                        grow
                        justify-center

                        text-gray-800 

                        dark:text-gray-300

                        ${selected === "resume" ? "bg-sky-800" : "bg-sky-950"}
                    `}
                    onClick={() => setSelected("resume")}
                >
                    resume
                </button>
            </div>
            <div>
                { selected == "links" && (
                    <div className="

                    ">
                        <div>
                            <div className="
                                m-2
                                p-1

                                bg-sky-900 
                                text-gray-800 
                                outline-sky-700

                                dark:bg-sky-900 
                                dark:text-gray-300
                                dark:outline-sky-700

                                outline-2
                                rounded-md

                                flex
                            ">
                                <a href="https://linkedin.com/in/sophie-kostovski-06091b270" target="_blank" rel="noopener noreferrer" className="grow text-center">linkedin</a>
                            </div>
                            <div className="
                                m-2
                                p-1

                                bg-sky-900 
                                text-gray-800 
                                outline-sky-700

                                dark:bg-sky-900 
                                dark:text-gray-300
                                dark:outline-sky-700

                                outline-2
                                rounded-md

                                flex
                            "> 
                                <a href="https://github.com/solipsisms" target="_blank" rel="noopener noreferrer" className="grow text-center">github</a>
                            </div>
                            <div className="
                                m-2
                                p-1

                                bg-sky-900 
                                text-gray-800 
                                outline-sky-700

                                dark:bg-sky-900 
                                dark:text-gray-300
                                dark:outline-sky-700

                                outline-2
                                rounded-md

                                flex
                            ">
                            <a href="mailto:sophie.kostovski@outlook.com" className="grow text-center">email</a>
                        </div>
                        </div>
                    </div>
                )}
                { selected == "resume" && (
                    <div>
                        <div className="
                            m-2
                            p-1

                            bg-sky-900 
                            text-gray-800 
                            outline-sky-700

                            dark:bg-sky-900 
                            dark:text-gray-300
                            dark:outline-sky-700

                            outline-2
                            rounded-md

                            flex
                        ">
                            <a className="grow text-center" href="/resume">view</a>
                        </div>
                        <div className="
                            m-2
                            p-1

                            bg-sky-900 
                            text-gray-800 
                            outline-sky-700

                            dark:bg-sky-900 
                            dark:text-gray-300
                            dark:outline-sky-700

                            outline-2
                            rounded-md

                            flex
                        ">
                            <a href="sophie-kostovski-resume.pdf" download="sophie-kostovski.pdf" className="grow text-center">download</a>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default TabSwitcher;