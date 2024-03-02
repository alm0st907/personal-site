/**
 * v0 by Vercel.
 * @see https://v0.dev/t/T64k3ZCwYpb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <main className="w-full py-12 md:py-24">
      <div className="container flex flex-col gap-4 px-4 md:px-6">
        <header className="flex flex-col gap-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Portfolio</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Welcome to my portfolio. Below you'll find a list of commands. Type "help" to get started.
            </p>
          </div>
        </header>
        <div className="grid gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 select-none sm:text-sm dark:text-gray-400">
              {`
                                  >
                                `}
            </span>
            <div className="grid gap-1">
              <h3 className="font-semibold">projects</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">List of my projects.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500 select-none sm:text-sm dark:text-gray-400">
              {`
                                  >
                                `}
            </span>
            <div className="grid gap-1">
              <h3 className="font-semibold">skills</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">My skills and expertise.</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="border-t pt-4 grid gap-2">
            <h2 className="text-2xl font-bold tracking-tighter">My Projects</h2>
            <div className="grid gap-0.5">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Type "project info" followed by the project number to get more details.
              </p>
            </div>
          </div>
          <div className="border-t pt-4 grid gap-2">
            <h2 className="text-2xl font-bold tracking-tighter">My Skills & Expertise</h2>
            <div className="grid gap-0.5">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Type "skills info" followed by the skill number to get more details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


