const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="bg-black h-screen">{children}</main>
    </>
  )
}

export default RootLayout
