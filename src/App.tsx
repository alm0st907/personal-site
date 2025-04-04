import GitHubCalendar from 'react-github-calendar'

function App() {
    return (
        <>
            <div className="h-screen w-full flex flex-col items-center justify-center bg-[#121212] text-[#e0e0e0]">
                <h1 className="text-6xl mx-2 pb-4">Hi, I'm Garrett Rudisill 👋</h1>
                <div className={"m-2"}>
                    <p>I am a senior full stack developer, busy with a day job.</p>
                    <p>I will make something flashier eventually, but this will do for now.</p>
                </div>
                <br/>
                <div className="flex flex-col items-center m-2 p-2">
                    <a href="https://github.com/alm0st907">
                        <p>@alm0st907 on GitHub</p>
                        <div className="w-[380px] overflow-auto">
                            <GitHubCalendar username="alm0st907"/>
                        </div>
                    </a>
                </div>
                <br/>
                <a href="https://www.linkedin.com/in/garrett-rudisill/" className="underline text-blue-500">Connect with me on LinkedIn</a>
                <br/>
                <a href="https://anotherdeveloper.substack.com/" className="underline text-blue-500">Substack</a>
            </div>
        </>
    )
}

export default App