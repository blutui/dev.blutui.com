export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mx-auto flex w-full max-w-8xl flex-1 items-start px-8 lg:space-x-9">
      {/* Sidebar */}
      <div className="flex w-full min-w-0 max-w-full flex-auto space-x-8 py-8">
        <div className="w-full min-w-0 max-w-full">
          <header id="header" className="mx-auto max-w-screen-md"></header>
          <div id="content-wrapper" className="content-wrapper py-8">
            {children}
          </div>
        </div>
        {/* Table of Contents */}
      </div>
    </main>
  )
}
