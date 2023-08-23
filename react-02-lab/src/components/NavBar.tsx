
export default function NavBar() {
  return (
    <div>     
     <nav className="bg-indigo-500">
     <div className="max-w-7xl mx-0 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
         <div className="flex items-center">
         <img className="h-12 w-20" src="./src/assets/favicon.ico"alt="Logo"/>
        <div className="md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="/" className="text-white hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="/login" className="text-white hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log In</a>
        </div>
       </div>
     </div>

  </div>
</div>
</nav>
</div>
  )
}
